export function ContactHeaderArt({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none h-31 w-37.25 ${className}`}>
      <svg viewBox="0 0 115 83" className="absolute top-10 left-0 h-20.75 w-28.75 fill-yellow">
        <path d="M30.5718 82.1696L7.98419e-05 -0.00022698L114.076 55.4573L30.5718 82.1696Z" />
      </svg>
      <div className="absolute top-4.5 left-13.75 size-23.25 rounded-full bg-magenta" />
      <svg
        viewBox="0 0 89 60"
        fill="none"
        className="absolute top-0 left-6.5 h-15 w-22.25 stroke-cyan"
      >
        <path
          d="M9 50.3823L22.3299 50.3823C29.5718 50.3824 36.1328 46.1124 39.0652 39.4908C41.97 32.9316 48.6634 28.8859 55.8211 29.3631L56.5596 29.4124C64.4504 29.9384 71.8732 25.6312 75.332 18.5194L79.9608 9.00199"
          strokeWidth="18"
          strokeLinecap="round"
        />
      </svg>
      <img
        src="/images/devin-contact.webp"
        alt=""
        width={94}
        height={100}
        className="absolute top-3 left-13.75 h-25 w-23.5"
      />
    </div>
  );
}
