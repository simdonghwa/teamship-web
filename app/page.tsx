import HeroSection from '@/components/home/HeroSection';
import UniverseSelector from '@/components/home/UniverseSelector';
import FiveElements from '@/components/home/FiveElements';
import DiagnosisBanner from '@/components/home/DiagnosisBanner';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import CTAButton from '@/components/shared/CTAButton';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <UniverseSelector />
      <FiveElements />
      <DiagnosisBanner />
      <ProgramsPreview />

      {/* 강사 소개 */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="section-container flex flex-col md:flex-row items-center gap-10">
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full flex-shrink-0 flex items-center justify-center"
            style={{ background: 'var(--cream2)', border: '1.5px solid var(--rule)' }}
          >
            <span className="heading-serif text-4xl md:text-5xl font-bold" style={{ color: 'var(--navy)' }}>이소</span>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--rust)' }}>
              강사 소개
            </p>
            <h2 className="heading-serif text-2xl md:text-3xl mb-2">이소영</h2>
            <p className="text-[13px] font-medium mb-4" style={{ color: 'var(--rust)' }}>
              Pioneer Mom · AI Transformation Leader · AX Teamship™ Creator
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {['#AI시대리더십', '#AXTeamship', '#가족팀십', '#자기결정력'].map((tag) => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full"
                  style={{ background: 'var(--cream2)', color: 'var(--gray)' }}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[13.5px] leading-relaxed mb-6 max-w-xl" style={{ color: 'var(--gray)' }}>
              회사에선 팀장이었는데 집에 오면 그냥 엄마였습니다.<br />
              그 간극에서 가족 팀십이 시작됐습니다.
            </p>
            <CTAButton href="/about" variant="secondary" size="md">
              강사 소개 더 보기 →
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
