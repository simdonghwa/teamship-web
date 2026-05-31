import type { Metadata } from 'next';
import Link from 'next/link';
import { PROGRAMS } from '@/lib/content';

export const metadata: Metadata = {
  title: '키노트',
  description:
    'AX Teamship™ 키노트 — 60~90분 강연·행사·컨퍼런스. AI 시대 팀십을 한 시간으로 바꿉니다. 50~3,000명 규모.',
};

export default function KeynotePage() {
  const prog = PROGRAMS.keynote;

  const metaBadges = [
    { label: '시간', value: prog.duration },
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
            키노트
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
                <span style={{ fontSize: '13px', color: 'var(--bone)', fontWeight: 600 }}>
                  {b.value}
                </span>
              </div>
            ))}
          </div>

          <Link href="/contact?type=keynote" className="btn-primary">
            키노트 섭외하기 →
          </Link>
        </div>
      </section>

      {/* ── Keynote Cards ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            강연 목록
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--ink)',
              marginBottom: '48px',
            }}
          >
            준비된 강연
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {prog.keynotes.map((k) => (
              <div
                key={k.id}
                style={{
                  padding: '36px',
                  background: 'var(--bone-2)',
                  borderTop: '3px solid var(--gold)',
                }}
              >
                <span
                  className="label"
                  style={{
                    color: 'var(--gold)',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {k.id}
                </span>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}
                >
                  {k.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted-on-light)',
                    lineHeight: 1.65,
                    fontStyle: 'italic',
                  }}
                >
                  {k.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suitable for ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            적합한 행사
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--bone)',
              marginBottom: '48px',
            }}
          >
            이런 자리에 어울립니다
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              '전사 킥오프·시무식·연간 전략 발표',
              '리더십 컨퍼런스·임원 워크숍',
              '기업 세미나·HR 포럼·조직 개발 행사',
              '대학·기관 특강·졸업식 강연',
              '컴퍼니 데이·팀 빌딩 행사',
            ].map((event, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--rule-dk)',
                }}
              >
                <span
                  className="label"
                  style={{ color: 'var(--gold)', flexShrink: 0, minWidth: '28px' }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: '16px', color: 'var(--bone)' }}>{event}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link href="/contact?type=keynote" className="btn-primary">
              강연 섭외 문의 →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Next Programs ── */}
      <section className="section-sm" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-8"
            style={{ color: 'var(--muted-on-light)' }}
          >
            다른 프로그램
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <Link href="/programs/workshop" className="btn-outline-dark">
              워크숍 — 1·2일 집중 →
            </Link>
            <Link href="/programs/bootcamp" className="btn-outline-dark">
              부트캠프 — 8주 여정 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
