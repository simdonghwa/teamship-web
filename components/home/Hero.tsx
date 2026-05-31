'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const WORDS = ['AI 시대,', '살아남는 팀의', '조건이 바뀌었다'];
const MARQUEE_ITEMS = ['SAFETY', 'TRUST', 'ENERGY', 'GROWTH', 'MOMENTUM'];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 70% 30%, rgba(197,162,83,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Main content */}
      <div className="flex-1 container-wide flex flex-col justify-center pt-36 pb-24">

        {/* Label */}
        <motion.p
          className="label mb-10"
          style={{ color: 'var(--gold)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          AX Teamship™ — 5요소 프레임워크
        </motion.p>

        {/* Headline */}
        <div className="mb-10">
          {WORDS.map((word, i) => (
            <motion.div
              key={word}
              className="display overflow-hidden"
              style={{ fontSize: 'clamp(52px, 7vw, 96px)', color: 'var(--bone)', lineHeight: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.div>
          ))}
        </div>

        {/* Sub */}
        <motion.p
          className="text-[16px] max-w-md mb-12 leading-relaxed"
          style={{ color: 'var(--muted-on-dark)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          기업 워크숍 · 부트캠프 · 키노트.<br />
          심리적 안전부터 실행 모멘텀까지, 팀을 바꾸는 5가지 요소.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <Link href="/contact" className="btn-primary">상담 신청 →</Link>
          <Link href="/method" className="btn-outline-light">방법론 보기</Link>
        </motion.div>

        {/* Stats inline */}
        <motion.div
          className="flex flex-wrap gap-8 mt-16 pt-16"
          style={{ borderTop: '1px solid var(--rule-dk)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { val: '+22pt', label: '심리적 안전 지수' },
            { val: '+63%', label: '의사결정 속도' },
            { val: '+31%p', label: 'OKR 완수율' },
          ].map((s) => (
            <div key={s.label}>
              <p className="display text-[32px] mb-1" style={{ color: 'var(--gold)' }}>{s.val}</p>
              <p className="label" style={{ color: 'var(--muted-on-dark)', fontSize: '10px' }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div
        className="overflow-hidden py-4"
        style={{ borderTop: '1px solid var(--rule-dk)' }}
      >
        <div className="flex marquee-track whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="label px-8"
              style={{ color: 'var(--muted-on-dark)', fontSize: '10px' }}
            >
              {item}
              <span className="ml-8" style={{ color: 'var(--gold)' }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
