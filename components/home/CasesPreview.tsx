import Link from 'next/link';
import { CASES } from '@/lib/content';

export default function CasesPreview() {
  return (
    <section className="section" style={{ background: 'var(--ink)' }}>
      <div className="container-wide">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="label mb-4" style={{ color: 'var(--gold)' }}>도입 사례</p>
            <h2 className="display text-4xl md:text-5xl" style={{ color: 'var(--bone)' }}>
              숫자로 증명합니다
            </h2>
          </div>
          <Link
            href="/cases"
            className="label self-start md:self-auto text-[11px]"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            전체 사례 보기 →
          </Link>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-px" style={{ borderTop: '1px solid var(--rule-dk)' }}>
          {CASES.map((c, i) => (
            <Link
              key={c.id}
              href="/cases"
              className="group grid md:grid-cols-12 gap-6 py-10 transition-colors"
              style={{ borderBottom: '1px solid var(--rule-dk)' }}
            >
              {/* Number + industry */}
              <div className="md:col-span-2 flex items-start gap-4">
                <span
                  className="label text-[10px] w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--ink-3)', color: 'var(--muted-on-dark)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="label text-[11px] mt-1.5" style={{ color: 'var(--muted-on-dark)' }}>{c.industry}</span>
              </div>

              {/* Headline */}
              <div className="md:col-span-5">
                <h3
                  className="display text-[20px] leading-snug group-hover:opacity-80 transition-opacity"
                  style={{ color: 'var(--bone)' }}
                >
                  {c.headline}
                </h3>
                <p className="text-[13px] mt-3 leading-relaxed" style={{ color: 'var(--muted-on-dark)' }}>
                  {c.summary}
                </p>
              </div>

              {/* Metrics */}
              <div className="md:col-span-4 md:col-start-9 flex flex-wrap gap-4 items-start">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="display text-[28px]" style={{ color: 'var(--gold)' }}>{m.value}</p>
                    <p className="label text-[10px] mt-1" style={{ color: 'var(--muted-on-dark)' }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
