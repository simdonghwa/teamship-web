import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: '문의하기',
  description: '기업 강의 의뢰, 가족 팀십 워크숍 신청, 강연 의뢰. 무엇이든 먼저 물어보세요.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20" style={{ background: 'var(--navy)' }}>
        <div className="section-container text-center">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--rust)' }}>
            문의하기
          </p>
          <h1 className="heading-serif text-4xl md:text-5xl mb-4" style={{ color: '#fff' }}>
            함께 시작해요
          </h1>
          <p className="text-[15px] max-w-md mx-auto" style={{ color: 'var(--lgray)' }}>
            기업 강의부터 가족 워크숍까지,<br />어떤 문의도 환영합니다.
          </p>
        </div>
      </section>

      <section className="py-16 flex-1" style={{ background: 'var(--cream)' }}>
        <div className="section-container max-w-2xl">
          <Suspense fallback={<div className="py-12 text-center text-[var(--lgray)]">로딩 중...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
