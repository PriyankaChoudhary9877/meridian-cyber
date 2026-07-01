import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

type Errors = Partial<Record<'name' | 'email' | 'company' | 'message', string>>;

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (): boolean => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!values.email.trim()) next.email = 'Enter your work email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'That email doesn\u2019t look right.';
    if (!values.company.trim()) next.company = 'Enter your company name.';
    if (!values.message.trim()) next.message = 'Tell us a little about what you need.';
    else if (values.message.trim().length < 12) next.message = 'A bit more detail helps us prepare for the call.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1100);
  };

  const field = (key: keyof typeof values) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [key]: e.target.value })),
  });

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="w-10 h-10 text-[var(--color-success)] mx-auto mb-5" strokeWidth={1.5} />
        <h3 className="font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-ink)] mb-2">
          Message received
        </h3>
        <p className="text-[15px] text-[var(--color-slate)] max-w-sm mx-auto">
          A senior analyst will reach out within one business day at {values.email}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-[var(--color-border)] rounded-2xl p-7 sm:p-9 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[13.5px] font-medium text-[var(--color-ink)] mb-2">
            Full name
          </label>
          <input
            id="name"
            {...field('name')}
            className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[14.5px] text-[var(--color-ink)] focus-ring focus:border-[var(--color-accent)] outline-none transition-colors"
            placeholder="Jordan Avery"
          />
          {errors.name && <p className="text-[12.5px] text-red-500 mt-1.5">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-[13.5px] font-medium text-[var(--color-ink)] mb-2">
            Work email
          </label>
          <input
            id="email"
            type="email"
            {...field('email')}
            className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[14.5px] text-[var(--color-ink)] focus-ring focus:border-[var(--color-accent)] outline-none transition-colors"
            placeholder="jordan@company.com"
          />
          {errors.email && <p className="text-[12.5px] text-red-500 mt-1.5">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-[13.5px] font-medium text-[var(--color-ink)] mb-2">
          Company
        </label>
        <input
          id="company"
          {...field('company')}
          className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[14.5px] text-[var(--color-ink)] focus-ring focus:border-[var(--color-accent)] outline-none transition-colors"
          placeholder="Acme Corporation"
        />
        {errors.company && <p className="text-[12.5px] text-red-500 mt-1.5">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-[13.5px] font-medium text-[var(--color-ink)] mb-2">
          What's going on?
        </label>
        <textarea
          id="message"
          rows={5}
          {...field('message')}
          className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-[14.5px] text-[var(--color-ink)] focus-ring focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
          placeholder="A short description of your environment and what prompted you to reach out."
        />
        {errors.message && <p className="text-[12.5px] text-red-500 mt-1.5">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-ink)] text-white text-[14.5px] font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300 disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
