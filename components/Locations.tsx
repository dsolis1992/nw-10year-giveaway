import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Fourth Plain',
    address: '6920 NE Fourth Plain Blvd, Vancouver, WA 98661',
    hours: 'Tue – Sat: 9 AM – 6 PM',
    closed: 'Sun – Mon: Closed',
    phone: '360-750-6501',
    phoneHref: 'tel:+13607506501',
  },
  {
    name: 'Mill Plain',
    address: '14009 SE Mill Plain Blvd Suite 100, Vancouver, WA 98684',
    hours: 'Mon – Fri: 9 AM – 5 PM',
    closed: 'Sat – Sun: Closed',
    phone: '360-810-5138',
    phoneHref: 'tel:+13608105138',
  },
];

export default function Locations() {
  return (
    <section id="locations" className="relative py-16 sm:py-20 bg-surface-900 border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-brand-400 uppercase tracking-[0.2em] mb-3">
            Come See Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight gradient-text">
            Two Locations in Vancouver
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="p-6 rounded-2xl bg-surface-850 border border-white/[0.04] hover:border-brand-500/15 transition-colors"
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white mb-4">
                {loc.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-zinc-400">{loc.address}</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-zinc-400">
                    <p>{loc.hours}</p>
                    <p className="text-zinc-600">{loc.closed}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={loc.phoneHref}
                    className="text-sm text-brand-400 hover:text-brand-300 font-semibold transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
