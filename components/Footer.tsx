export default function Footer() {
  return (
    <footer className="py-8 bg-surface-950 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-display text-sm font-bold tracking-wide text-white uppercase">
              NW Window Tinting
            </span>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <span className="text-xs text-zinc-600">
              Vancouver, WA — Celebrating 10 Years
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+13607506501"
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              Fourth Plain: 360-750-6501
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="tel:+13608105138"
              className="text-xs text-zinc-500 hover:text-white transition-colors"
            >
              Mill Plain: 360-810-5138
            </a>
          </div>
        </div>
        <p className="text-center text-[11px] text-zinc-700 mt-4">
          &copy; {new Date().getFullYear()} NW Window Tinting. All rights reserved.
          This giveaway is operated solely by NW Window Tinting.
        </p>
      </div>
    </footer>
  );
}
