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
          background: 'linear-gradient(135deg, #0F172A 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #38BDF8, #2DD4BF, #4ADE80)',
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
          {/* Logo/Brand name */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              letterSpacing: '-2px',
            }}
          >
            Ascella Studios
          </h1>

          {/* Tagline with gradient */}
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

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '32px 0 0 0',
              maxWidth: '800px',
              lineHeight: 1.5,
            }}
          >
            Designing and building apps that make a difference
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
              color: 'rgba(255, 255, 255, 0.5)',
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
