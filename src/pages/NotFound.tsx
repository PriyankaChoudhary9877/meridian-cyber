import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../components/ui/Reveal';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <Reveal>
          <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-6">
            Error 404
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-[var(--font-display)] text-[48px] sm:text-[68px] font-medium tracking-[-0.02em] leading-[1.04] text-[var(--color-ink)] max-w-2xl">
            This page isn't being monitored.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-slate)] max-w-md">
            The page you're looking for doesn't exist, or has moved. Everything else on the site
            is exactly where it should be.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-9 px-6 py-3.5 bg-[var(--color-ink)] text-white text-[15px] font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300"
          >
            Return home <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
