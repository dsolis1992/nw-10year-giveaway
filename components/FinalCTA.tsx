export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-surface-950 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,144,255,0.5) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-4">
          Don&apos;t Scroll Past This
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight gradient-text mb-5 text-balance">
          10 Years. 10 Winners. Enter Now.
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          It takes 30 seconds to enter. Every entrant gets access to a special
          anniversary tint offer — whether you win or not.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#enter"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white font-display text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 active:scale-[0.98]"
          >
            Enter the Giveaway
          </a>
          <a
            href="#locations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white font-display text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
