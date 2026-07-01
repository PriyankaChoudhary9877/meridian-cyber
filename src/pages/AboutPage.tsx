import Reveal from '../components/ui/Reveal';
import About from '../components/sections/About';
import Statistics from '../components/sections/Statistics';
import Testimonials from '../components/sections/Testimonials';
import CTABanner from '../components/sections/CTABanner';

const leadership = [
  { name: 'Marcus Vela', role: 'Co-Founder & CEO', bio: 'Former incident response lead at a national payments processor.' },
  { name: 'Aisha Brennan', role: 'Co-Founder & CTO', bio: 'Built detection tooling for two Fortune 500 security operations centers.' },
  { name: 'Tomasz Krol', role: 'VP, Compliance', bio: 'Spent a decade on the auditor side before joining to build our GRC practice.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-6">
              About Meridian
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-[var(--font-display)] text-[40px] sm:text-[54px] font-medium tracking-[-0.02em] leading-[1.08] text-[var(--color-ink)] max-w-3xl">
              We exist because incident reports used to arrive too late to matter.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-[17px] leading-relaxed text-[var(--color-slate)] max-w-2xl">
              Meridian Cyber is an independent security firm built around one idea: the value of a
              security partner is measured in the minutes before a decision, not the page count of
              a quarterly report.
            </p>
          </Reveal>
        </div>
      </section>

      <About />
      <Statistics />

      <section className="py-24 lg:py-32 bg-[var(--color-subtle)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
                Leadership
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
                Run by practitioners, not career executives.
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-[var(--color-border)] h-full">
                  <h3 className="font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-ink)]">{p.name}</h3>
                  <p className="text-[13.5px] text-[var(--color-accent)] mt-1 mb-4">{p.role}</p>
                  <p className="text-[14px] leading-relaxed text-[var(--color-slate)]">{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
