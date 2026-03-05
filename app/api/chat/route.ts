import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { SYSTEM_PROMPT } from '@/constants/portfolio';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IP당 시간당 최대 요청 수
const RATE_LIMIT = 20;
const WINDOW_MS = 60 * 60 * 1000; // 1시간

type RateLimitEntry = { count: number; resetAt: number };
type GlobalWithRateLimit = typeof globalThis & { rateLimitMap?: Map<string, RateLimitEntry> };

// globalThis에 붙여서 HMR·서버 재시작 시에도 유지
const g = globalThis as GlobalWithRateLimit;
if (!g.rateLimitMap) g.rateLimitMap = new Map();
const rateLimitMap = g.rateLimitMap;

function getRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT - 1 };
  }

  if (entry.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: RATE_LIMIT - entry.count };
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const { allowed } = getRateLimit(ip);

  if (!allowed) {
    return NextResponse.json(
      { error: '오늘 너무 많은 질문을 주셨어요 :) 더 궁금한 점은 이메일로 문의해 주세요.' },
      { status: 429 }
    );
  }

  try {
    const { messages } = await req.json();

    const lastUserMessage = messages.findLast((m: { role: string }) => m.role === 'user');
    if (lastUserMessage) {
      console.log(`[chat] ${new Date().toISOString()} | "${lastUserMessage.content}"`);
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const content = response.choices[0].message.content ?? '응답을 생성할 수 없습니다. 다시 시도해주세요.';
    return NextResponse.json({ content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json(
      { error: '응답을 생성하는 데 실패했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
