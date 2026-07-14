'use client';

import { useEffect, useRef } from 'react';

export default function ReactiveBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame: number | null = null;
    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.25;

    const apply = () => {
      el.style.setProperty('--glow-x', `${x}px`);
      el.style.setProperty('--glow-y', `${y}px`);
      frame = null;
    };

    const handlePointerMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame === null) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* champagne aftertaste: stays clear near the cursor, only warms in at the far edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px circle at var(--glow-x, 50%) var(--glow-y, 20%), transparent 0%, transparent 40%, rgba(242,233,214,0.3) 75%, rgba(242,233,214,0.45) 100%)',
        }}
      />
      {/* chrome spotlight that tracks the cursor like light sweeping a glossy surface */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(550px circle at var(--glow-x, 50%) var(--glow-y, 20%), rgba(255,255,255,0.8), transparent 72%)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
