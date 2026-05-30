import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Handshake, Zap, Sprout, Rocket, Quote } from 'lucide-react';
import elements from '@/content/family-teamship.json';
import programsData from '@/content/programs.json';
import CTAButton from '@/components/shared/CTAButton';

const ELEMENT_ICONS: Record<string, React.ElementType> = {
  SAFETY: Shield, TRUST: Handshake, ENERGY: Zap, GROWTH: Sprout, MOMENTUM: Rocket,
};

export const metadata: Metadata = {
  title: '가족 팀십',
  description: '자기결정력 × AX Teamship™ — 부모와 자녀가 함께 만드는 첫 번째 팀. 가족 팀십 워크숍, 강의, 임직원 자녀교육.',
};

const ELEMENT_COLORS: Record<string, string> = {
  SAFETY: 'var(--teal)', TRUST: 'var(--rust)',
  ENERGY: 'var(--gold)', GROWTH: 'var(--sage)', MOMENTUM: 'var(--purple)',
};
const ELEMENT_BG: Record<string, string> = {
  SAFETY: 'var(--teal-l)', TRUST: 'var(--rust-l)',
  ENERGY: 'var(--gold-l)', GROWTH: 'var(--sage-l)', MOMENTUM: 'var(--purple-l)',
};

export default function FamilyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: 'var(--navy)' }}>
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)' }} />
        <div className="section-container relative">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(77,124,90,.25)', color: '#7fc493' }}>
            ✦ 가족 팀십 — NEW
          </span>
          <h1 className="heading-serif text-5xl md:text-6xl max-w-2xl mb-6 leading-tight" style={{ color: '#fff' }}>
            우리 가족도<br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>팀</em>이 될 수 있습니다
          </h1>
          <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: 'var(--lgray)' }}>
            Microsoft에서 배운 팀십 언어를 집에서도 써보려 했습니다.<br />
            안 됐습니다. 그래서 가족 버전을 따로 만들었습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href="/diagnosis" variant="sage" size="lg">자기결정력 진단 →</CTAButton>
            <CTAButton href="/contact?type=family" size="lg"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full">
              워크숍 문의
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pioneer Mom 스토리 */}
      <section className="py-14" style={{ background: 'var(--sage-l)' }}>
        <div className="section-container max-w-3xl">
          <div className="flex gap-5 items-start">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
              style={{ background: 'rgba(77,124,90,.15)' }}>
              <Quote size={18} strokeWidth={1.5} style={{ color: 'var(--sage)' }} />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>
                Pioneer Mom의 이야기
              </p>
              <blockquote className="heading-serif text-xl md:text-2xl leading-relaxed mb-4" style={{ color: 'var(--navy)' }}>
                "회사에선 팀장이었는데<br />집에서는 그냥 엄마였습니다."
              </blockquote>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--sage)' }}>
                — 이소영, AX Teamship™ 창시자 · 두 아이 엄마
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5요소 가족 버전 */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>
              AX Teamship™ 5 Elements · 가족 버전
            </p>
            <h2 className="heading-serif text-3xl md:text-4xl mb-4">
              5가지 요소를<br />가족 언어로 바꿨습니다
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {elements.map((el) => {
              const color = ELEMENT_COLORS[el.key];
              const bg = ELEMENT_BG[el.key];
              const Icon = ELEMENT_ICONS[el.key];
              return (
                <div key={el.key} className="rounded-xl border border-[var(--rule)] p-6" style={{ background: bg }}>
                  <div className="grid md:grid-cols-3 gap-4 items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
                        {Icon && <Icon size={18} strokeWidth={1.5} style={{ color }} />}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color }}>{el.key}</p>
                        <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--navy)' }}>{el.family}</p>
                      </div>
                    </div>
                    <div className="md:border-l md:border-[var(--rule)] md:pl-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--lgray)' }}>오늘 물어볼 것</p>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--navy)' }}>{el.question}</p>
                    </div>
                    <div className="md:border-l md:border-[var(--rule)] md:pl-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--lgray)' }}>오늘 해볼 것</p>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--gray)' }}>{el.tip}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <CTAButton href="/diagnosis" variant="sage" size="lg">
              진단으로 우리 가족 확인하기 →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 프로그램 */}
      <section className="py-20" id="workshop" style={{ background: 'var(--cream)' }}>
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>프로그램</p>
            <h2 className="heading-serif text-3xl">가족 팀십 프로그램</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {programsData.family.map((p) => (
              <div key={p.id} className="rounded-xl bg-white border border-[var(--rule)] p-6 flex flex-col">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full mb-4 self-start"
                  style={{ background: 'var(--sage-l)', color: 'var(--sage)' }}>
                  {p.duration}
                </span>
                <h3 className="heading-serif text-base mb-2">{p.title}</h3>
                <p className="text-[11px] font-medium mb-3" style={{ color: 'var(--sage)' }}>↗ {p.target}</p>
                <p className="text-[12.5px] leading-relaxed mb-4 flex-1" style={{ color: 'var(--gray)' }}>{p.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[12px]">
                      <span style={{ color: 'var(--sage)' }}>→</span>{f}
                    </li>
                  ))}
                </ul>
                <Link href={p.ctaHref} className="text-[12.5px] font-bold hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--sage)' }}>
                  {p.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기업→가족 크로스셀 */}
      <section className="py-12" style={{ background: 'var(--rust-l)' }}>
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--rust)' }}>기업 팀십도 함께</p>
            <p className="heading-serif text-lg">임직원 자녀 교육도 같이 묶으면 더 효과적입니다</p>
          </div>
          <CTAButton href="/corporate" variant="primary" size="md">기업 팀십 →</CTAButton>
        </div>
      </section>
    </>
  );
}
