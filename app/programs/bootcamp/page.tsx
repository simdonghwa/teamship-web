import type { Metadata } from 'next';
import Link from 'next/link';
import { PROGRAMS } from '@/lib/content';

export const metadata: Metadata = {
  title: '부트캠프',
  description:
    'AX Teamship™ 부트캠프 — 4~8주 모듈형 조직 전환 여정. 임원·팀장·HR 파트너 대상. 측정 가능한 변화를 만듭니다.',
};

export default function BootcampPage() {
  const prog = PROGRAMS.bootcamp;

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
            부트캠프
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

          <Link href="/contact?type=bootcamp" className="btn-primary">
            부트캠프 문의하기 →
          </Link>
        </div>
      </section>

      {/* ── Week Phases / Timeline ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-light)' }}
          >
            커리큘럼
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--ink)',
              marginBottom: '64px',
            }}
          >
            8주 여정
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                bottom: '0',
                width: '2px',
                background: 'var(--rule-lt)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {prog.weeks.map((phase, idx) => (
                <div
                  key={phase.phase}
                  style={{
                    paddingLeft: '48px',
                    paddingBottom: idx < prog.weeks.length - 1 ? '56px' : '0',
                    position: 'relative',
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      border: '2px solid var(--bone)',
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '12px' }}>
                    <span
                      className="label"
                      style={{ color: 'var(--gold)' }}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className="label"
                      style={{ color: 'var(--muted-on-light)', fontSize: '10px' }}
                    >
                      {phase.weeks}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '10px',
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--muted-on-light)',
                      lineHeight: 1.65,
                      maxWidth: '480px',
                    }}
                  >
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p
            className="label mb-4"
            style={{ color: 'var(--muted-on-dark)' }}
          >
            참가 대상
          </p>
          <h2
            className="display"
            style={{
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--bone)',
              marginBottom: '32px',
            }}
          >
            이런 분들을 위한 프로그램입니다
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {[
              {
                role: '임원',
                desc: '조직 전환을 주도해야 하지만 어디서 시작해야 할지 모르는 리더',
              },
              {
                role: '팀장',
                desc: '팀의 실행력과 심리적 안전을 동시에 끌어올리고 싶은 현장 관리자',
              },
              {
                role: 'HR 파트너',
                desc: '데이터 기반으로 조직 변화를 설계하고 측정하고 싶은 HR 담당자',
              },
            ].map((item) => (
              <div
                key={item.role}
                style={{
                  padding: '28px',
                  border: '1px solid var(--rule-dk)',
                  borderRadius: '8px',
                }}
              >
                <p
                  className="label mb-3"
                  style={{ color: 'var(--gold)' }}
                >
                  {item.role}
                </p>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--muted-on-dark)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Link href="/contact?type=bootcamp" className="btn-primary">
            부트캠프 신청하기 →
          </Link>
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
            <Link href="/programs/keynote" className="btn-outline-dark">
              키노트 — 강연·행사 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
