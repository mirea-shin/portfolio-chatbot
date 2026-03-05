import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#18181b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* 상단 작은 라벨 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: '#fff',
              borderRadius: 6,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 900,
              color: '#18181b',
            }}
          >
            M
          </div>
          <span style={{ color: '#71717a', fontSize: 16, letterSpacing: 2 }}>
            PORTFOLIO
          </span>
        </div>

        {/* 이름 */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: -2,
          }}
        >
          Mirea Shin
        </div>

        {/* 직함 */}
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            fontWeight: 400,
            letterSpacing: 1,
          }}
        >
          Frontend Developer
        </div>

        {/* 하단 구분선 + 설명 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 60,
          }}
        >
          <div style={{ width: 40, height: 1, background: '#3f3f46' }} />
          <span style={{ color: '#52525b', fontSize: 16 }}>
            React · TypeScript · Next.js
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
