import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { tickerEvents } from '../../data/content';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-6"
            >
              Enterprise security advisory — since 2016
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-[var(--font-display)] text-[var(--color-ink)] font-medium tracking-[-0.02em] leading-[1.04] text-[44px] sm:text-[58px] lg:text-[68px]"
            >
              Security that stays awake
              <br className="hidden sm:block" /> after your team logs off.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 text-[18px] leading-relaxed text-[var(--color-slate)] max-w-xl"
            >
              We monitor, test, and defend the infrastructure of mid-to-large enterprises around
              the clock — and pick up the phone when it actually matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-ink)] text-white text-[15px] font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300"
              >
                Book a consultation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[var(--color-ink)] text-[15px] font-medium rounded-full border border-[var(--color-border)] hover:border-[var(--color-ink)] transition-colors duration-300"
              >
                View our services
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden border border-[var(--color-border)]"
            >
              {[
                ['18 min', 'avg. time to contain'],
                ['24/7', 'live SOC coverage'],
                ['412+', 'enterprises defended'],
                ['6', 'continents, one team'],
              ].map(([v, l]) => (
                <div key={l} className="bg-white p-5">
                  <p className="font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-ink)]">{v}</p>
                  <p className="text-[12.5px] text-[var(--color-slate)] mt-1 leading-snug">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Signature element: a continuous, low-contrast signal log — the texture of real monitoring, not a fake dashboard */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-20 border-y border-[var(--color-border)] bg-[var(--color-blue-tint)] py-3.5 overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex w-max ticker-track">
          {[...tickerEvents, ...tickerEvents].map((line, i) => (
            <span
              key={i}
              className="font-[var(--font-mono)] text-[12.5px] text-[var(--color-slate)]/70 whitespace-nowrap px-8 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--color-success)] inline-block" />
              {line}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
