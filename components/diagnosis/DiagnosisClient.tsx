'use client';

import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import ResultView from './ResultView';

interface Question {
  id: number;
  text: string;
  category: string;
  reverse?: boolean;
}

interface DiagnosisType {
  index: number;
  name: string;
  emoji: string;
  description: string;
  advice: string;
  cta: string;
  ctaHref: string;
}

interface DiagnosisData {
  title: string;
  subtitle: string;
  totalQuestions: number;
  scale: string[];
  questions: Question[];
  types: DiagnosisType[];
}

interface Props {
  data: DiagnosisData;
  mode: 'parent' | 'teen';
  accentColor: string;
  accentBg: string;
}

const SCALE_VALUES = [1, 2, 3, 4, 5];

export default function DiagnosisClient({ data, mode, accentColor, accentBg }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [resultType, setResultType] = useState<DiagnosisType | null>(null);

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / data.totalQuestions) * 100);

  const handleAnswer = useCallback((questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const calcResult = useCallback(() => {
    let total = 0;
    data.questions.forEach((q) => {
      const raw = answers[q.id] ?? 3;
      total += q.reverse ? 6 - raw : raw;
    });
    const max = data.totalQuestions * 5;
    const pct = (total / max) * 100;
    let idx = 0;
    if (pct >= 80) idx = 0;
    else if (pct >= 65) idx = 1;
    else if (pct >= 50) idx = 2;
    else if (pct >= 35) idx = 3;
    else idx = mode === 'parent' ? 4 : 4;
    return data.types[idx] ?? data.types[0];
  }, [answers, data, mode]);

  const handleSubmit = () => {
    if (answered < data.totalQuestions) return;
    setResultType(calcResult());
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted && resultType) {
    return <ResultView type={resultType} mode={mode} accentColor={accentColor} accentBg={accentBg} />;
  }

  return (
    <>
      {/* 헤더 */}
      <section className="py-16" style={{ background: 'var(--navy)' }}>
        <div className="section-container">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: accentColor }}>
            {mode === 'parent' ? '👩‍👦 부모용 진단' : '🧑‍🎒 청소년용 진단'}
          </p>
          <h1 className="heading-serif text-3xl md:text-4xl mb-2" style={{ color: '#fff' }}>{data.title}</h1>
          <p className="text-[14px] mb-6" style={{ color: 'var(--lgray)' }}>{data.subtitle}</p>

          {/* 진행 바 */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,.15)' }}>
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%`, background: accentColor }}
              />
            </div>
            <span className="text-[12px] flex-shrink-0" style={{ color: 'var(--lgray)' }}>
              {answered} / {data.totalQuestions}
            </span>
          </div>
        </div>
      </section>

      {/* 문항 */}
      <section className="py-12 flex-1" style={{ background: 'var(--cream)' }}>
        <div className="section-container max-w-2xl">
          <div className="flex flex-col gap-6">
            {data.questions.map((q, idx) => {
              const selected = answers[q.id];
              return (
                <div
                  key={q.id}
                  className={cn(
                    'rounded-xl p-6 border transition-colors',
                    selected !== undefined
                      ? 'border-transparent bg-white shadow-sm'
                      : 'border-[var(--rule)] bg-white'
                  )}
                >
                  <div className="flex items-start gap-3 mb-5">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                      style={{ background: selected !== undefined ? accentColor : 'var(--cream2)', color: selected !== undefined ? '#fff' : 'var(--gray)' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[14px] leading-relaxed font-medium" style={{ color: 'var(--navy)' }}>
                      {q.text}
                    </p>
                  </div>

                  {/* 척도 */}
                  <div className="flex gap-2 flex-wrap">
                    {SCALE_VALUES.map((v, si) => (
                      <button
                        key={v}
                        onClick={() => handleAnswer(q.id, v)}
                        className={cn(
                          'flex-1 min-w-[52px] flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-lg border text-[10.5px] transition-all',
                          selected === v
                            ? 'border-transparent text-white font-bold'
                            : 'border-[var(--rule)] text-[var(--gray)] hover:border-[var(--lgray)]'
                        )}
                        style={selected === v ? { background: accentColor } : { background: 'var(--cream)' }}
                      >
                        <span className={cn('text-[15px]', selected === v ? 'grayscale-0' : 'grayscale opacity-60')}>
                          {['😟', '🙁', '😐', '🙂', '😊'][si]}
                        </span>
                        <span className="leading-tight text-center hidden sm:block">
                          {data.scale[si]}
                        </span>
                        <span className="font-bold">{v}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 제출 */}
          <div className="mt-10 text-center">
            {answered < data.totalQuestions && (
              <p className="text-[12.5px] mb-4" style={{ color: 'var(--lgray)' }}>
                {data.totalQuestions - answered}개 문항이 남아있습니다
              </p>
            )}
            <button
              onClick={handleSubmit}
              disabled={answered < data.totalQuestions}
              className={cn(
                'px-10 py-4 rounded-full text-[14px] font-bold transition-all duration-200',
                answered === data.totalQuestions
                  ? 'text-white cursor-pointer hover:opacity-90'
                  : 'opacity-40 cursor-not-allowed bg-[var(--lgray)] text-white'
              )}
              style={answered === data.totalQuestions ? { background: accentColor } : {}}
            >
              결과 보기 →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
