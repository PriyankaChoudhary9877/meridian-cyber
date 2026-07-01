import Reveal from '../components/ui/Reveal';
import ContactForm from '../components/sections/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const details = [
  { icon: Mail, label: 'Email', value: 'hello@meridiancyber.com' },
  { icon: Phone, label: '24/7 incident line', value: '+1 (617) 555-0148' },
  { icon: MapPin, label: 'Headquarters', value: '210 Congress Street, Boston, MA' },
];

export default function ContactPage() {
  return (
    <section className="pt-40 pb-28 lg:pt-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-6">
                Get in touch
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-[var(--font-display)] text-[38px] sm:text-[46px] font-medium tracking-[-0.02em] leading-[1.1] text-[var(--color-ink)]">
                Tell us what's keeping you up at night.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-slate)] max-w-md">
                Fill out the form and a senior analyst will follow up within one business day. If
                you're in the middle of an active incident, use the line below instead.
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.15 + i * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-blue-tint)] flex items-center justify-center flex-shrink-0">
                      <d.icon className="w-4.5 h-4.5 text-[var(--color-accent)]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[12.5px] text-[var(--color-slate)]">{d.label}</p>
                      <p className="text-[15px] text-[var(--color-ink)] font-medium">{d.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
