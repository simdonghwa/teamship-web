import CTAButton from '@/components/shared/CTAButton';

export default function DiagnosisBanner() {
  return (
    <section className="py-16" style={{ background: 'var(--navy)' }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              ✦ 자기결정력 진단 · 무료
            </p>
            <h2 className="heading-serif text-2xl md:text-3xl mb-4" style={{ color: '#fff' }}>
              우리 아이, 스스로 결정할 수<br />있는 아이인가요?
            </h2>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--lgray)' }}>
              부모용 18문항 · 청소년용 16문항<br />
              5분이면 충분합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/diagnosis/parent" variant="primary" size="md">
                부모가 해보기 →
              </CTAButton>
              <CTAButton href="/diagnosis/teen" size="md"
                className="border border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full">
                아이가 해보기 →
              </CTAButton>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-4 flex-shrink-0">
            {[
              { num: '18', label: '부모용 문항' },
              { num: '16', label: '청소년용 문항' },
              { num: '5분', label: '소요 시간' },
            ].map((s) => (
              <div key={s.label} className="text-center px-5 py-4 rounded-xl"
                style={{ background: 'rgba(255,255,255,.07)' }}>
                <p className="heading-serif text-[26px] mb-0.5" style={{ color: 'var(--gold)' }}>{s.num}</p>
                <p className="text-[11px]" style={{ color: 'var(--lgray)' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
