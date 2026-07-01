import Reveal from '../ui/Reveal';
import { blogPosts } from '../../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function BlogPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <Reveal>
              <p className="font-[var(--font-mono)] text-[13px] tracking-[0.08em] text-[var(--color-accent)] uppercase mb-5">
                From the desk
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-[var(--font-display)] text-[34px] sm:text-[42px] font-medium tracking-[-0.015em] leading-[1.12] text-[var(--color-ink)]">
                Notes on what we're seeing in the field.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#" className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
              Visit the blog <ArrowUpRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08} className="bg-white p-8 h-full">
              <a href="#" className="group block h-full flex flex-col">
                <p className="text-[12.5px] text-[var(--color-slate)] mb-4">{post.date} · {post.readTime}</p>
                <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-ink)] leading-snug mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--color-slate)] mb-6">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--color-ink)] mt-auto group-hover:text-[var(--color-accent)] transition-colors">
                  Read article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
