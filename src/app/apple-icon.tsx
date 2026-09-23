import { ImageResponse } from 'next/og';

// iOS/iPadOS "Add to Home Screen" icon. Square, full-bleed background - no
// rounded corners here, iOS applies its own squircle mask on top.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
        }}
      >
        <span
          style={{
            fontSize: 108,
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
