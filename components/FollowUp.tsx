import { MessageSquare, Tag } from 'lucide-react';

export default function FollowUp() {
  return (
    <section className="relative py-16 sm:py-20 bg-surface-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            After You Enter
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text mb-3">
            Win or Not, You&apos;re Covered
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
            Every entrant gets something. Here&apos;s what to expect after you submit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Confirmation preview */}
          <div className="p-6 rounded-2xl bg-surface-900 border border-white/[0.04]">
            <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-4">
              <MessageSquare className="w-5 h-5 text-brand-400" />
            </div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-2">
              Instant Confirmation
            </h3>
            <div className="bg-surface-850 rounded-xl p-4 text-sm text-zinc-400 leading-relaxed border border-white/[0.03]">
              <p className="italic">
                &ldquo;You&apos;re entered in our 10-year anniversary giveaway.
                We&apos;ll announce winners after the campaign closes. All
                entrants will also receive a special anniversary tint offer.&rdquo;
              </p>
            </div>
          </div>

          {/* Non-winner offer preview */}
          <div className="p-6 rounded-2xl bg-surface-900 border border-white/[0.04]">
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4">
              <Tag className="w-5 h-5 text-gold-400" />
            </div>
            <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-2">
              Anniversary Offer
            </h3>
            <div className="bg-surface-850 rounded-xl p-4 text-sm text-zinc-400 leading-relaxed border border-white/[0.03]">
              <p className="italic">
                &ldquo;Our anniversary giveaway is over — but for the next 10
                days only, get a special discount on any full tint package. Book
                here to lock it in.&rdquo;
              </p>
            </div>
            <p className="text-xs text-zinc-600 mt-3">
              Offer details and timing determined by NW Window Tinting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
