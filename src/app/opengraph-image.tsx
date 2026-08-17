import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Ascella Studios - Apps that elevate';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Aurora washes */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '-150px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(closest-side, rgba(56, 189, 248, 0.25), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-250px',
            right: '-100px',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background:
              'radial-gradient(closest-side, rgba(45, 212, 191, 0.2), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-300px',
            left: '350px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(closest-side, rgba(74, 222, 128, 0.12), transparent 70%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#F1F5F9',
              margin: 0,
              letterSpacing: '-2px',
            }}
          >
            Ascella Studios
          </h1>

          <p
            style={{
              fontSize: '36px',
              fontWeight: 500,
              background: 'linear-gradient(90deg, #38BDF8, #2DD4BF, #4ADE80)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: '24px 0 0 0',
            }}
          >
            Apps that elevate
          </p>

          <p
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              margin: '32px 0 0 0',
              maxWidth: '800px',
              lineHeight: 1.5,
            }}
          >
            Small, carefully built apps for everyday life
          </p>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '18px',
              color: 'rgba(241, 245, 249, 0.5)',
            }}
          >
            ascellastudios.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
