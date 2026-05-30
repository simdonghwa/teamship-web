'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NAV = [
  {
    label: '기업 팀십',
    href: '/corporate',
    sub: [
      { label: 'AX Teamship™ 소개', href: '/corporate' },
      { label: '워크숍 프로그램', href: '/corporate#workshop' },
      { label: 'AX Bootcamp', href: '/corporate#bootcamp' },
      { label: '강의 의뢰', href: '/contact?type=corporate' },
    ],
  },
  {
    label: '가족 팀십',
    href: '/family',
    badge: 'NEW',
    sub: [
      { label: '가족 팀십이란?', href: '/family' },
      { label: '부모 워크숍', href: '/family#workshop' },
      { label: '강의 신청', href: '/contact?type=family' },
      { label: '자기결정력 진단', href: '/diagnosis' },
    ],
  },
  {
    label: '자기결정력 진단',
    href: '/diagnosis',
    badge: 'NEW',
    sub: [
      { label: '부모용 진단 (18문항)', href: '/diagnosis/parent' },
      { label: '청소년용 진단 (16문항)', href: '/diagnosis/teen' },
    ],
  },
  { label: '강사 소개', href: '/about' },
  { label: '문의하기', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-200',
        scrolled ? 'shadow-sm bg-[var(--cream)]' : 'bg-[var(--cream)]',
        'border-b border-[var(--rule)]'
      )}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span
            className="heading-serif text-[18px] tracking-tight"
            style={{ color: 'var(--navy)' }}
          >
            Teamship™
          </span>
        </Link>

        {/* PC 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.sub && setActiveDropdown(item.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-md transition-colors',
                  pathname.startsWith(item.href) && item.href !== '/'
                    ? 'text-[var(--rust)] bg-[var(--rust-l)]'
                    : 'text-[var(--navy)] hover:text-[var(--rust)] hover:bg-[var(--rust-l)]'
                )}
              >
                {item.label}
                {item.badge && (
                  <span className="text-[9px] font-bold bg-[var(--rust)] text-white px-1.5 py-0.5 rounded-sm leading-none">
                    {item.badge}
                  </span>
                )}
                {item.sub && (
                  <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* 드롭다운 */}
              {item.sub && activeDropdown === item.href && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[var(--rule)] rounded-lg shadow-lg py-1 z-50">
                  {item.sub.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-[12.5px] text-[var(--text)] hover:text-[var(--rust)] hover:bg-[var(--rust-l)] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 진단하기 CTA + 햄버거 */}
        <div className="flex items-center gap-3">
          <Link
            href="/diagnosis"
            className="hidden sm:inline-flex items-center px-4 py-2 text-[12.5px] font-bold rounded-full transition-colors"
            style={{ background: 'var(--rust)', color: '#fff' }}
          >
            지금 진단하기 →
          </Link>

          {/* 햄버거 (모바일) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-[var(--navy)]"
            aria-label="메뉴 열기"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="lg:hidden border-t border-[var(--rule)] bg-[var(--cream)]">
          <div className="section-container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-3 py-2.5 text-[13px] font-medium rounded-md',
                    pathname.startsWith(item.href) && item.href !== '/'
                      ? 'text-[var(--rust)] bg-[var(--rust-l)]'
                      : 'text-[var(--navy)]'
                  )}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[9px] font-bold bg-[var(--rust)] text-white px-1.5 py-0.5 rounded-sm leading-none">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {item.sub && (
                  <div className="pl-4 flex flex-col gap-0.5">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="px-3 py-1.5 text-[12px] text-[var(--gray)] hover:text-[var(--rust)]"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/diagnosis"
              className="mt-2 flex items-center justify-center px-4 py-2.5 text-[13px] font-bold rounded-full"
              style={{ background: 'var(--rust)', color: '#fff' }}
            >
              지금 진단하기 →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
