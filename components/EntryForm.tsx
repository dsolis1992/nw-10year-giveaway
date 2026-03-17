'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  pastCustomer: boolean;
  smsConsent: boolean;
  bonusEntry: boolean;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  pastCustomer: false,
  smsConsent: false,
  bonusEntry: false,
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function EntryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10)
      errs.phone = 'Valid phone required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Valid email required';
    if (!form.vehicleYear.trim()) errs.vehicleYear = 'Required';
    if (!form.vehicleMake.trim()) errs.vehicleMake = 'Required';
    if (!form.vehicleModel.trim()) errs.vehicleModel = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // -----------------------------------------------------------
    // SUBMIT HOOK: Replace this block with your real endpoint
    // Options: Airtable, webhook, Zapier, custom API route, etc.
    // Payload shape is ready — just swap the URL and headers.
    // -----------------------------------------------------------
    const payload = {
      ...form,
      source: typeof window !== 'undefined' ? window.location.search : '',
      enteredAt: new Date().toISOString(),
    };

    try {
      // Placeholder: simulate network request
      // Replace with: await fetch('/api/enter', { method: 'POST', body: JSON.stringify(payload) });
      console.log('[GIVEAWAY ENTRY]', payload);
      await new Promise((r) => setTimeout(r, 1200));

      // --- ANALYTICS HOOK ---
      // window.gtag?.('event', 'giveaway_entry', { method: 'form' });
      // window.fbq?.('track', 'Lead');

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  // ── SUCCESS STATE ──
  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/30 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-display text-2xl font-bold text-gray-900 uppercase tracking-wide mb-2">
          You&apos;re In
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto mb-4">
          Your entry is confirmed. We&apos;ll announce winners after the giveaway
          closes and send all entrants a special anniversary tint offer.
        </p>
        <div className="bg-gray-50 rounded-xl p-4 text-left text-sm text-gray-500 leading-relaxed">
          <p className="font-semibold text-gray-700 mb-1">What happens next:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Winners will be contacted directly</li>
            <li>All entrants receive an exclusive anniversary offer</li>
            <li>Keep an eye on your texts and email</li>
          </ul>
        </div>
      </div>
    );
  }

  const inputBase =
    'w-full px-3.5 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm placeholder:text-gray-400 transition-all duration-200 focus:bg-white focus:border-brand-400';
  const labelBase = 'block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5';
  const errorText = 'text-red-500 text-xs mt-1';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-5 sm:p-7 shadow-2xl shadow-black/30"
      id="enter"
    >
      <div className="mb-5">
        <p className="font-display text-lg font-bold text-gray-900 uppercase tracking-wide">
          Enter the Giveaway
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Takes 30 seconds. All fields required.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstName" className={labelBase}>First Name</label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => updateField('firstName', e.target.value)}
              className={`${inputBase} ${errors.firstName ? 'border-red-400' : ''}`}
              placeholder="Daniel"
            />
            {errors.firstName && <p className={errorText}>{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className={labelBase}>Last Name</label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => updateField('lastName', e.target.value)}
              className={`${inputBase} ${errors.lastName ? 'border-red-400' : ''}`}
              placeholder="Smith"
            />
            {errors.lastName && <p className={errorText}>{errors.lastName}</p>}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>Mobile Number</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={`${inputBase} ${errors.phone ? 'border-red-400' : ''}`}
            placeholder="(360) 555-0123"
          />
          {errors.phone && <p className={errorText}>{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={`${inputBase} ${errors.email ? 'border-red-400' : ''}`}
            placeholder="you@email.com"
          />
          {errors.email && <p className={errorText}>{errors.email}</p>}
        </div>

        {/* Vehicle row */}
        <div>
          <p className={`${labelBase} mb-2`}>Your Vehicle</p>
          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <input
                id="vehicleYear"
                type="text"
                inputMode="numeric"
                maxLength={4}
                value={form.vehicleYear}
                onChange={(e) => updateField('vehicleYear', e.target.value)}
                className={`${inputBase} ${errors.vehicleYear ? 'border-red-400' : ''}`}
                placeholder="Year"
                aria-label="Vehicle year"
              />
              {errors.vehicleYear && <p className={errorText}>{errors.vehicleYear}</p>}
            </div>
            <div>
              <input
                id="vehicleMake"
                type="text"
                value={form.vehicleMake}
                onChange={(e) => updateField('vehicleMake', e.target.value)}
                className={`${inputBase} ${errors.vehicleMake ? 'border-red-400' : ''}`}
                placeholder="Make"
                aria-label="Vehicle make"
              />
              {errors.vehicleMake && <p className={errorText}>{errors.vehicleMake}</p>}
            </div>
            <div>
              <input
                id="vehicleModel"
                type="text"
                value={form.vehicleModel}
                onChange={(e) => updateField('vehicleModel', e.target.value)}
                className={`${inputBase} ${errors.vehicleModel ? 'border-red-400' : ''}`}
                placeholder="Model"
                aria-label="Vehicle model"
              />
              {errors.vehicleModel && <p className={errorText}>{errors.vehicleModel}</p>}
            </div>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2.5 pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={form.pastCustomer}
              onChange={(e) => updateField('pastCustomer', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-400 accent-brand-500"
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              I&apos;m a past NW Window Tinting customer
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={form.smsConsent}
              onChange={(e) => updateField('smsConsent', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-400 accent-brand-500"
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              Text me giveaway updates and anniversary offers
            </span>
          </label>

          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              checked={form.bonusEntry}
              onChange={(e) => updateField('bonusEntry', e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-brand-500 focus:ring-brand-400 accent-brand-500"
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              I shared the giveaway or tagged someone for a bonus entry
            </span>
          </label>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 w-full py-3.5 bg-brand-500 hover:bg-brand-400 disabled:bg-brand-600 text-white font-display text-base font-bold uppercase tracking-wider rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-brand-500/30 active:scale-[0.99] flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Entering…
          </>
        ) : (
          'Enter the Giveaway'
        )}
      </button>

      {/* Error */}
      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      {/* Trust / legal */}
      <p className="mt-3.5 text-[11px] text-gray-400 leading-relaxed text-center">
        Your info stays with NW Window Tinting and is used only for this giveaway
        and related offers. No spam. Msg &amp; data rates may apply. You can opt
        out anytime.
      </p>
    </form>
  );
}
