import Reveal from '../ui/Reveal';
import Counter from '../ui/Counter';
import { stats } from '../../data/content';

export default function Statistics() {
  return (
    <section className="py-20 lg:py-24 border-y border-[var(--color-border)] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-[var(--font-display)] text-[40px] sm:text-[48px] font-semibold text-[var(--color-ink)] tracking-[-0.02em]">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[14px] text-[var(--color-slate)] mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
