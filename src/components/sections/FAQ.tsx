import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { faqs } from '../../data/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-[var(--color-subtle)]">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <Reveal>
            <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
              Common questions
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
              Before you reach out
            </h2>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-ring"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[15.5px] text-[var(--color-ink)]">{item.q}</span>
                    <Plus className={`w-4.5 h-4.5 text-[var(--color-slate)] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-[var(--color-slate)]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
