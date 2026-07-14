'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressBeam() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;

    const apply = () => {
      const el = barRef.current;
      frame = null;
      if (!el) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      el.style.width = `${progress * 100}%`;
    };

    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed left-0 right-0 top-16 z-40 h-[3px]">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: '0%',
          background: '#FFFFFF',
          boxShadow: '0 0 20px rgba(255,255,255,1), 0 2px 6px rgba(120,105,75,0.2)',
        }}
      />
    </div>
  );
}
