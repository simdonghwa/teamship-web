import Link from 'next/link';
import programsData from '@/content/programs.json';
import CTAButton from '@/components/shared/CTAButton';

interface ProgramCardProps {
  title: string;
  duration: string;
  target: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  accent: string;
  accentBg: string;
}

function ProgramCard({ title, duration, target, description, features, cta, ctaHref, accent, accentBg }: ProgramCardProps) {
  return (
    <div className="rounded-xl border border-[var(--rule)] bg-white flex flex-col p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="heading-serif text-[15px]">{title}</h3>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full ml-2 flex-shrink-0"
          style={{ background: accentBg, color: accent }}>
          {duration}
        </span>
      </div>
      <p className="text-[11px] font-medium mb-3" style={{ color: accent }}>↗ {target}</p>
      <p className="text-[12.5px] leading-relaxed mb-4 flex-1" style={{ color: 'var(--gray)' }}>{description}</p>
      <ul className="space-y-1.5 mb-5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text)' }}>
            <span style={{ color: accent }} className="mt-0.5 flex-shrink-0">→</span>
            {f}
          </li>
        ))}
      </ul>
      <Link href={ctaHref}
        className="text-[12.5px] font-bold transition-colors hover:opacity-70"
        style={{ color: accent }}>
        {cta} →
      </Link>
    </div>
  );
}

export default function ProgramsPreview() {
  return (
    <section className="py-20" style={{ background: 'var(--white)' }}>
      <div className="section-container">
        {/* 기업 팀십 */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--rust)' }}>
                🏢 기업 팀십 프로그램
              </p>
              <h2 className="heading-serif text-2xl md:text-3xl">
                AI 전환 시대, 팀을 다시 설계합니다
              </h2>
            </div>
            <CTAButton href="/corporate" variant="ghost" size="sm" className="hidden sm:inline-flex">
              전체 보기 →
            </CTAButton>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {programsData.corporate.map((p) => (
              <ProgramCard
                key={p.id}
                {...p}
                accent="var(--rust)"
                accentBg="var(--rust-l)"
              />
            ))}
          </div>
        </div>

        {/* 가족 팀십 */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: 'var(--sage)' }}>
                👨‍👩‍👧‍👦 가족 팀십 프로그램 ✦ NEW
              </p>
              <h2 className="heading-serif text-2xl md:text-3xl">
                우리 가족도 팀이 될 수 있습니다
              </h2>
            </div>
            <CTAButton href="/family" variant="ghost" size="sm"
              className="hidden sm:inline-flex border-[var(--sage)] text-[var(--sage)] hover:bg-[var(--sage-l)]">
              전체 보기 →
            </CTAButton>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {programsData.family.map((p) => (
              <ProgramCard
                key={p.id}
                {...p}
                accent="var(--sage)"
                accentBg="var(--sage-l)"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
