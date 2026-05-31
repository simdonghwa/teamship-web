import Link from 'next/link';
import { SITE, PROGRAM_SUBNAV } from '@/lib/content';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', borderTop: '1px solid var(--rule-dk)' }}>

      {/* CTA band */}
      <div style={{ borderBottom: '1px solid var(--rule-dk)' }}>
        <div className="container-wide py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label mb-4" style={{ color: 'var(--gold)' }}>지금 시작하세요</p>
            <h2 className="display text-4xl md:text-5xl" style={{ color: 'var(--bone)' }}>
              팀이 바뀌면<br />성과가 바뀐다
            </h2>
          </div>
          <Link href="/contact" className="btn-primary text-[15px] py-4 px-8 flex-shrink-0">
            무료 상담 신청 →
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="display text-[17px] mb-3" style={{ color: 'var(--bone)' }}>AX Teamship™</p>
            <p className="text-[13px] leading-relaxed mb-6" style={{ color: 'var(--muted-on-dark)' }}>
              AI 시대, 살아남는 팀의<br />조건을 만듭니다.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="label"
              style={{ color: 'var(--gold)', fontSize: '11px' }}
            >
              {SITE.email}
            </a>
          </div>

          {/* 프로그램 */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted-on-dark)' }}>프로그램</p>
            <ul className="flex flex-col gap-2.5">
              {PROGRAM_SUBNAV.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[13px] transition-colors hover:text-[var(--bone)]"
                    style={{ color: 'var(--muted-on-dark)' }}
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 탐색 */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted-on-dark)' }}>탐색</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: '방법론', href: '/method' },
                { label: '사례', href: '/cases' },
                { label: '회사 소개', href: '/about' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] transition-colors hover:text-[var(--bone)]"
                    style={{ color: 'var(--muted-on-dark)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <p className="label mb-4" style={{ color: 'var(--muted-on-dark)' }}>문의</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: '상담 신청', href: '/contact' },
                { label: '워크숍 문의', href: '/contact?type=workshop' },
                { label: '키노트 의뢰', href: '/contact?type=keynote' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] transition-colors hover:text-[var(--bone)]"
                    style={{ color: 'var(--muted-on-dark)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--rule-dk)' }}
        >
          <p className="label" style={{ color: 'var(--muted-on-dark)', fontSize: '11px' }}>
            © 2026 AX Teamship™. All rights reserved.
          </p>
          <div className="flex gap-5 label" style={{ fontSize: '11px', color: 'var(--muted-on-dark)' }}>
            <Link href="/privacy" className="hover:text-[var(--bone)] transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-[var(--bone)] transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
