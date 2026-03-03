import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#18181b',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* 노트북 화면 */}
          <div
            style={{
              width: 20,
              height: 13,
              border: '1.5px solid rgba(255,255,255,0.85)',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: 'white',
                fontSize: 9,
                fontWeight: 900,
                letterSpacing: -0.5,
                lineHeight: 1,
              }}
            >
              M
            </span>
          </div>
          {/* 노트북 하단 베이스 */}
          <div
            style={{
              width: 24,
              height: 2,
              background: 'rgba(255,255,255,0.75)',
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
