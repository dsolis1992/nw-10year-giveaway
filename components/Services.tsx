const services = [
  {
    category: 'Window Tint',
    items: [
      { name: 'Standard Window Tint', desc: 'Quality dyed film for privacy and style' },
      { name: 'Black Ceramic', desc: 'Ceramic performance at an accessible price' },
      { name: 'i3 Ceramic', desc: 'Advanced heat rejection with optical clarity' },
      { name: 'i3+ Ceramic', desc: 'Top-tier infrared rejection and UV protection' },
    ],
  },
  {
    category: 'Paint Protection',
    items: [
      { name: 'Partial PPF Packages', desc: 'Front-end coverage for high-impact zones' },
      { name: 'Top Tier PPF Packages', desc: 'Maximum coverage for full-body protection' },
    ],
  },
  {
    category: 'Beyond Automotive',
    items: [
      { name: 'Residential Tinting', desc: 'Privacy, UV protection, and heat control for your home' },
      { name: 'Commercial Tinting', desc: 'Energy savings and comfort for offices and storefronts' },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            Full Service Stack
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text mb-3">
            What We Install
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
            From standard tint to full paint protection — one shop, every level.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {services.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3 pl-1">
                {group.category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.items.map((svc) => (
                  <div
                    key={svc.name}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface-900 border border-white/[0.04] hover:border-brand-500/15 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">{svc.name}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-zinc-500 mb-3">
            Financing available on all services.
          </p>
          <a
            href="#enter"
            className="text-sm text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-4 decoration-brand-500/30 transition-colors"
          >
            Enter the giveaway and see what you could win →
          </a>
        </div>
      </div>
    </section>
  );
}
