import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';

export default function CTABanner() {
  return (
    <section className="py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-3xl bg-[var(--color-ink)] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
            <div className="relative">
              <h2 className="font-[var(--font-display)] text-[32px] sm:text-[44px] font-medium tracking-[-0.015em] leading-[1.1] text-white max-w-2xl mx-auto">
                Talk to someone who already knows what to look for.
              </h2>
              <p className="mt-5 text-[16px] text-white/60 max-w-md mx-auto">
                A 30-minute call with a senior analyst, no sales script. We'll tell you honestly
                whether we're the right fit.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-9 px-7 py-4 bg-white text-[var(--color-ink)] text-[15px] font-medium rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
              >
                Book a consultation <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
