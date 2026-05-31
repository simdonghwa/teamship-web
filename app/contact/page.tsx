import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: '상담 신청',
  description:
    '30분 무료 상담으로 팀 변화를 시작합니다. 워크숍·부트캠프·키노트·컨설팅 문의 환영.',
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="container-wide">
          <p className="label mb-6" style={{ color: 'var(--gold)' }}>
            상담 신청
          </p>
          <h1
            className="display"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              color: 'var(--bone)',
              marginBottom: '16px',
              whiteSpace: 'pre-line',
            }}
          >
            {'팀을 바꾸는 첫\n30분'}
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'var(--muted-on-dark)',
              marginBottom: '40px',
            }}
          >
            무료 상담으로 시작합니다
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 24px',
              border: '1px solid var(--rule-dk)',
              borderRadius: '8px',
            }}
          >
            <span
              className="label"
              style={{ color: 'var(--muted-on-dark)', fontSize: '10px' }}
            >
              직접 문의
            </span>
            <a
              href={`mailto:${SITE.email}`}
              style={{
                fontSize: '15px',
                color: 'var(--bone)',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="section" style={{ background: 'var(--bone)' }}>
        <div
          className="container-wide"
          style={{ maxWidth: '720px' }}
        >
          <Suspense
            fallback={
              <div
                style={{
                  padding: '60px',
                  textAlign: 'center',
                  color: 'var(--muted-on-light)',
                }}
              >
                로딩 중...
              </div>
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
