import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1400&auto=format&fit=crop"
              alt="Security analysts reviewing monitoring dashboards in a operations center"
              className="rounded-2xl shadow-[0_20px_60px_-15px_rgba(16,24,40,0.18)] w-full h-[460px] object-cover"
            />
          </Reveal>
          <div className="lg:col-span-7 lg:order-1">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
                Who we are
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
                Built by people who have defended the systems that can't go down.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-slate)] max-w-xl">
                Meridian Cyber started in 2016 when three incident responders, tired of arriving
                after the damage was done, decided to build the firm they wished they could have
                called. A decade later, we run continuous monitoring and advisory programs for
                over four hundred enterprises, without losing the instinct to pick up the phone
                ourselves.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  ['90+', 'security engineers'],
                  ['11', 'years in operation'],
                  ['0', 'breaches under active MDR'],
                ].map(([v, l]) => (
                  <div key={l} className="border-l-2 border-[var(--color-border)] pl-4">
                    <p className="font-[var(--font-display)] text-[26px] font-semibold text-[var(--color-ink)]">{v}</p>
                    <p className="text-[13px] text-[var(--color-slate)] mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
