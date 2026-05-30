import Link from 'next/link';

const LINKS = {
  '기업 팀십': [
    { label: 'AX Teamship™ 소개', href: '/corporate' },
    { label: '워크숍 프로그램', href: '/corporate#workshop' },
    { label: 'AX Bootcamp', href: '/corporate#bootcamp' },
    { label: '강의 의뢰', href: '/contact?type=corporate' },
  ],
  '가족 팀십': [
    { label: '가족 팀십이란?', href: '/family' },
    { label: '부모 워크숍', href: '/family#workshop' },
    { label: '자기결정력 진단', href: '/diagnosis' },
    { label: '강의 신청', href: '/contact?type=family' },
  ],
  '강사 · 문의': [
    { label: '강사 소개', href: '/about' },
    { label: '문의하기', href: '/contact' },
    { label: '교육 팀십 (준비중)', href: '/education' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--rule)] bg-[var(--cream)]">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="heading-serif text-[17px] mb-3" style={{ color: 'var(--navy)' }}>
              Teamship™
            </p>
            <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--gray)' }}>
              AI 시대, 팀십은 조직을 넘어<br />가족에서 시작된다.
            </p>
            <p className="mt-4 text-[11px]" style={{ color: 'var(--lgray)' }}>
              teamship.co.kr
            </p>
          </div>

          {/* Links — 모바일 2열, 데스크톱 각 1열 */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(LINKS).map(([title, items]) => (
              <div key={title} className="last:col-span-2 last:md:col-span-1">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--rust)' }}>
                  {title}
                </p>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[12.5px] transition-colors hover:text-[var(--rust)]"
                        style={{ color: 'var(--gray)' }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--rule)] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px]" style={{ color: 'var(--lgray)' }}>
            © 2026 AX Teamship™. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]" style={{ color: 'var(--lgray)' }}>
            <Link href="/privacy" className="hover:text-[var(--gray)] transition-colors">개인정보처리방침</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[var(--gray)] transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
