import { Gauge, Droplets, Sun, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Gauge,
    title: 'Precision Installs',
    desc: 'Every install is pattern-cut and finished to exacting standards. No shortcuts, no bubbles, no callbacks.',
  },
  {
    icon: Droplets,
    title: 'Premium Ceramic Film',
    desc: 'We carry Black Ceramic, i3, and i3+ films for superior heat rejection and clarity — not off-brand imports.',
  },
  {
    icon: Sun,
    title: 'Real Heat Rejection',
    desc: 'Our ceramic options block significant infrared heat, keeping your cabin cooler without going darker than you want.',
  },
  {
    icon: ShieldCheck,
    title: 'Paint Protection Film',
    desc: 'From partial front-end kits to top-tier full-body coverage, we protect paint from rock chips and road debris.',
  },
];

export default function WhyNW() {
  return (
    <section className="relative py-16 sm:py-20 bg-surface-900 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
              Beyond the Giveaway
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text mb-5">
              Why Drivers Choose NW Window Tinting
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-xl">
              A giveaway brings you here — but the quality of our work is why
              thousands of Clark County drivers trust us with their vehicles.
              Whether you win or book on your own, you&apos;re getting the same
              premium experience.
            </p>
            <a
              href="#enter"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Enter the Anniversary Giveaway
            </a>
          </div>

          {/* Right: cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-surface-850 border border-white/[0.04]"
              >
                <item.icon className="w-5 h-5 text-brand-400 mb-3" />
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
