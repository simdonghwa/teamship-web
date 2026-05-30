'use client';

import { useState } from 'react';
import elements from '@/content/family-teamship.json';

type Mode = 'corporate' | 'family';

const ELEMENT_COLORS: Record<string, string> = {
  SAFETY:   'var(--teal)',
  TRUST:    'var(--rust)',
  ENERGY:   'var(--gold)',
  GROWTH:   'var(--sage)',
  MOMENTUM: 'var(--purple)',
};

export default function FiveElements() {
  const [mode, setMode] = useState<Mode>('corporate');

  return (
    <section className="py-20" style={{ background: 'var(--cream)' }}>
      <div className="section-container">
        {/* 헤더 */}
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--rust)' }}>
            AX Teamship™ 5 Elements
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl mb-6">
            같은 5요소, 두 개의 무대
          </h2>

          {/* 토글 */}
          <div
            className="inline-flex rounded-full p-1 gap-1"
            style={{ background: 'var(--cream2)' }}
          >
            {(['corporate', 'family'] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="px-5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-200"
                style={
                  mode === m
                    ? { background: mode === 'corporate' ? 'var(--rust)' : 'var(--sage)', color: '#fff' }
                    : { color: 'var(--gray)' }
                }
              >
                {m === 'corporate' ? '🏢 기업 팀십' : '👨‍👩‍👧‍👦 가족 팀십'}
              </button>
            ))}
          </div>
        </div>

        {/* 요소 카드 */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {elements.map((el) => {
            const color = ELEMENT_COLORS[el.key];
            return (
              <div
                key={el.key}
                className="rounded-xl p-5 flex flex-col gap-3 border border-[var(--rule)] bg-white last:col-span-2 last:lg:col-span-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{el.icon}</span>
                  <span
                    className="text-[10px] font-bold tracking-[1.5px] uppercase"
                    style={{ color }}
                  >
                    {el.key}
                  </span>
                </div>
                <p className="text-[13px] font-semibold leading-snug" style={{ color: 'var(--navy)' }}>
                  {mode === 'corporate' ? el.corporate : el.family}
                </p>
                {mode === 'family' && (
                  <p className="text-[11.5px] leading-relaxed border-t border-[var(--rule)] pt-3" style={{ color: 'var(--gray)' }}>
                    <span className="font-semibold" style={{ color }}>Q. </span>
                    {el.question}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
