const steps = [
  {
    num: '01',
    title: 'Enter Your Info',
    desc: 'Fill out the quick form above. Takes under a minute.',
  },
  {
    num: '02',
    title: 'Get Confirmation',
    desc: 'You\u2019ll know right away that your entry is locked in.',
  },
  {
    num: '03',
    title: 'Winners Announced',
    desc: 'We\u2019ll contact all 10 winners directly after the campaign closes.',
  },
  {
    num: '04',
    title: 'Everyone Gets an Offer',
    desc: 'All entrants receive a special anniversary tint offer — win or not.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-20 bg-surface-900 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            Simple Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text">
            How It Works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.num} className="relative p-5 rounded-xl bg-surface-850 border border-white/[0.04]">
              <span className="font-mono text-3xl font-bold text-white/[0.06] absolute top-3 right-4 select-none">
                {step.num}
              </span>
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center mb-3">
                <span className="font-mono text-xs font-bold text-brand-400">{step.num}</span>
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
