'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink((v) => !v), 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center px-6 text-center">
      {/* 귀여운 캐릭터 */}
      <div className="mb-8 select-none">
        <div className="text-6xl mb-2">( ˘ω˘ )</div>
        <div
          className="text-xs text-zinc-400 font-mono tracking-widest transition-opacity duration-300"
          style={{ opacity: blink ? 1 : 0 }}
        >
          . . . zzz
        </div>
      </div>

      {/* 404 */}
      <h1 className="text-[120px] font-bold leading-none text-zinc-500 select-none mb-2">
        404
      </h1>

      {/* 메시지 */}
      <p className="text-zinc-800 font-semibold text-xl mb-2">
        이 페이지는 길을 잃었어요
      </p>
      <p className="text-zinc-800 text-sm mb-10">
        찾으시는 페이지가 사라졌거나 주소가 틀렸을 수도 있어요.
      </p>

      {/* 홈으로 버튼 */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors duration-200"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
