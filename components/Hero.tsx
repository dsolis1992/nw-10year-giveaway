import { Shield, Star, MapPin } from 'lucide-react';
import EntryForm from './EntryForm';

const trustChips = [
  { icon: Star, label: 'Thousands of 5-Star Reviews' },
  { icon: Shield, label: 'Best of Clark County' },
  { icon: MapPin, label: '2 Vancouver Locations' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-950" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(0,144,255,0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,88,171,0.3) 0%, transparent 60%)',
        }}
      />
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div className="pt-4 sm:pt-8 lg:pt-12">
            {/* Anniversary badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-soft" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">
                Celebrating 10 Years
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[0.95] tracking-tight mb-5">
              <span className="gradient-text">10 Cars.</span>
              <br />
              <span className="gradient-text">10 Years.</span>
              <br />
              <span className="gradient-text-gold">Free Tint.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-6">
              NW Window Tinting is celebrating a decade of premium installs in
              Clark County. We&apos;re giving away 10 free car tint jobs — one
              entry, ten winners. Every entrant also gets a special anniversary
              offer after the giveaway.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs sm:text-sm text-zinc-300"
                >
                  <chip.icon className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  {chip.label}
                </div>
              ))}
            </div>

            {/* Secondary CTA for mobile - scrolls to form */}
            <a
              href="#enter"
              className="lg:hidden inline-flex items-center gap-2 px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-white font-display text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
            >
              Enter the Giveaway
            </a>

            {/* Desktop secondary CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#prizes"
                className="text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white/30"
              >
                See the prize ↓
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="#services"
                className="text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white/30"
              >
                View services ↓
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-24">
            <EntryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
import { Shield, Star, MapPin } from 'lucide-react';
import EntryForm from './EntryForm';

const trustChips = [
  { icon: Star, label: 'Thousands of 5-Star Reviews' },
  { icon: Shield, label: 'Best of Clark County' },
  { icon: MapPin, label: '2 Vancouver Locations' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 sm:pt-20 sm:pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-surface-950" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(0,144,255,0.4) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,88,171,0.3) 0%, transparent 60%)',
        }}
      />
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">
          {/* Left: copy */}
          <div className="pt-4 sm:pt-8 lg:pt-12">
            {/* Anniversary badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-soft" />
              <span className="text-xs font-mono text-brand-300 uppercase tracking-widest">
                Celebrating 10 Years
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[0.95] tracking-tight mb-5">
              <span className="gradient-text">10 Cars.</span>
              <br />
              <span className="gradient-text">10 Years.</span>
              <br />
              <span className="gradient-text-gold">Free Tint.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-6">
              NW Window Tinting is celebrating a decade of premium installs in
              Clark County. Enter for a chance to win one of 10 anniversary tint
              prizes — and every entrant gets access to a special anniversary offer
              after the giveaway.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs sm:text-sm text-zinc-300"
                >
                  <chip.icon className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                  {chip.label}
                </div>
              ))}
            </div>

            {/* Secondary CTA for mobile - scrolls to form */}
            <a
              href="#enter"
              className="lg:hidden inline-flex items-center gap-2 px-6 py-3.5 bg-brand-500 hover:bg-brand-400 text-white font-display text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
            >
              Enter the Giveaway
            </a>

            {/* Desktop secondary CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#prizes"
                className="text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white/30"
              >
                See all 10 prizes ↓
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="#services"
                className="text-sm text-zinc-500 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-700 hover:decoration-white/30"
              >
                View services ↓
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:sticky lg:top-24">
            <EntryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
