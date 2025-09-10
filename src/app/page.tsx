import Link from 'next/link';
import Card from './components/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white antialiased flex flex-col justify-between">
      {/* Decorative gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div
          className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient(closest-side, #a78bfa, transparent 70%)',
          }}
        />
        <div
          className="absolute top-1/3 -right-28 h-[560px] w-[560px] rounded-full blur-3xl opacity-35"
          style={{
            background:
              'radial-gradient(closest-side, #34d399, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(closest-side, #f472b6, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27120%27 height=%27120%27 viewBox=%270 0 120 120%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27120%27 height=%27120%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500/80 to-emerald-400/80 ring-1 ring-white/15 shadow-md group-hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 10h4V6h6v4h4v6h-4v4H9v-4H5v-6z"
                className="fill-white/90"
              />
            </svg>
          </span>
          <span className="font-semibold tracking-wide text-white/80">
            TruScape CRM
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
          <Link
            href="/dashboard"
            className="hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/companies"
            className="hover:text-white transition-colors"
          >
            Companies
          </Link>
        </nav>
      </header>

      <section className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-col gap-10 mx-auto max-w-5xl text-center">
          <h1 className="text-[46px] leading-[1.05] font-bold sm:text-6xl md:text-7xl">
            <span className="bg-clip-text text-transparent bg-[conic-gradient(from_120deg_at_50%_50%,#A78BFA,#34D399,#F472B6,#A78BFA)]">
              CRM System
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70">
            for managing companies, promotions, and analytics
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold
                         bg-gradient-to-tr from-violet-500 to-emerald-400 text-black shadow-lg shadow-emerald-500/20
                         hover:shadow-emerald-400/40 transition-all"
            >
              Go to Dashboard
              <svg
                className="size-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/companies"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold
                         bg-white/10 ring-1 ring-white/15 backdrop-blur-md hover:bg-white/15 transition-all"
            >
              Companies
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} TruScape CRM • Built with Next.js &
        Tailwind
      </footer>
    </main>
  );
}
