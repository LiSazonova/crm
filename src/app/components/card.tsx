import Link from 'next/link';

export default function Card({
  title,
  desc,
  href,
  gradient,
  kpi,
  kpiLabel,
}: {
  title: string;
  desc: string;
  href: string;
  gradient: string;
  kpi: string;
  kpiLabel: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md p-6
                 hover:ring-white/20 transition-all"
      style={{ animation: 'floaty 6s ease-in-out infinite' }}
      aria-label={title}
    >
      {/* мягкий внутренний градиент */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-tr ${gradient} opacity-30`}
      />
      {/* стеклянный блик */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/15 text-white/70">
          Open
        </span>
      </div>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-4xl font-bold tracking-tight">{kpi}</div>
          <div className="text-xs text-white/60 mt-1">{kpiLabel}</div>
        </div>
        <div className="translate-x-0 group-hover:translate-x-1 transition-transform">
          <svg className="size-6 opacity-80" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
