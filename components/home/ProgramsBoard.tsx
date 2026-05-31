import Link from 'next/link';
import { PROGRAMS, PROGRAM_SUBNAV } from '@/lib/content';

const PROGRAM_META = [
  { id: 'workshop', color: 'var(--rust)', accent: 'rgba(196,98,45,0.08)', border: 'rgba(196,98,45,0.2)' },
  { id: 'bootcamp', color: 'var(--gold)', accent: 'rgba(197,162,83,0.08)', border: 'rgba(197,162,83,0.2)' },
  { id: 'keynote',  color: '#7B9DB8',    accent: 'rgba(123,157,184,0.08)', border: 'rgba(123,157,184,0.2)' },
];

export default function ProgramsBoard() {
  const programs = [PROGRAMS.workshop, PROGRAMS.bootcamp, PROGRAMS.keynote];

  return (
    <section className="section" style={{ background: 'var(--bone)' }}>
      <div className="container-wide">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label mb-4" style={{ color: 'var(--rust)' }}>프로그램</p>
            <h2 className="display text-4xl md:text-5xl" style={{ color: 'var(--ink)' }}>
              어떤 형태로든<br />팀을 바꿉니다
            </h2>
          </div>
          <Link href="/programs/workshop" className="btn-outline-dark self-start md:self-auto">
            전체 프로그램 보기
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {programs.map((prog, i) => {
            const meta = PROGRAM_META[i];
            const subnav = PROGRAM_SUBNAV[i];
            return (
              <Link
                key={prog.id}
                href={`/programs/${prog.id}`}
                className="rounded-2xl p-8 flex flex-col group transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: meta.accent,
                  border: `1.5px solid ${meta.border}`,
                }}
              >
                {/* Label + duration */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="label text-[10px] px-3 py-1.5 rounded-full"
                    style={{ background: meta.accent, color: meta.color, border: `1px solid ${meta.border}` }}
                  >
                    {prog.duration}
                  </span>
                  <span className="label text-[10px]" style={{ color: meta.color }}>{prog.format.split(' ')[0]}</span>
                </div>

                {/* Name */}
                <h3 className="display text-[28px] mb-2" style={{ color: 'var(--ink)' }}>{prog.name}</h3>
                <p className="text-[13.5px] mb-6 flex-1 leading-relaxed" style={{ color: 'var(--muted-on-light)' }}>
                  {prog.tagline}
                </p>

                {/* Meta */}
                <div
                  className="flex flex-wrap gap-2 mb-6 pt-5"
                  style={{ borderTop: '1px solid var(--rule-lt)' }}
                >
                  <span className="label text-[10px] px-2 py-1 rounded" style={{ background: 'var(--bone-2)', color: 'var(--muted-on-light)' }}>
                    {prog.target}
                  </span>
                  <span className="label text-[10px] px-2 py-1 rounded" style={{ background: 'var(--bone-2)', color: 'var(--muted-on-light)' }}>
                    {prog.size}
                  </span>
                </div>

                {/* CTA */}
                <span className="label text-[11px] flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: meta.color }}>
                  자세히 보기 <span>→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
