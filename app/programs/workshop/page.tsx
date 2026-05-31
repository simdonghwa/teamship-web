import type { Metadata } from 'next';
import Link from 'next/link';
import { PROGRAMS } from '@/lib/content';

export const metadata: Metadata = {
  title: '워크숍',
  description:
    'AX Teamship™ 워크숍 — 1·2일 오프라인 집중. 팀십 근육을 만드는 가장 빠른 방법. 12~30명 규모.',
};

export default function WorkshopPage() {
  const prog = PROGRAMS.workshop;

  const metaBadges = [
    { label: '기간', value: prog.duration },
    { label: '형태', value: prog.format },
    { label: '대상', value: prog.target },
    { label: '규모', value: prog.size },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p className="label mb-6" style={{ color: 'var(--gold)' }}>
            워크숍
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--bone)',
              marginBottom: '16px',
            }}
          >
            {prog.name}
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: 'var(--muted-on-dark)',
              fontStyle: 'italic',
              marginBottom: '40px',
            }}
          >
            {prog.tagline}
          </p>

          {/* Meta badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '48px',
            }}
          >
            {metaBadges.map((b) => (
              <div
                key={b.label}
                style={{
                  padding: '10px 18px',
                  border: '1px solid var(--rule-dk)',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span
                  className="label"
                  style={{ color: 'var(--muted-on-dark)', fontSize: '9px' }}
                >
                  {b.label}
                </span>
                <span
                  style={{ fontSize: '13px', color: 'var(--bone)', fontWeight: 600 }}
                >
                  {b.value}
                </span>
              </div>
            ))}
          </div>

          <Link href="/contact?type=workshop" className="btn-primary">
            워크숍 문의하기 →
          </Link>
        </div>
      </section>

      {/* ── Problems ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            해결 문제
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--ink)',
              marginBottom: '48px',
            }}
          >
            이런 문제를 해결합니다
          </h2>

          <ol
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            {prog.problems.map((problem, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '20px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--rule-lt)',
                }}
              >
                <span
                  className="label"
                  style={{
                    color: 'var(--gold)',
                    flexShrink: 0,
                    minWidth: '28px',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '17px', color: 'var(--ink)', lineHeight: 1.6 }}>
                  {problem}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            커리큘럼
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--bone)',
              marginBottom: '48px',
            }}
          >
            1일 커리큘럼
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1px',
              background: 'var(--rule-dk)',
              border: '1px solid var(--rule-dk)',
            }}
          >
            {prog.curriculum.map((block, idx) => (
              <div
                key={block.block}
                style={{
                  background: 'var(--ink)',
                  padding: '32px',
                }}
              >
                <span
                  className="label"
                  style={{ color: 'var(--gold)', display: 'block', marginBottom: '12px' }}
                >
                  {String(idx + 1).padStart(2, '0')} {block.block}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--bone)',
                    marginBottom: '10px',
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted-on-dark)',
                    lineHeight: 1.65,
                  }}
                >
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outputs ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            산출물
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--ink)',
              marginBottom: '48px',
            }}
          >
            참가자가 가져가는 것
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
            }}
          >
            {prog.outputs.map((output, idx) => (
              <div
                key={idx}
                style={{
                  paddingTop: '24px',
                  borderTop: '2px solid var(--gold)',
                }}
              >
                <span
                  className="label"
                  style={{ color: 'var(--gold)', display: 'block', marginBottom: '10px' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    lineHeight: 1.5,
                  }}
                >
                  {output}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Programs ── */}
      <section className="section-sm" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-8"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            다른 프로그램
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link href="/programs/bootcamp" className="btn-outline-light">
              부트캠프 — 8주 조직 전환 →
            </Link>
            <Link href="/programs/keynote" className="btn-outline-light">
              키노트 — 강연·행사 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
