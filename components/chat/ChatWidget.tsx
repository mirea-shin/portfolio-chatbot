'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/hooks/useChat';
import { Message } from '@/types';

const MAX_INPUT_LENGTH = 200;

const QUICK_REPLIES = [
  '기술 스택이 뭐예요?',
  '어떤 경력이 있나요?',
  '프로젝트를 소개해주세요',
  '연락처를 알 수 있을까요?',
];

const MessageBubble = ({ message }: { message: Message }) => {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-zinc-900 text-white rounded-br-sm'
            : 'bg-zinc-100 text-zinc-800 rounded-bl-sm'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const {
    messages,
    isLoading,
    error,
    isLimitReached,
    userMessageCount,
    maxMessages,
    sendMessage,
  } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading || isLimitReached) return;
    setInput('');
    await sendMessage(trimmed);
  };

  const handleQuickReply = (question: string) => {
    if (isLoading || isLimitReached) return;
    sendMessage(question);
  };

  const showQuickReplies = messages.length === 0 && !isLoading;
  const isNearLimit = userMessageCount >= maxMessages - 2;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-80 h-[480px] bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between bg-white">
            <div>
              <p className="text-sm font-semibold text-zinc-900">
                AI 어시스턴트
              </p>
              <p className="text-xs text-zinc-400">신미례에 대해 물어보세요</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
              aria-label="닫기"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {showQuickReplies && (
              <div className="flex flex-col items-center gap-4 mt-4">
                <p className="text-xs text-zinc-400 text-center">
                  안녕하세요! 저에 대해 궁금한 것을 물어보세요 👋
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickReply(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-100 text-zinc-400 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm">
                  <span className="animate-pulse">···</span>
                </div>
              </div>
            )}
            {error && (
              <div className="flex justify-start">
                <div className="bg-red-50 text-red-500 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm border border-red-100">
                  {error}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-zinc-100">
            {isLimitReached ? (
              <div className="px-4 py-3 text-center">
                <p className="text-xs text-zinc-400">
                  세션당 최대 {maxMessages}개의 질문까지 가능해요.
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  더 궁금한 점은{' '}
                  <a
                    href="mailto:m.shin6764@gmail.com"
                    className="underline hover:text-zinc-600"
                  >
                    이메일
                  </a>
                  로 문의해주세요.
                </p>
              </div>
            ) : (
              <>
                {(isNearLimit || input.length >= MAX_INPUT_LENGTH * 0.9) && (
                  <p
                    className={`text-xs text-center pt-2 ${input.length >= MAX_INPUT_LENGTH * 0.9 ? 'text-red-400' : 'text-zinc-400'}`}
                  >
                    {input.length >= MAX_INPUT_LENGTH * 0.9
                      ? `최대 ${MAX_INPUT_LENGTH}자까지 입력 가능해요 (${input.length} / ${MAX_INPUT_LENGTH})`
                      : `질문 ${maxMessages - userMessageCount}개 남았어요`}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="px-4 py-3 flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) =>
                      setInput(e.target.value.slice(0, MAX_INPUT_LENGTH))
                    }
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 text-sm px-3 py-2 rounded-lg border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors"
                    disabled={isLoading}
                    maxLength={MAX_INPUT_LENGTH}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="px-3 py-2 bg-zinc-900 text-white text-sm rounded-lg disabled:opacity-40 hover:bg-zinc-700 transition-colors"
                  >
                    전송
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <div className="relative">
        {/* {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-zinc-900 opacity-30 animate-purse" />
        )} */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative w-14 h-14 bg-zinc-900 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-zinc-700 transition-colors text-2xl cursor-pointer ${!isOpen ? 'animate-bounce' : ''}`}
          aria-label={isOpen ? '챗봇 닫기' : '챗봇 열기'}
        >
          {isOpen ? '✕' : '💬'}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
