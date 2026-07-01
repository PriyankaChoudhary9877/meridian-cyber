import Reveal from '../ui/Reveal';

const reasons = [
  {
    title: 'Analysts who know your environment by name',
    body: 'No rotating contractors. The team that onboards you is the team that answers when something happens, which means less time spent explaining your architecture during the moment it matters least.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Findings ranked by business impact, not severity score',
    body: 'A critical CVE on an isolated test server is not the same as a medium finding on your payment gateway. We tell you which five things to fix this week and why, in plain terms a board can follow.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Built for audits, not just attacks',
    body: 'Every control we monitor maps to the frameworks your customers ask about. When renewal season arrives, your evidence is already there, not assembled the week before the deadline.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
              Why teams choose us
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
              The work that doesn't make headlines, done well.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-24">
          {reasons.map((r, i) => (
            <div key={r.title} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <Reveal className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={r.image}
                  alt=""
                  className="rounded-2xl shadow-[0_20px_60px_-15px_rgba(16,24,40,0.16)] w-full h-[360px] object-cover"
                />
              </Reveal>
              <Reveal delay={0.1} className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-[var(--font-display)] text-[15px] text-[var(--color-border)] font-semibold block mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-[var(--font-display)] text-[26px] sm:text-[30px] font-medium tracking-[-0.01em] text-[var(--color-ink)] leading-snug mb-4">
                  {r.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-[var(--color-slate)] max-w-lg">{r.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
