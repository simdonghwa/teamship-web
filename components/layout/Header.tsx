'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV, PROGRAM_SUBNAV } from '@/lib/content';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setProgramsOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(242,237,227,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--rule-lt)' : '1px solid transparent',
      }}
    >
      <div className="container-wide flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            className="display text-[19px] tracking-tight"
            style={{ color: scrolled ? 'var(--ink)' : 'var(--bone)' }}
          >
            AX Teamship™
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.hasSub && setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 label transition-colors rounded-md"
                style={{
                  color: isActive(item.href)
                    ? 'var(--rust)'
                    : scrolled ? 'var(--ink)' : 'rgba(242,237,227,0.75)',
                }}
              >
                {item.label}
              </Link>

              {/* Programs dropdown */}
              {item.hasSub && programsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 py-2 rounded-xl shadow-xl border"
                  style={{
                    background: 'var(--ink-2)',
                    borderColor: 'var(--rule-dk)',
                    minWidth: '220px',
                  }}
                >
                  {PROGRAM_SUBNAV.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 transition-colors"
                      style={{ color: 'var(--bone)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--ink-3)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <span className="block text-[13px] font-semibold mb-0.5">{s.label}</span>
                      <span className="label" style={{ color: 'var(--muted-on-dark)', fontSize: '10px' }}>{s.desc}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex btn-primary text-[13px] py-2.5 px-5"
          >
            상담 신청 →
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md"
            aria-label="메뉴"
            style={{ color: scrolled ? 'var(--ink)' : 'var(--bone)' }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: 'var(--ink)', borderColor: 'var(--rule-dk)' }}
        >
          <div className="container-wide py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-[14px] font-medium rounded-md transition-colors"
                  style={{ color: isActive(item.href) ? 'var(--gold)' : 'var(--bone)' }}
                >
                  {item.label}
                </Link>
                {item.hasSub && (
                  <div className="pl-4 flex flex-col gap-0.5 mb-2">
                    {PROGRAM_SUBNAV.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="px-3 py-2 label"
                        style={{ color: 'var(--muted-on-dark)', fontSize: '11px' }}
                      >
                        {s.label} — {s.desc}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 justify-center"
            >
              상담 신청 →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
