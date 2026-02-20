# 포트폴리오 프로젝트 컨텍스트

## 프로젝트 개요
신미례(Mirea Shin)의 개인 포트폴리오 웹사이트.
일반 포트폴리오 페이지 + OpenAI 기반 챗봇 위젯을 결합한 형태.

## 기술 스택
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI API (gpt-4o)
- **패키지 매니저**: npm

## 프로젝트 구조
```
portfolio-chatbot/
├── app/
│   ├── layout.tsx              # Navbar + ChatWidget 전역 마운트
│   ├── page.tsx                # 메인 포트폴리오 페이지 (섹션 조합)
│   ├── globals.css             # scroll-behavior: smooth 포함
│   └── api/chat/
│       └── route.ts            # OpenAI API Route (서버사이드, Rate Limit 포함)
├── components/
│   ├── chat/
│   │   └── ChatWidget.tsx      # 우측 하단 플로팅 챗봇 위젯 (UI만 담당)
│   ├── sections/               # 서버 컴포넌트
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Navbar.tsx          # sticky nav, 스크롤 시 배경 전환
│       └── AnimateOnScroll.tsx # Intersection Observer 기반 fade-in 래퍼 (클라이언트)
├── hooks/
│   ├── useChat.ts              # 챗봇 상태 및 API 호출 로직
│   └── useInView.ts            # IntersectionObserver 훅
├── types/
│   └── index.ts                # 공통 타입 정의
├── constants/
│   └── portfolio.ts            # 포트폴리오 데이터 + OpenAI System Prompt
└── .env.local                  # OPENAI_API_KEY
```

## 환경변수
```env
OPENAI_API_KEY=your_api_key_here
```

## API Route 스펙 (`/api/chat`)
- **Method**: POST
- **Request body**: `{ messages: { role: 'user' | 'assistant', content: string }[] }`
- **Response**: `{ content: string }` or `{ error: string }`
- IP당 시간당 20회 Rate Limit (`globalThis`에 Map 유지, HMR 재시작에도 보존)
- 사용자 질문을 `console.log`로 기록 → Vercel Logs 탭에서 확인 가능

## ChatWidget 동작 스펙
- 세션당 최대 **10개** 질문 (8개 이상 시 잔여 개수 경고)
- 입력 최대 **200자** (90% 이상 입력 시 빨간색 카운터 표시)
- 초기 상태에서 **Quick Reply 칩** 4개 표시 (대화 시작 후 사라짐)
- 챗봇 닫힌 상태에서 버튼에 **ping 애니메이션** 표시
- 에러 시 빨간 말풍선으로 표시

## 작업 규칙
- 컴포넌트는 화살표 함수 + export default 형태로 작성
- 타입은 `types/index.ts`에서 중앙 관리
- 포트폴리오 데이터는 컴포넌트에 하드코딩하지 않고 `constants/portfolio.ts`에서 import
- 챗봇 상태 로직은 `hooks/useChat.ts`에서 관리, `ChatWidget.tsx`는 UI만 담당
- 섹션 컴포넌트는 서버 컴포넌트 유지 (`'use client'` 금지), 애니메이션은 `AnimateOnScroll` 래퍼로 처리

## 잔여 과업
- [ ] 프로젝트 카드 클릭 시 모달로 프로젝트 상세 정보 표출
- [ ] 프로젝트 카드에 배포 링크 추가 (배포 후 `constants/portfolio.ts`의 `links` 필드에 추가)
