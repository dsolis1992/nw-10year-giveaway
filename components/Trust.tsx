import { Award, Users, ShieldCheck, Wrench, MapPin } from 'lucide-react';

const trustPoints = [
  {
    icon: Award,
    title: 'Best of Clark County',
    desc: 'Voted the top tint shop by the local community — year after year.',
  },
  {
    icon: Users,
    title: 'Thousands of 5-Star Reviews',
    desc: 'Real customers, real installs, real results across Google and social media.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium Products Only',
    desc: 'We install high-performance ceramic and PPF from trusted manufacturers.',
  },
  {
    icon: Wrench,
    title: 'Professional Installs',
    desc: 'Experienced technicians, clean bays, and attention to detail on every vehicle.',
  },
  {
    icon: MapPin,
    title: 'Two Vancouver Locations',
    desc: 'Serving Clark County from Fourth Plain and Mill Plain — easy access either way.',
  },
];

export default function Trust() {
  return (
    <section className="relative py-16 sm:py-20 bg-surface-900 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            Why Vancouver Trusts Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text">
            Clark County&apos;s Most Trusted Tint Shop
          </h2>
        </div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {trustPoints.map((item) => (
            <div
              key={item.title}
              className="group p-5 sm:p-6 rounded-xl bg-surface-850 border border-white/[0.04] hover:border-brand-500/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Financing callout card */}
          <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-600/5 border border-brand-500/15">
            <p className="font-display text-base font-bold uppercase tracking-wide text-white mb-1.5">
              Financing Available
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Premium tint and protection fits your budget. Ask about monthly
              payment options on any service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
