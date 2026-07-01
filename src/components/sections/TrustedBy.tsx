import Reveal from '../ui/Reveal';
import { trustedCompanies } from '../../data/content';

export default function TrustedBy() {
  return (
    <section className="py-14 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <p className="text-[13px] text-center text-[var(--color-slate)] mb-8 tracking-wide">
            Trusted by security teams at
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {trustedCompanies.map((name, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <span className="font-[var(--font-display)] text-[17px] text-[var(--color-ink)]/40 font-medium tracking-tight">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
