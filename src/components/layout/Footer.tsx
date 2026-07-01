import { Link } from 'react-router-dom';
import { ShieldHalf, Link2, AtSign } from 'lucide-react';

const columns = [
  {
    title: 'Services',
    links: ['Managed Detection & Response', 'Penetration Testing', 'Governance & Compliance', 'Incident Response', 'Cloud Security'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Newsroom', 'Trust Center'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Case Studies', 'Security Glossary', 'Status Page'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-5">
              <ShieldHalf className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.75} />
              <span className="font-[var(--font-display)] text-[17px] font-semibold">Meridian Cyber</span>
            </div>
            <p className="text-[15px] leading-relaxed text-white/55 max-w-sm">
              Independent security advisory and managed defense for enterprises that can't afford to guess.
              Founded 2016. Headquartered in Boston, with analysts across six continents.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors focus-ring rounded-sm"><Link2 className="w-4.5 h-4.5" /></a>
              <a href="#" aria-label="Email" className="text-white/50 hover:text-white transition-colors focus-ring rounded-sm"><AtSign className="w-4.5 h-4.5" /></a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-[var(--font-display)] text-[13px] uppercase tracking-[0.08em] text-white/40 mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[14.5px] text-white/70 hover:text-white transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-white/40">© 2026 Meridian Cyber Advisory LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Privacy</Link>
            <Link to="/" className="text-[13px] text-white/40 hover:text-white/70 transition-colors">Terms</Link>
            <span className="text-[12px] font-[var(--font-mono)] text-white/30 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] inline-block animate-pulse" />
              all systems monitored
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
