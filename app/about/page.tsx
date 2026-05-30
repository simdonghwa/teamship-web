import type { Metadata } from 'next';
import CTAButton from '@/components/shared/CTAButton';

export const metadata: Metadata = {
  title: '강사 소개',
  description: '이소영 — Pioneer Mom · AI Transformation Leader · AX Teamship™ Creator. Microsoft 21년, 두 아이 엄마.',
};

const CAREER = [
  { year: '2026~', label: 'AX Teamship™ 가족 팀십 런칭', tag: 'NEW' },
  { year: '2024~', label: 'AX Teamship™ 창시 — 기업 워크숍·강의 운영' },
  { year: '2003~2024', label: 'Microsoft Korea 21년 — AI Transformation Leader' },
  { year: '현재', label: '고3 딸 · 수의대 아들 두 아이 엄마' },
];

const TAGS = ['#AI시대리더십', '#AXTeamship', '#가족팀십', '#자기결정력', '#PioneerMom', '#세바시강연'];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-20" style={{ background: 'var(--navy)' }}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,.08)', border: '1.5px solid rgba(255,255,255,.12)' }}
            >
              <span className="heading-serif text-5xl md:text-6xl font-bold" style={{ color: 'rgba(255,255,255,.7)' }}>이소</span>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(201,168,76,.2)', color: 'var(--gold)' }}>
                  세바시 강연 예정
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(196,98,45,.25)', color: 'var(--rust)' }}>
                  Pioneer Mom
                </span>
              </div>
              <h1 className="heading-serif text-4xl md:text-5xl mb-3" style={{ color: '#fff' }}>이소영</h1>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--lgray)' }}>
                Pioneer Mom · AI Transformation Leader · AX Teamship™ Creator
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {TAGS.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,.08)', color: 'var(--lgray)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <CTAButton href="/contact?type=corporate" variant="primary" size="md">강의 의뢰하기 →</CTAButton>
                <CTAButton href="/contact?type=family" variant="sage" size="md">가족 팀십 문의 →</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 스토리 */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="section-container max-w-3xl">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-8" style={{ color: 'var(--rust)' }}>
            About
          </p>
          <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
            <p>
              Microsoft에서 21년을 보내며 팀십이 뭔지 배웠습니다. 살아남는 팀은 기술이 아니라
              <strong> 안전, 신뢰, 에너지, 성장, 추진력</strong> — 이 다섯 가지로 작동한다는 것을.
            </p>
            <p>
              그런데 집에 왔더니 안 됐습니다. 회사에서는 팀장이었지만, 집에서는 그냥 엄마였습니다.
              아이의 선택을 기다리지 못하고, 모든 걸 먼저 결정해주려 했습니다.
            </p>
            <p>
              그래서 기업의 팀십 언어를 가족 언어로 번역하기 시작했습니다.
              그게 <strong>AX Teamship™</strong>이고, <strong>가족 팀십</strong>입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 약력 타임라인 */}
      <section className="py-20" style={{ background: 'var(--white)' }}>
        <div className="section-container max-w-2xl">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-8" style={{ color: 'var(--rust)' }}>Career</p>
          <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--rule)' }}>
            {CAREER.map((c, i) => (
              <div key={i} className="mb-8 relative">
                <div className="absolute -left-[25px] w-3 h-3 rounded-full border-2 border-white"
                  style={{ background: i === 0 ? 'var(--rust)' : 'var(--lgray)', boxShadow: `0 0 0 2px ${i === 0 ? 'var(--rust)' : 'var(--lgray)'}` }} />
                <p className="text-[11px] font-bold mb-1" style={{ color: 'var(--rust)' }}>{c.year}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--navy)' }}>
                  {c.label}
                  {c.tag && (
                    <span className="ml-2 text-[9px] font-bold bg-[var(--rust)] text-white px-1.5 py-0.5 rounded-sm">
                      {c.tag}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 flex-1" style={{ background: 'var(--cream)' }}>
        <div className="section-container text-center">
          <h2 className="heading-serif text-2xl md:text-3xl mb-3">문의하기 전에 진단부터 해보세요</h2>
          <p className="text-sm mb-8" style={{ color: 'var(--gray)' }}>
            5분이면 됩니다. 결과를 보면 무엇을 물어봐야 할지 보입니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/diagnosis" variant="sage" size="lg">자기결정력 진단 →</CTAButton>
            <CTAButton href="/contact?type=corporate" variant="primary" size="lg">기업 강의 의뢰 →</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
