import Reveal from '../ui/Reveal';
import { services } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--color-subtle)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
              Six disciplines. One team that already knows your environment.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={(i % 3) * 0.08}>
              <div className="group bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,24,40,0.18)] hover:-translate-y-1">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 font-[var(--font-mono)] text-[11px] tracking-wider text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {s.code}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-ink)] mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-[var(--color-slate)] mb-5">
                    {s.description}
                  </p>
                  <ul className="space-y-2 mt-auto mb-5">
                    {s.points.map((p) => (
                      <li key={p} className="text-[13px] text-[var(--color-slate)] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
