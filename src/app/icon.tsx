import { ImageResponse } from 'next/og';

// Browser tab / bookmark favicon - matches the gold "P" seal emblem used in
// the site header (src/components/Nav.tsx), so the tab icon and the on-page
// logo are the same mark instead of a generic default.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1C1A14, #0A0A0B)',
          border: '2px solid #D4AF37',
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 900,
            color: '#F0D890',
            fontFamily: 'serif',
          }}
        >
          P
        </span>
      </div>
    ),
    { ...size }
  );
}
