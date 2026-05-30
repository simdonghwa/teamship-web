import type { Metadata } from 'next';
import CTAButton from '@/components/shared/CTAButton';

export const metadata: Metadata = {
  title: '교육 팀십 — 준비중',
  description: '교사-학생 팀십. 교육청·학교 연계 프로그램. 대기 명단 등록하기.',
};

export default function EducationPage() {
  return (
    <section className="py-28 min-h-[70vh] flex items-center" style={{ background: 'var(--cream)' }}>
      <div className="section-container text-center">
        <span className="inline-flex text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
          style={{ background: 'var(--sage-l)', color: 'var(--sage)', border: '1px solid var(--sage)' }}>
          COMING SOON
        </span>
        <div className="text-6xl mb-6">🏫</div>
        <h1 className="heading-serif text-4xl md:text-5xl mb-4">교육 팀십</h1>
        <p className="text-[16px] max-w-md mx-auto mb-3 leading-relaxed" style={{ color: 'var(--gray)' }}>
          교사-학생 팀십. 교육청·학교 연계 프로그램.<br />
          현재 강의 요청 수요 확인 중입니다.
        </p>
        <p className="text-[13px] mb-10" style={{ color: 'var(--lgray)' }}>
          Phase 3 개발 예정 — 대기 명단에 등록하시면 가장 먼저 알려드립니다.
        </p>
        <CTAButton href="/contact?type=other&program=education" variant="sage" size="lg">
          대기 명단 등록 →
        </CTAButton>
      </div>
    </section>
  );
}
