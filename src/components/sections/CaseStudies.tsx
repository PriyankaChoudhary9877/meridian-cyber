import Reveal from '../ui/Reveal';
import { caseStudies } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
                Success stories
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
                Three engagements, in the clients' own outcomes.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <a href="#" className="group block rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white h-full transition-all duration-300 hover:shadow-[0_20px_45px_-20px_rgba(16,24,40,0.18)] hover:-translate-y-1">
                <div className="h-52 overflow-hidden">
                  <img src={c.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[12.5px] font-[var(--font-mono)] uppercase tracking-wider text-[var(--color-accent)] mb-3">{c.tag}</p>
                  <h3 className="font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-ink)] leading-snug mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-slate)] leading-relaxed mb-4">{c.summary}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                    <span className="text-[13px] text-[var(--color-slate)]">{c.client}</span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
