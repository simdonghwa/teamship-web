import type { Metadata } from 'next';
import Link from 'next/link';
import { FOUNDERS } from '@/lib/content';

export const metadata: Metadata = {
  title: '회사 소개',
  description:
    'AX Teamship™ 창업팀 소개 — 이소영·이선경 Co-Founder. Microsoft 21년 AI 전환 경험과 기업 교육 전문성으로 팀십 프레임워크를 만들었습니다.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p className="label mb-6" style={{ color: 'var(--gold)' }}>
            회사 소개
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--bone)',
              marginBottom: '24px',
            }}
          >
            팀십 전문가들
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--muted-on-dark)',
              maxWidth: '560px',
              lineHeight: 1.75,
            }}
          >
            AX Teamship™는 AI 전환기 조직이 직면하는 가장 근본적인 문제 — 팀십의 붕괴 —
            를 해결하기 위해 만들어졌습니다. 현장에서 배운 언어로, 측정 가능한 변화를 만듭니다.
          </p>
        </div>
      </section>

      {/* ── Founders Grid ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            창업팀
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--ink)',
              marginBottom: '48px',
            }}
          >
            6인 공동창업팀
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {FOUNDERS.map((founder) => {
              const isActive = founder.name !== 'TBD';

              return (
                <div
                  key={founder.slug}
                  style={{
                    position: 'relative',
                    padding: '32px',
                    background: isActive ? 'var(--bone-2)' : 'var(--bone)',
                    border: '1px solid var(--rule-lt)',
                    borderRadius: '8px',
                    opacity: isActive ? 1 : 0.5,
                  }}
                >
                  {/* TBD overlay */}
                  {!isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        background: 'rgba(242,237,227,0.4)',
                        backdropFilter: 'blur(2px)',
                      }}
                    >
                      <span
                        className="label"
                        style={{
                          color: 'var(--muted-on-light)',
                          padding: '8px 16px',
                          background: 'var(--bone)',
                          border: '1px solid var(--rule-lt)',
                          borderRadius: '4px',
                        }}
                      >
                        준비 중
                      </span>
                    </div>
                  )}

                  {/* Content (always rendered, greyed out for TBD) */}
                  <div>
                    <div style={{ marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: isActive ? 'var(--ink-3)' : 'var(--bone-3)',
                          marginBottom: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span
                          className="label"
                          style={{
                            color: isActive ? 'var(--gold)' : 'var(--muted-on-light)',
                            fontSize: '14px',
                          }}
                        >
                          {isActive ? founder.name.charAt(0) : '?'}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontSize: '19px',
                          fontWeight: 700,
                          color: 'var(--ink)',
                          marginBottom: '4px',
                        }}
                      >
                        {isActive ? founder.name : 'Co-Founder'}
                      </h3>
                      <p
                        style={{
                          fontSize: '12px',
                          color: 'var(--muted-on-light)',
                          lineHeight: 1.4,
                        }}
                      >
                        {founder.role}
                      </p>
                    </div>

                    {isActive && (
                      <>
                        <p
                          style={{
                            fontSize: '14px',
                            fontStyle: 'italic',
                            color: 'var(--ink)',
                            lineHeight: 1.6,
                            marginBottom: '16px',
                            borderLeft: '2px solid var(--gold)',
                            paddingLeft: '12px',
                          }}
                        >
                          &ldquo;{founder.philosophy}&rdquo;
                        </p>

                        {founder.tags.length > 0 && (
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '6px',
                              marginBottom: '20px',
                            }}
                          >
                            {founder.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  fontSize: '11px',
                                  padding: '3px 8px',
                                  background: 'var(--bone-3)',
                                  color: 'var(--muted-on-light)',
                                  borderRadius: '4px',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        <Link
                          href={`/about/${founder.slug}`}
                          className="label"
                          style={{
                            color: 'var(--rust)',
                            fontSize: '11px',
                            textDecoration: 'none',
                          }}
                        >
                          프로필 보기 →
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            미션
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--bone)',
              marginBottom: '40px',
            }}
          >
            우리가 만드는 것
          </h2>

          <div style={{ maxWidth: '640px' }}>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--muted-on-dark)',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              AI가 팀을 대체하지 않습니다. AI는 팀을 드러냅니다.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted-on-dark)',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              심리적 안전이 없는 팀은 AI를 두려워합니다. 위임이 없는 팀은 AI를 활용하지 못합니다.
              강점을 모르는 팀은 AI에 에너지를 뺏깁니다.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted-on-dark)',
                lineHeight: 1.8,
              }}
            >
              우리는 AI 전환기에 살아남는 팀의 조건을 5가지로 정의하고,
              그것을 조직에 심는 일을 합니다.
            </p>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link href="/contact" className="btn-primary">
              함께 시작하기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
