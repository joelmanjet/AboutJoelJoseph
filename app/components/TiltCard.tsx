'use client';

import { useRef } from 'react';

export default function TiltCard({
  children,
  className,
  style,
  tilt = 6,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(800px) rotateX(${(py - 0.5) * -tilt}deg) rotateY(${(px - 0.5) * tilt}deg)`;
    el.style.setProperty('--sheen-x', `${px * 100}%`);
    el.style.setProperty('--sheen-y', `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative transition-transform duration-150 ease-out will-change-transform ${className ?? ''}`}
      style={style}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(220px circle at var(--sheen-x, 50%) var(--sheen-y, 50%), rgba(255,255,255,0.6), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
      {children}
    </div>
  );
}
