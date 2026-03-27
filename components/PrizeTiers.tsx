import { Trophy } from 'lucide-react';

export default function PrizeTiers() {
  return (
    <section id="prizes" className="relative py-16 sm:py-20 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            10 Cars for 10 Years
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text mb-3">
            The Prize: 10 Cars
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
            One prize. Ten winners. Every winner gets their entire car tinted free.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-2xl bg-surface-900 border border-brand-500/20 hover:border-brand-500/40 transition-all duration-300 text-center">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 mx-auto">
              <Trophy className="w-7 h-7 text-brand-400" />
            </div>

            {/* Badge */}
            <span className="inline-block px-3 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider bg-brand-500/15 text-brand-300 mb-4">
              10 Winners
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white mb-2">
              Free Full-Vehicle Window Tint
            </h3>
            <p className="text-base text-zinc-400 leading-relaxed max-w-md mx-auto">
              Each winner gets their entire car tinted on us. 10 years in business, 10 cars tinted free. No tiers, no catch.
            </p>
          </div>
        </div>

        {/* Single-line CTA */}
        <div className="text-center mt-10">
          <a
            href="#enter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-display text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
          >
            Enter to Win Free Tint
          </a>
        </div>
      </div>
    </section>
  );
}
import { Trophy, Sparkles, Gift } from 'lucide-react';

const tiers = [
  {
    icon: Trophy,
    tier: 'Grand Prize',
    winners: '1 Winner',
    prize: 'Full Vehicle Tint Package',
    description:
      'Complete window tint for your entire vehicle — installed by our team at no cost.',
    accent: 'gold',
  },
  {
    icon: Sparkles,
    tier: 'Runner-Up',
    winners: '3 Winners',
    prize: 'Front Two + Windshield Brow',
    description:
      'Front driver and passenger windows plus a windshield visor strip — on us.',
    accent: 'blue',
  },
  {
    icon: Gift,
    tier: 'Anniversary Winners',
    winners: '6 Winners',
    prize: 'Tint Credit Toward a New Install',
    description:
      'A credit applied toward your next window tint install at either location.',
    accent: 'zinc',
  },
];

const accentMap = {
  gold: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20 hover:border-yellow-500/40',
    icon: 'text-yellow-400',
    badge: 'bg-yellow-500/15 text-yellow-300',
  },
  blue: {
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20 hover:border-brand-500/40',
    icon: 'text-brand-400',
    badge: 'bg-brand-500/15 text-brand-300',
  },
  zinc: {
    bg: 'bg-zinc-500/10',
    border: 'border-zinc-500/20 hover:border-zinc-500/30',
    icon: 'text-zinc-400',
    badge: 'bg-zinc-500/15 text-zinc-300',
  },
};

export default function PrizeTiers() {
  return (
    <section id="prizes" className="relative py-16 sm:py-20 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            10 Cars for 10 Years
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text mb-3">
            What You Could Win
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
            Ten prizes across three tiers. One entry puts you in the draw for all of them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {tiers.map((tier) => {
            const colors = accentMap[tier.accent as keyof typeof accentMap];
            return (
              <div
                key={tier.tier}
                className={`relative p-6 sm:p-7 rounded-2xl bg-surface-900 border ${colors.border} transition-all duration-300 flex flex-col`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}
                >
                  <tier.icon className={`w-5 h-5 ${colors.icon}`} />
                </div>

                {/* Badge */}
                <span
                  className={`inline-block self-start px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider ${colors.badge} mb-3`}
                >
                  {tier.winners}
                </span>

                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-1">
                  {tier.tier}
                </h3>
                <p className="text-sm font-semibold text-zinc-300 mb-2">{tier.prize}</p>
                <p className="text-sm text-zinc-500 leading-relaxed mt-auto">
                  {tier.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Single-line CTA */}
        <div className="text-center mt-10">
          <a
            href="#enter"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-white font-display text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/25"
          >
            Enter for a Chance to Win
          </a>
        </div>
      </div>
    </section>
  );
}
