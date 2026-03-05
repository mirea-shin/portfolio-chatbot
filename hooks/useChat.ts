'use client';

import { useState, useCallback } from 'react';
import { Message } from '@/types';

const MAX_USER_MESSAGES = 10;
const STORAGE_KEY = 'chat_usage';

type ChatUsage = {
  count: number;
  date: string; // YYYY-MM-DD
};

function getTodayString() {
  return new Date().toISOString().slice(0, 10);
}

function loadUsage(): ChatUsage {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { count: 0, date: getTodayString() };
    const parsed: ChatUsage = JSON.parse(raw);
    // 날짜가 바뀌면 카운트 초기화
    if (parsed.date !== getTodayString()) {
      return { count: 0, date: getTodayString() };
    }
    return parsed;
  } catch {
    return { count: 0, date: getTodayString() };
  }
}

function saveUsage(count: number) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ count, date: getTodayString() })
  );
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userMessageCount, setUserMessageCount] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return loadUsage().count;
  });

  const isLimitReached = userMessageCount >= MAX_USER_MESSAGES;

  const sendMessage = useCallback(
    async (content: string) => {
      if (isLimitReached) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content,
      };

      const newCount = userMessageCount + 1;
      setUserMessageCount(newCount);
      saveUsage(newCount);

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, userMessage].map(({ role, content }) => ({
              role,
              content,
            })),
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.error ?? '오류가 발생했습니다.');
          return;
        }

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.content,
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch {
        setError('네트워크 오류가 발생했습니다. 연결을 확인해주세요.');
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLimitReached, userMessageCount]
  );

  return {
    messages,
    isLoading,
    error,
    isLimitReached,
    userMessageCount,
    maxMessages: MAX_USER_MESSAGES,
    sendMessage,
  };
};
