'use client';

import { useState, useCallback } from 'react';
import { Message } from '@/types';

const MAX_USER_MESSAGES = 10;

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userMessageCount = messages.filter((m) => m.role === 'user').length;
  const isLimitReached = userMessageCount >= MAX_USER_MESSAGES;

  const sendMessage = useCallback(async (content: string) => {
    if (isLimitReached) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })),
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

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      setError('네트워크 오류가 발생했습니다. 연결을 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLimitReached]);

  return { messages, isLoading, error, isLimitReached, userMessageCount, maxMessages: MAX_USER_MESSAGES, sendMessage };
};
