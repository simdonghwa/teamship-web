import type { Metadata } from 'next';
import Link from 'next/link';
import programsData from '@/content/programs.json';
import elements from '@/content/family-teamship.json';
import CTAButton from '@/components/shared/CTAButton';

export const metadata: Metadata = {
  title: '기업 팀십',
  description: 'AX Teamship™ — AI 전환 시대 살아남는 팀의 조건. 기업 워크숍, AX Bootcamp, 리더십 강의.',
};

const ELEMENT_COLORS: Record<string, string> = {
  SAFETY: 'var(--teal)', TRUST: 'var(--rust)',
  ENERGY: 'var(--gold)', GROWTH: 'var(--sage)', MOMENTUM: 'var(--purple)',
};

const REFERENCES = ['Microsoft', 'LG', 'KT', 'Hyundai', 'Samsung', 'Kakao'];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--rust) 0%, transparent 70%)' }} />
        <div className="section-container relative">
          <span className="inline-flex text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(196,98,45,.25)', color: 'var(--rust)' }}>
            AX Teamship™ 기업 팀십
          </span>
          <h1 className="heading-serif text-4xl md:text-5xl max-w-2xl mb-6 leading-tight" style={{ color: '#fff' }}>
            AI 시대, 살아남는<br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>팀</em>의 조건
          </h1>
          <p className="text-[16px] max-w-xl mb-10 leading-relaxed" style={{ color: 'var(--lgray)' }}>
            살아남는 팀은 기술이 아니라 안전·신뢰·에너지·성장·추진력으로 작동합니다.<br />
            Microsoft 21년, 현장에서 검증한 그 언어를 그대로 씁니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/contact?type=corporate" variant="primary" size="lg">강의 의뢰하기 →</CTAButton>
            <CTAButton href="#workshop" size="lg"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10">
              프로그램 보기
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 5요소 */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--rust)' }}>
              AX Teamship™ 5 Elements
            </p>
            <h2 className="heading-serif text-3xl mb-4">팀십을 이루는 5가지 요소</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {elements.map((el) => {
              const color = ELEMENT_COLORS[el.key];
              return (
                <div key={el.key} className="rounded-xl p-5 bg-white border border-[var(--rule)] last:col-span-2 last:lg:col-span-1">
                  <span className="text-2xl block mb-3">{el.icon}</span>
                  <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color }}>{el.key}</p>
                  <p className="text-[13px] font-semibold leading-snug" style={{ color: 'var(--navy)' }}>{el.corporate}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 프로그램 */}
      <section className="py-20" id="workshop" style={{ background: 'var(--white)' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--rust)' }}>프로그램</p>
            <h2 className="heading-serif text-3xl">기업 팀십 프로그램</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {programsData.corporate.map((p) => (
              <div key={p.id} className="rounded-xl bg-white border border-[var(--rule)] p-6 flex flex-col hover:shadow-md transition-shadow">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{ background: 'var(--rust-l)', color: 'var(--rust)' }}>
                  {p.duration}
                </span>
                <h3 className="heading-serif text-[16px] mb-2">{p.title}</h3>
                <p className="text-[11px] font-medium mb-3" style={{ color: 'var(--rust)' }}>↗ {p.target}</p>
                <p className="text-[12.5px] leading-relaxed mb-4 flex-1" style={{ color: 'var(--gray)' }}>{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px]">
                      <span style={{ color: 'var(--rust)' }}>→</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={p.ctaHref}
                  className="text-[12.5px] font-bold hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--rust)' }}>
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 레퍼런스 */}
      <section className="py-14" style={{ background: 'var(--cream)' }}>
        <div className="section-container text-center">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-8" style={{ color: 'var(--lgray)' }}>
            함께한 기업들
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {REFERENCES.map((r) => (
              <span key={r} className="text-[14px] font-semibold px-5 py-2.5 rounded-full"
                style={{ background: 'var(--cream2)', color: 'var(--gray)' }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 가족 팀십 크로스셀 */}
      <section className="py-12" style={{ background: 'var(--sage-l)' }}>
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--sage)' }}>가족 팀십도 함께</p>
            <p className="heading-serif text-[18px]">임직원 자녀 교육도 고민하신다면?</p>
          </div>
          <CTAButton href="/family" variant="sage" size="md">가족 팀십 보기 →</CTAButton>
        </div>
      </section>
    </>
  );
}
