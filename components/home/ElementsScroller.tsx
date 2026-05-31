'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FIVE_ELEMENTS } from '@/lib/content';

const CARD_W = 380;
const CARD_GAP = 20;

export default function ElementsScroller() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalShift = -(FIVE_ELEMENTS.length - 1) * (CARD_W + CARD_GAP);
  const x = useTransform(scrollYProgress, [0.05, 0.9], [0, totalShift]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const COLORS: Record<string, string> = {
    SAFETY: '#4E9E8C',
    TRUST:  '#C4622D',
    ENERGY: '#C5A253',
    GROWTH: '#5A8F6A',
    MOMENTUM: '#7B5EA7',
  };

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '280vh', background: 'var(--ink)' }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col overflow-hidden"
        style={{ background: 'var(--ink)' }}
      >
        {/* Header */}
        <div className="container-wide pt-20 pb-10 flex-shrink-0">
          <div className="flex items-end justify-between">
            <div>
              <p className="label mb-3" style={{ color: 'var(--gold)' }}>AX Teamship™ 5요소</p>
              <h2 className="display text-4xl md:text-5xl" style={{ color: 'var(--bone)' }}>
                팀을 바꾸는<br />5가지 요소
              </h2>
            </div>
            <p
              className="hidden md:block text-[13px] pb-1"
              style={{ color: 'var(--muted-on-dark)' }}
            >
              스크롤하여 탐색 ↓
            </p>
          </div>
        </div>

        {/* Cards track */}
        <div className="flex-1 flex items-center overflow-hidden px-8 md:px-16">
          <motion.div
            className="flex gap-5 flex-shrink-0"
            style={{ x }}
          >
            {FIVE_ELEMENTS.map((el, i) => {
              const color = COLORS[el.key] ?? 'var(--gold)';
              return (
                <div
                  key={el.key}
                  className="flex-shrink-0 rounded-2xl p-8 flex flex-col"
                  style={{
                    width: `${CARD_W}px`,
                    minHeight: '340px',
                    background: 'var(--ink-2)',
                    border: '1px solid var(--rule-dk)',
                  }}
                >
                  {/* Number + key */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="label text-[10px] w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}22`, color }}
                    >
                      0{i + 1}
                    </span>
                    <span className="label text-[11px]" style={{ color }}>{el.key}</span>
                  </div>

                  {/* Name */}
                  <h3
                    className="display text-[22px] mb-3 leading-tight"
                    style={{ color: 'var(--bone)' }}
                  >
                    {el.name}
                  </h3>

                  {/* Oneliner */}
                  <p
                    className="text-[13.5px] leading-relaxed mb-6 flex-1"
                    style={{ color: 'var(--muted-on-dark)' }}
                  >
                    {el.oneliner}
                  </p>

                  {/* Tools */}
                  <div className="mb-6">
                    <p className="label mb-2.5" style={{ color: 'var(--muted-on-dark)', fontSize: '10px' }}>개입 도구</p>
                    <ul className="flex flex-col gap-1.5">
                      {el.tools.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-[12.5px]" style={{ color: 'var(--bone)' }}>
                          <span style={{ color }}>→</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Before → After */}
                  <div
                    className="rounded-xl p-4 flex items-center gap-3"
                    style={{ background: `${color}12`, border: `1px solid ${color}30` }}
                  >
                    <div className="flex-1">
                      <p className="label mb-1" style={{ color: 'var(--muted-on-dark)', fontSize: '9px' }}>BEFORE</p>
                      <p className="text-[11.5px]" style={{ color: 'var(--muted-on-dark)' }}>{el.before}</p>
                    </div>
                    <span style={{ color }}>→</span>
                    <div className="flex-1 text-right">
                      <p className="label mb-1" style={{ color, fontSize: '9px' }}>AFTER</p>
                      <p className="text-[11.5px] font-bold" style={{ color }}>{el.after}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="container-wide pb-8 flex-shrink-0">
          <div
            className="h-px relative"
            style={{ background: 'var(--rule-dk)' }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{ width: progressWidth, background: 'var(--gold)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
