import type { Metadata } from 'next';
import Link from 'next/link';
import { FIVE_ELEMENTS } from '@/lib/content';

export const metadata: Metadata = {
  title: '방법론',
  description:
    'AX Teamship™ 5요소 프레임워크 — 심리적 안전·위임과 신뢰·강점과 에너지·함께 배우는 시스템·결정과 실행의 가속. 팀을 바꾸는 검증된 방법론.',
};

export default function MethodPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="section"
        style={{ background: 'var(--ink)' }}
      >
        <div className="container-wide">
          <p
            className="label mb-6"
            style={{ color: 'var(--gold)' }}
          >
            방법론
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--bone)',
              maxWidth: '640px',
              whiteSpace: 'pre-line',
            }}
          >
            {'팀을 바꾸는\n5가지 프레임워크'}
          </h1>
          <p
            style={{
              marginTop: '24px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--muted-on-dark)',
              maxWidth: '520px',
            }}
          >
            AX Teamship™은 AI 전환기에 살아남는 팀의 조건을 다섯 가지 요소로 정의합니다.
            각 요소는 독립적이면서도 서로를 강화합니다.
          </p>
        </div>
      </section>

      {/* ── Five Elements ── */}
      {FIVE_ELEMENTS.map((el, idx) => {
        const isOdd = idx % 2 === 0;
        const bg = isOdd ? 'var(--bone)' : 'var(--ink)';
        const textPrimary = isOdd ? 'var(--ink)' : 'var(--bone)';
        const textMuted = isOdd ? 'var(--muted-on-light)' : 'var(--muted-on-dark)';
        const ruleColor = isOdd ? 'var(--rule-lt)' : 'var(--rule-dk)';

        return (
          <section
            key={el.key}
            className="section"
            style={{ background: bg }}
          >
            <div className="container-wide">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '64px',
                  alignItems: 'start',
                }}
                className="[&]:max-md:grid-cols-1"
              >
                {/* Left: text */}
                <div>
                  <p
                    className="label mb-3"
                    style={{ color: 'var(--gold)' }}
                  >
                    {el.key}
                  </p>
                  <h2
                    className="display"
                    style={{
                      fontSize: 'clamp(28px, 3.5vw, 40px)',
                      color: textPrimary,
                      marginBottom: '16px',
                    }}
                  >
                    {el.name}
                  </h2>
                  <p
                    style={{
                      fontSize: '16px',
                      fontStyle: 'italic',
                      color: textMuted,
                      marginBottom: '24px',
                      lineHeight: 1.6,
                    }}
                  >
                    {el.oneliner}
                  </p>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: textMuted,
                      marginBottom: '32px',
                    }}
                  >
                    {el.background}
                  </p>

                  {/* Tools */}
                  <div>
                    <p
                      className="label mb-3"
                      style={{ color: textMuted, fontSize: '10px' }}
                    >
                      주요 도구
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {el.tools.map((tool) => (
                        <li
                          key={tool}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px',
                            color: textPrimary,
                          }}
                        >
                          <span
                            style={{
                              width: '4px',
                              height: '4px',
                              borderRadius: '50%',
                              background: 'var(--gold)',
                              flexShrink: 0,
                            }}
                          />
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: before/after stat */}
                <div
                  style={{
                    paddingTop: '8px',
                  }}
                >
                  <div
                    style={{
                      borderTop: `1px solid ${ruleColor}`,
                      paddingTop: '32px',
                      marginBottom: '24px',
                    }}
                  >
                    <p
                      className="label mb-2"
                      style={{ color: textMuted, fontSize: '10px' }}
                    >
                      도입 전
                    </p>
                    <p
                      style={{
                        fontSize: '15px',
                        color: textMuted,
                        fontStyle: 'italic',
                      }}
                    >
                      {el.before}
                    </p>
                  </div>
                  <div
                    style={{
                      borderTop: `1px solid ${ruleColor}`,
                      paddingTop: '32px',
                    }}
                  >
                    <p
                      className="label mb-4"
                      style={{ color: textMuted, fontSize: '10px' }}
                    >
                      도입 후
                    </p>
                    <p
                      className="display"
                      style={{
                        fontSize: 'clamp(36px, 4vw, 52px)',
                        color: 'var(--gold)',
                        lineHeight: 1,
                      }}
                    >
                      {el.after.split(' ').slice(0, 1).join('')}
                    </p>
                    <p
                      style={{
                        marginTop: '8px',
                        fontSize: '14px',
                        color: textMuted,
                      }}
                    >
                      {el.after.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <section
        className="section"
        style={{ background: 'var(--ink)' }}
      >
        <div
          className="container-wide"
          style={{ textAlign: 'center' }}
        >
          <p
            className="label mb-6"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            다음 단계
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              color: 'var(--bone)',
              marginBottom: '16px',
            }}
          >
            팀에 적용해보세요
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--muted-on-dark)',
              marginBottom: '40px',
            }}
          >
            30분 무료 상담으로 어떤 요소가 우선인지 파악합니다.
          </p>
          <Link href="/contact" className="btn-primary">
            무료 상담 신청 →
          </Link>
        </div>
      </section>
    </>
  );
}
