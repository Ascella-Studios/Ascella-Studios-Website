import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Ascella Studios - Software, built carefully';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const mark = `data:image/png;base64,${readFileSync(
    join(process.cwd(), 'public/brand/ascella-mark.png')
  ).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 88px',
          fontFamily: 'system-ui, sans-serif',
          borderTop: '8px solid #38BDF8',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={mark} width={88} height={88} alt="" />
          <span style={{ fontSize: '56px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '-1.5px' }}>
            Ascella Studios
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '64px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '-2px', lineHeight: 1.1 }}>
            Software, built carefully.
          </span>
          <span style={{ fontSize: '30px', color: '#94A3B8', marginTop: '24px' }}>
            Our own apps, and websites for small businesses.
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '22px', color: '#64748B' }}>
          <span>A Frontier Forge Technologies company</span>
          <span>ascellastudios.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
