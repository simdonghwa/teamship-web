'use client';

import Link from 'next/link';
import CTAButton from '@/components/shared/CTAButton';

interface DiagnosisType {
  index: number;
  name: string;
  emoji: string;
  description: string;
  advice: string;
  cta: string;
  ctaHref: string;
}

interface Props {
  type: DiagnosisType;
  mode: 'parent' | 'teen';
  accentColor: string;
  accentBg: string;
}

export default function ResultView({ type, mode, accentColor, accentBg }: Props) {
  const handleKakaoShare = () => {
    if (typeof window !== 'undefined' && (window as unknown as { Kakao?: { isInitialized?: () => boolean } }).Kakao?.isInitialized?.()) {
      alert('카카오 공유 SDK를 초기화하면 사용할 수 있습니다.');
    } else {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`나의 자기결정력 유형은 "${type.name}" ${type.emoji} — teamship.co.kr/diagnosis`)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* 결과 헤더 */}
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="section-container text-center">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: accentColor }}>
            {mode === 'parent' ? '부모 자기결정력 진단 결과' : '청소년 자기결정력 진단 결과'}
          </p>
          <div className="text-7xl mb-5">{type.emoji}</div>
          <h1 className="heading-serif text-3xl md:text-4xl mb-3" style={{ color: '#fff' }}>
            {type.name}
          </h1>
          <p className="text-[15px] max-w-md mx-auto leading-relaxed" style={{ color: 'var(--lgray)' }}>
            {type.description}
          </p>
        </div>
      </section>

      {/* 상세 결과 */}
      <section className="py-16" style={{ background: accentBg }}>
        <div className="section-container max-w-2xl">
          {/* 조언 */}
          <div className="rounded-2xl bg-white p-8 mb-6 shadow-sm">
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: accentColor }}>
              🌱 오늘부터 시작하는 실천
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--navy)' }}>{type.advice}</p>
          </div>

          {/* CTA 카드 */}
          <div
            className="rounded-2xl p-8 mb-8"
            style={{ background: 'var(--navy)' }}
          >
            <p className="text-[12px] mb-3" style={{ color: 'var(--lgray)' }}>
              이 유형에게 추천하는 다음 단계
            </p>
            <p className="heading-serif text-[18px] mb-5" style={{ color: '#fff' }}>{type.cta}</p>
            <CTAButton href={type.ctaHref} variant="primary" size="md">
              자세히 알아보기 →
            </CTAButton>
          </div>

          {/* 공유 */}
          <div className="text-center">
            <p className="text-[13px] mb-4" style={{ color: 'var(--gray)' }}>
              이 결과를 가족과 나눠보세요
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={handleKakaoShare}
                className="px-5 py-2.5 rounded-full text-[12.5px] font-bold transition-opacity hover:opacity-80"
                style={{ background: '#FEE500', color: '#3A1D1D' }}
              >
                카카오로 공유 →
              </button>
              {mode === 'teen' && (
                <Link
                  href="/diagnosis/parent"
                  className="px-5 py-2.5 rounded-full text-[12.5px] font-bold border transition-colors"
                  style={{ borderColor: accentColor, color: accentColor }}
                >
                  부모님도 진단해보기 →
                </Link>
              )}
              {mode === 'parent' && (
                <Link
                  href="/diagnosis/teen"
                  className="px-5 py-2.5 rounded-full text-[12.5px] font-bold border transition-colors"
                  style={{ borderColor: 'var(--teal)', color: 'var(--teal)' }}
                >
                  자녀도 진단해보기 →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
