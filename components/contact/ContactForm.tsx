'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CONTACT_TYPES } from '@/lib/content';

type FormState = {
  company: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  size: string;
  schedule: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  company: '',
  name: '',
  title: '',
  email: '',
  phone: '',
  size: '',
  schedule: '',
  message: '',
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [selectedType, setSelectedType] = useState<string>('');
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const valid = CONTACT_TYPES.find((t) => t.value === typeParam);
      if (valid) setSelectedType(valid.value);
    }
  }, [searchParams]);

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: selectedType }),
      });
      if (!res.ok) throw new Error('Response not ok');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  // Success state
  if (status === 'success') {
    return (
      <div
        style={{
          padding: '56px 40px',
          textAlign: 'center',
          background: 'var(--bone)',
          border: '1px solid var(--rule-lt)',
          borderRadius: '12px',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(197,162,83,0.15)',
            border: '2px solid var(--gold)',
            margin: '0 auto 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ color: 'var(--gold)', fontSize: '20px', lineHeight: 1 }}>✓</span>
        </div>
        <h2
          className="display"
          style={{
            fontSize: '28px',
            color: 'var(--ink)',
            marginBottom: '12px',
          }}
        >
          문의가 접수되었습니다
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--muted-on-light)', lineHeight: 1.6 }}>
          영업일 기준 1~2일 내로 연락드리겠습니다.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    border: '1.5px solid var(--rule-lt)',
    borderRadius: '8px',
    background: 'var(--bone)',
    color: 'var(--ink)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--muted-on-light)',
    marginBottom: '8px',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

      {/* Type selector */}
      <div>
        <p style={labelStyle}>
          문의 유형 <span style={{ color: 'var(--rust)' }}>*</span>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {CONTACT_TYPES.map((t) => {
            const isActive = selectedType === t.value;
            return (
              <button
                key={t.value}
                type="button"
                onClick={() => setSelectedType(t.value)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: isActive
                    ? '1.5px solid var(--rust)'
                    : '1.5px solid var(--rule-lt)',
                  background: isActive ? 'var(--rust)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--ink)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2-col fields */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        {/* 회사명 */}
        <div>
          <label style={labelStyle}>
            회사명 <span style={{ color: 'var(--rust)' }}>*</span>
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            placeholder="주식회사 팀십"
            required
            style={inputStyle}
          />
        </div>

        {/* 담당자 */}
        <div>
          <label style={labelStyle}>
            담당자 <span style={{ color: 'var(--rust)' }}>*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="홍길동"
            required
            style={inputStyle}
          />
        </div>

        {/* 직책 */}
        <div>
          <label style={labelStyle}>직책</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            placeholder="HR 파트너 / 팀장"
            style={inputStyle}
          />
        </div>

        {/* 이메일 */}
        <div>
          <label style={labelStyle}>
            이메일 <span style={{ color: 'var(--rust)' }}>*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="hello@company.com"
            required
            style={inputStyle}
          />
        </div>

        {/* 연락처 */}
        <div>
          <label style={labelStyle}>연락처</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="010-0000-0000"
            style={inputStyle}
          />
        </div>

        {/* 대상 규모 */}
        <div>
          <label style={labelStyle}>대상 규모</label>
          <input
            type="text"
            value={form.size}
            onChange={(e) => set('size', e.target.value)}
            placeholder="20명 / 팀 2개"
            style={inputStyle}
          />
        </div>

        {/* 희망 일정 */}
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>희망 일정</label>
          <input
            type="text"
            value={form.schedule}
            onChange={(e) => set('schedule', e.target.value)}
            placeholder="2025년 9월 중"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 문의 내용 */}
      <div>
        <label style={labelStyle}>
          문의 내용 <span style={{ color: 'var(--rust)' }}>*</span>
        </label>
        <textarea
          value={form.message}
          onChange={(e) => set('message', e.target.value)}
          placeholder="현재 팀의 상황과 원하시는 변화를 자유롭게 적어주세요."
          required
          rows={5}
          style={{
            ...inputStyle,
            resize: 'none',
            lineHeight: 1.65,
          }}
        />
      </div>

      {status === 'error' && (
        <p
          style={{
            fontSize: '13px',
            color: 'var(--rust)',
            textAlign: 'center',
          }}
        >
          오류가 발생했습니다. 다시 시도하거나 직접 이메일로 문의해주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !selectedType}
        className="btn-primary"
        style={{
          justifyContent: 'center',
          opacity: status === 'loading' || !selectedType ? 0.5 : 1,
          cursor: status === 'loading' || !selectedType ? 'not-allowed' : 'pointer',
          fontSize: '15px',
          padding: '16px 32px',
        }}
      >
        {status === 'loading' ? '전송 중...' : '상담 신청하기 →'}
      </button>
    </form>
  );
}
