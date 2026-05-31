import type { Metadata } from 'next';
import Link from 'next/link';
import { FOUNDERS } from '@/lib/content';

export function generateStaticParams() {
  return FOUNDERS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = FOUNDERS.find((f) => f.slug === slug);
  if (!f) return { title: '404' };
  return {
    title: f.name === 'TBD' ? '준비 중' : f.name,
    description:
      f.name !== 'TBD'
        ? `${f.name} — ${f.role}. ${f.philosophy}`
        : '곧 공개됩니다.',
  };
}

export default async function FounderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const founder = FOUNDERS.find((f) => f.slug === slug);

  // Not found or TBD
  if (!founder || founder.name === 'TBD') {
    return (
      <>
        <section className="section" style={{ background: 'var(--ink)' }}>
          <div className="container-wide">
            <p className="label mb-6" style={{ color: 'var(--muted-on-dark)' }}>
              팀 소개
            </p>
            <h1
              className="display"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                color: 'var(--bone)',
                marginBottom: '24px',
              }}
            >
              준비 중입니다
            </h1>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--muted-on-dark)',
                marginBottom: '48px',
              }}
            >
              이 창업 멤버의 프로필은 곧 공개됩니다.
            </p>
            <Link href="/about" className="btn-outline-light">
              ← 팀 소개로 돌아가기
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p className="label mb-6" style={{ color: 'var(--gold)' }}>
            {founder.role}
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(42px, 6vw, 64px)',
              color: 'var(--bone)',
              marginBottom: '32px',
            }}
          >
            {founder.name}
          </h1>
          <p
            style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              color: 'var(--muted-on-dark)',
              lineHeight: 1.5,
              maxWidth: '600px',
              borderLeft: '3px solid var(--gold)',
              paddingLeft: '20px',
            }}
          >
            &ldquo;{founder.philosophy}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Bio + Career ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div className="container-wide">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'start',
            }}
          >
            {/* Bio */}
            <div>
              <p
                className="label mb-4"
                style={{ color: 'var(--muted-on-light)' }}
              >
                소개
              </p>
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: 'var(--ink)',
                }}
              >
                {founder.bio}
              </p>
            </div>

            {/* Career Timeline */}
            {founder.career.length > 0 && (
              <div>
                <p
                  className="label mb-8"
                  style={{ color: 'var(--muted-on-light)' }}
                >
                  Career
                </p>
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background: 'var(--rule-lt)',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {founder.career.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          paddingLeft: '40px',
                          paddingBottom:
                            idx < founder.career.length - 1 ? '36px' : '0',
                          position: 'relative',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: '-5px',
                            top: '4px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: idx === 0 ? 'var(--gold)' : 'var(--bone-3)',
                            border: '2px solid var(--bone)',
                          }}
                        />
                        <p
                          className="label"
                          style={{
                            color: 'var(--gold)',
                            marginBottom: '6px',
                            fontSize: '10px',
                          }}
                        >
                          {item.year}
                        </p>
                        <p
                          style={{
                            fontSize: '14px',
                            color: 'var(--ink)',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Tags ── */}
      {founder.tags.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--bone-2)' }}>
          <div className="container-wide">
            <p
              className="label mb-6"
              style={{ color: 'var(--muted-on-light)' }}
            >
              전문 영역
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {founder.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--bone)',
                    border: '1px solid var(--rule-lt)',
                    borderRadius: '100px',
                    fontSize: '13px',
                    color: 'var(--ink)',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-sm" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <Link href="/about" className="btn-outline-light">
              ← 팀 소개로
            </Link>
            <Link href="/contact" className="btn-primary">
              상담 신청하기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
