import Reveal from '../ui/Reveal';
import { process } from '../../data/content';

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
              How an engagement runs
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12]">
              Five stages, the same order every time.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="bg-[var(--color-navy-soft)] p-7 lg:min-h-[280px] flex flex-col">
              <span className="font-[var(--font-display)] text-[15px] text-[var(--color-accent)] font-semibold mb-8">
                {step.n}
              </span>
              <h3 className="font-[var(--font-display)] text-[19px] font-semibold mb-3">{step.title}</h3>
              <p className="text-[14px] leading-relaxed text-white/55">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
