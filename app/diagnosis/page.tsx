import type { Metadata } from 'next';
import CTAButton from '@/components/shared/CTAButton';

export const metadata: Metadata = {
  title: '자기결정력 진단',
  description: '부모용 18문항, 청소년용 16문항 자기결정력 진단. 5분이면 우리 가족의 팀십 현황을 알 수 있습니다.',
};

export default function DiagnosisLanding() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: 'var(--navy)' }}>
        <div className="section-container text-center">
          <span className="inline-flex text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(201,168,76,.2)', color: 'var(--gold)' }}>
            ✦ 자기결정력 진단 · 무료
          </span>
          <h1 className="heading-serif text-4xl md:text-5xl mb-6 leading-tight" style={{ color: '#fff' }}>
            우리 가족의<br />
            <em className="not-italic" style={{ color: 'var(--gold)' }}>자기결정력</em>을 진단합니다
          </h1>
          <p className="text-[15px] max-w-lg mx-auto mb-12 leading-relaxed" style={{ color: 'var(--lgray)' }}>
            부모와 자녀, 각자의 결과를 확인하고<br />
            우리 가족의 팀십 현황을 파악하세요.
          </p>

          {/* 선택 카드 */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            <a href="/diagnosis/parent"
              className="rounded-2xl p-8 text-left hover:scale-[1.02] transition-transform cursor-pointer"
              style={{ background: 'var(--rust-l)', border: '1.5px solid rgba(196,98,45,.3)' }}>
              <span className="text-4xl block mb-4">👩‍👦</span>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--rust)' }}>부모용</p>
              <h2 className="heading-serif text-[18px] mb-2" style={{ color: 'var(--navy)' }}>부모 진단</h2>
              <p className="text-[12.5px] mb-4" style={{ color: 'var(--gray)' }}>18문항 · 약 5분</p>
              <p className="text-[12px] font-bold" style={{ color: 'var(--rust)' }}>시작하기 →</p>
            </a>

            <a href="/diagnosis/teen"
              className="rounded-2xl p-8 text-left hover:scale-[1.02] transition-transform cursor-pointer"
              style={{ background: 'var(--teal-l)', border: '1.5px solid rgba(46,110,126,.3)' }}>
              <span className="text-4xl block mb-4">🧑‍🎒</span>
              <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--teal)' }}>청소년용</p>
              <h2 className="heading-serif text-[18px] mb-2" style={{ color: 'var(--navy)' }}>청소년 진단</h2>
              <p className="text-[12.5px] mb-4" style={{ color: 'var(--gray)' }}>16문항 · 약 4분</p>
              <p className="text-[12px] font-bold" style={{ color: 'var(--teal)' }}>시작하기 →</p>
            </a>
          </div>
        </div>
      </section>

      {/* 설명 */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🎯', title: '자기결정이론 기반', desc: 'SDT(Self-Determination Theory) 기반으로 설계된 과학적 진단' },
              { icon: '📊', title: '6가지 부모 유형', desc: '균형성장형부터 회복성장형까지, 내 유형에 맞는 실천 가이드 제공' },
              { icon: '🔗', title: '가족 비교 기능', desc: '부모와 자녀의 결과를 함께 보고 대화의 출발점을 만들어 드립니다' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="heading-serif text-[16px] mb-2">{item.title}</h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--gray)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진단 후 워크숍 유도 */}
      <section className="py-16 flex-1" style={{ background: 'var(--navy)' }}>
        <div className="section-container text-center">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
            진단 결과가 나왔다면
          </p>
          <h2 className="heading-serif text-2xl md:text-3xl mb-3" style={{ color: '#fff' }}>
            결과를 들고 워크숍에 오세요
          </h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--lgray)' }}>
            진단지를 바탕으로 가족 팀십 워크숍을 설계합니다.<br />
            데이터가 있으면 대화가 훨씬 쉬워집니다.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="/family#workshop" variant="sage" size="lg">가족 팀십 워크숍 →</CTAButton>
            <CTAButton href="/contact?type=family" size="lg"
              className="border border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full">
              워크숍 문의
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
