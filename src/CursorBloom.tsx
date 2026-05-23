import { useEffect, useRef } from "react";

export function CursorBloom() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let on = false;
    let rot = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!on) {
        on = true;
        el.classList.add("on");
      }
    };
    const onLeave = () => {
      on = false;
      el.classList.remove("on");
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      const ease = 1 - Math.pow(0.001, dt / 1000);
      x += (tx - x) * ease;
      y += (ty - y) * ease;
      const dx = tx - x;
      rot += (dx * 0.08 - rot) * 0.1;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${rot}deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-bloom" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path
          d="M 32 60 Q 30 46 32 30"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 32 48 Q 22 46 20 40 Q 28 42 32 48 Z"
          fill="color-mix(in oklch, var(--ink) 14%, transparent)"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <g transform="translate(32 22)">
          {[
            { cx: 0, cy: -9, r: 0 },
            { cx: 8, cy: -4, r: 45 },
            { cx: 8, cy: 5, r: 90 },
            { cx: 0, cy: 9, r: 135 },
            { cx: -8, cy: 5, r: 180 },
            { cx: -8, cy: -4, r: -135 },
          ].map((p, i) => (
            <ellipse
              key={i}
              cx={p.cx}
              cy={p.cy}
              rx="3.4"
              ry="8"
              transform={p.r ? `rotate(${p.r} ${p.cx} ${p.cy})` : undefined}
              fill="color-mix(in oklch, var(--accent) 28%, transparent)"
              stroke="currentColor"
              strokeWidth="0.7"
            />
          ))}
          <circle r="2.4" fill="currentColor" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
