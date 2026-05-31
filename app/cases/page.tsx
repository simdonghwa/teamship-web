import type { Metadata } from 'next';
import { CASES, INSIGHTS } from '@/lib/content';

export const metadata: Metadata = {
  title: '사례·인사이트',
  description:
    'AX Teamship™ 도입 사례와 인사이트 — 생명보험·제조업·SaaS 기업의 실제 변화 데이터. 심리적 안전·의사결정 속도·OKR 완수율.',
};

export default function CasesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p className="label mb-6" style={{ color: 'var(--gold)' }}>
            사례·인사이트
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--bone)',
              maxWidth: '560px',
            }}
          >
            숫자로 증명합니다
          </h1>
          <p
            style={{
              marginTop: '24px',
              fontSize: '17px',
              color: 'var(--muted-on-dark)',
              maxWidth: '480px',
              lineHeight: 1.7,
            }}
          >
            이론이 아닌 실제 조직에서 측정된 변화입니다.
          </p>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            도입 사례
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {CASES.map((c, idx) => (
              <article key={c.id}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '48px',
                    alignItems: 'start',
                    borderTop: idx === 0 ? '2px solid var(--rule-lt)' : 'none',
                    paddingTop: '48px',
                  }}
                >
                  {/* Left */}
                  <div>
                    <span
                      className="label"
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        background: 'var(--bone-2)',
                        color: 'var(--muted-on-light)',
                        borderRadius: '4px',
                        marginBottom: '20px',
                      }}
                    >
                      {c.industry}
                    </span>
                    <h2
                      className="display"
                      style={{
                        fontSize: 'clamp(22px, 2.5vw, 28px)',
                        color: 'var(--ink)',
                        marginBottom: '16px',
                      }}
                    >
                      {c.headline}
                    </h2>
                    <p
                      style={{
                        fontSize: '15px',
                        color: 'var(--muted-on-light)',
                        lineHeight: 1.75,
                        maxWidth: '520px',
                      }}
                    >
                      {c.summary}
                    </p>
                  </div>

                  {/* Right: metrics */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '24px',
                      minWidth: '200px',
                    }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p
                          className="display"
                          style={{
                            fontSize: 'clamp(32px, 3vw, 44px)',
                            color: 'var(--gold)',
                            lineHeight: 1,
                            marginBottom: '4px',
                          }}
                        >
                          {m.value}
                        </p>
                        <p
                          className="label"
                          style={{
                            color: 'var(--muted-on-light)',
                            fontSize: '10px',
                          }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {idx < CASES.length - 1 && (
                  <div
                    style={{
                      marginTop: '48px',
                      height: '1px',
                      background: 'var(--rule-lt)',
                    }}
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            인사이트
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--bone)',
              marginBottom: '48px',
            }}
          >
            팀십의 관점
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {INSIGHTS.map((insight) => (
              <div
                key={insight.id}
                style={{
                  padding: '32px',
                  border: '1px solid var(--rule-dk)',
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* "준비 중" overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '4px 10px',
                    background: 'var(--ink-3)',
                    border: '1px solid var(--rule-dk)',
                    borderRadius: '4px',
                  }}
                >
                  <span
                    className="label"
                    style={{ color: 'var(--muted-on-dark)', fontSize: '9px' }}
                  >
                    준비 중
                  </span>
                </div>

                <span
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    background: 'rgba(197,162,83,0.15)',
                    borderRadius: '4px',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    className="label"
                    style={{ color: 'var(--gold)', fontSize: '10px' }}
                  >
                    {insight.type}
                  </span>
                </span>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: 'var(--bone)',
                    lineHeight: 1.4,
                    marginBottom: '12px',
                  }}
                >
                  {insight.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted-on-dark)',
                    lineHeight: 1.65,
                  }}
                >
                  {insight.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
