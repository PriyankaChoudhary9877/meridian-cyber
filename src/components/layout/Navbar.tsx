import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldHalf } from 'lucide-react';
import { nav } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const handleNav = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_1px_0_rgba(16,24,40,0.04)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-18 flex items-center justify-between" style={{ height: '72px' }}>
        <Link to="/" className="flex items-center gap-2.5 focus-ring rounded-md">
          <ShieldHalf className="w-6 h-6 text-[var(--color-accent)]" strokeWidth={1.75} />
          <span className="font-[var(--font-display)] text-[17px] font-semibold tracking-tight text-[var(--color-ink)]">
            Meridian Cyber
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-[14.5px] text-[var(--color-slate)] hover:text-[var(--color-ink)] transition-colors focus-ring rounded-sm"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="text-[14.5px] text-[var(--color-slate)] hover:text-[var(--color-ink)] transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-4.5 py-2.5 bg-[var(--color-ink)] text-white text-[14.5px] font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors duration-300"
            style={{ paddingInline: '18px' }}
          >
            Book a consultation
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--color-ink)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)] px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="text-left text-[15px] text-[var(--color-ink)]"
            >
              {item.label}
            </button>
          ))}
          <Link to="/contact" className="text-[15px] text-[var(--color-ink)]">Sign in</Link>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center px-5 py-3 bg-[var(--color-ink)] text-white text-[15px] font-medium rounded-full"
          >
            Book a consultation
          </Link>
        </div>
      )}
    </header>
  );
}
