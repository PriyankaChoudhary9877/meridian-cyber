import Reveal from '../ui/Reveal';
import { industries } from '../../data/content';

export default function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-[var(--color-blue-tint)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
                Industries
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
                Different regulators. Different stakes. One standard.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <Reveal delay={0.1}>
              <p className="text-[16px] leading-relaxed text-[var(--color-slate)] max-w-lg">
                We don't run a generic playbook across every client. Each sector carries its own
                threat model, audit calendar, and tolerance for downtime, and our engagements are
                built around that from the first conversation.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.07}>
              <div className="bg-white rounded-2xl p-7 h-full border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-colors duration-300">
                <h3 className="font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-ink)] mb-2.5">
                  {ind.name}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-slate)]">{ind.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
