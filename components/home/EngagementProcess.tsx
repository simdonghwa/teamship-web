import Link from 'next/link';
import { ENGAGEMENT } from '@/lib/content';

export default function EngagementProcess() {
  return (
    <section className="section" style={{ background: 'var(--bone)' }}>
      <div className="container-wide">

        {/* Header */}
        <div className="mb-16">
          <p className="label mb-4" style={{ color: 'var(--rust)' }}>진행 프로세스</p>
          <h2 className="display text-4xl md:text-5xl" style={{ color: 'var(--ink)' }}>
            처음부터 끝까지<br />함께합니다
          </h2>
        </div>

        {/* Steps — horizontal on desktop */}
        <div className="grid md:grid-cols-5 gap-5 mb-16">
          {ENGAGEMENT.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {i < ENGAGEMENT.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-full w-full h-px z-0"
                  style={{ background: 'var(--rule-lt)', width: 'calc(100% + 20px)', left: '100%', marginLeft: '-10px' }}
                />
              )}

              <div className="relative z-10">
                {/* Number */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: i === 0 ? 'var(--rust)' : 'var(--bone-2)',
                    border: i === 0 ? 'none' : '1.5px solid var(--rule-lt)',
                  }}
                >
                  <span
                    className="label text-[12px]"
                    style={{ color: i === 0 ? '#fff' : 'var(--muted-on-light)' }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  className="display text-[18px] mb-2"
                  style={{ color: 'var(--ink)' }}
                >
                  {step.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--muted-on-light)' }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ background: 'var(--ink)' }}
        >
          <div>
            <p className="label mb-3" style={{ color: 'var(--gold)' }}>첫 번째 단계</p>
            <h3 className="display text-[26px] md:text-[32px]" style={{ color: 'var(--bone)' }}>
              30분 무료 상담으로<br />시작하세요
            </h3>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            지금 상담 신청 →
          </Link>
        </div>
      </div>
    </section>
  );
}
