'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

type InquiryType = 'corporate' | 'family' | 'speaker' | 'other';

const TYPES: { value: InquiryType; label: string; icon: string }[] = [
  { value: 'corporate', label: '기업 강의·워크숍', icon: '🏢' },
  { value: 'family',    label: '가족 팀십 워크숍', icon: '👨‍👩‍👧‍👦' },
  { value: 'speaker',   label: '강연 의뢰',        icon: '🎤' },
  { value: 'other',     label: '기타 문의',         icon: '💬' },
];

const GRADES = ['중1', '중2', '중3', '고1', '고2', '고3'];

export default function ContactForm() {
  const params = useSearchParams();
  const [type, setType] = useState<InquiryType>((params.get('type') as InquiryType) || 'corporate');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', childGrade: '', message: '' });

  useEffect(() => {
    const t = params.get('type') as InquiryType;
    if (t) setType(t);
  }, [params]);

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--sage-l)' }}>
        <div className="text-5xl mb-5">✅</div>
        <h2 className="heading-serif text-2xl mb-3">문의가 접수되었습니다</h2>
        <p className="text-[13.5px]" style={{ color: 'var(--gray)' }}>
          영업일 기준 1~2일 내로 연락드리겠습니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* 문의 유형 */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--rust)' }}>
          문의 유형
        </label>
        <div className="grid grid-cols-2 gap-2">
          {TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setType(t.value)}
              className={cn(
                'flex items-center gap-2 px-4 py-3 rounded-xl border text-[13px] font-medium text-left transition-all',
                type === t.value
                  ? 'border-transparent text-white'
                  : 'border-[var(--rule)] text-[var(--text)] bg-white hover:border-[var(--lgray)]'
              )}
              style={type === t.value ? { background: 'var(--rust)' } : {}}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* 기본 정보 */}
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { key: 'name', label: '이름', type: 'text', placeholder: '홍길동', required: true },
          { key: 'email', label: '이메일', type: 'email', placeholder: 'hello@email.com', required: true },
          { key: 'phone', label: '연락처', type: 'tel', placeholder: '010-0000-0000', required: false },
          ...(type === 'corporate'
            ? [{ key: 'company', label: '회사명', type: 'text', placeholder: '회사명을 입력해주세요', required: false }]
            : []),
        ].map((f) => (
          <div key={f.key}>
            <label className="block text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gray)' }}>
              {f.label}{f.required && <span className="text-[var(--rust)] ml-1">*</span>}
            </label>
            <input
              type={f.type}
              value={form[f.key as keyof typeof form]}
              onChange={(e) => set(f.key, e.target.value)}
              placeholder={f.placeholder}
              required={f.required}
              className="w-full px-4 py-3 rounded-xl border border-[var(--rule)] bg-white text-[13px] outline-none focus:border-[var(--rust)] transition-colors"
              style={{ color: 'var(--text)' }}
            />
          </div>
        ))}
      </div>

      {/* 가족 팀십 전용: 자녀 학년 */}
      {type === 'family' && (
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--sage)' }}>
            자녀 학년
          </label>
          <div className="flex flex-wrap gap-2">
            {GRADES.map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => set('childGrade', g)}
                className={cn(
                  'px-4 py-2 rounded-full border text-[12px] font-medium transition-all',
                  form.childGrade === g
                    ? 'border-transparent text-white'
                    : 'border-[var(--rule)] text-[var(--gray)] bg-white'
                )}
                style={form.childGrade === g ? { background: 'var(--sage)' } : {}}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 메시지 */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--gray)' }}>
          문의 내용
        </label>
        <textarea
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="문의하실 내용을 자유롭게 입력해주세요."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-[var(--rule)] bg-white text-[13px] outline-none focus:border-[var(--rust)] transition-colors resize-none"
          style={{ color: 'var(--text)' }}
        />
      </div>

      {status === 'error' && (
        <p className="text-[12.5px] text-center" style={{ color: 'var(--rust)' }}>
          오류가 발생했습니다. 다시 시도해주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 rounded-full text-[14px] font-bold text-white transition-opacity disabled:opacity-60"
        style={{ background: 'var(--rust)' }}
      >
        {status === 'loading' ? '전송 중...' : '문의 보내기 →'}
      </button>
    </form>
  );
}
