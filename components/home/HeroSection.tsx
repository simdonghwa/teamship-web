import CTAButton from '@/components/shared/CTAButton';
import { Building2, Mic, Heart } from 'lucide-react';

const TRUST_BADGES = [
  { icon: Building2, text: 'Microsoft 21년' },
  { icon: Mic,       text: '세바시 강연' },
  { icon: Heart,     text: '두 아이 엄마' },
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: 'var(--navy)' }}
    >
      <div
        className="absolute -right-24 -top-24 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--rust) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -left-16 bottom-0 w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--sage) 0%, transparent 70%)' }}
      />

      <div className="section-container relative">
        <div className="flex flex-wrap gap-2 mb-8">
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(196,98,45,.25)', color: 'var(--rust)' }}
          >
            AX Teamship™
          </span>
          <span
            className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(77,124,90,.2)', color: '#7fc493' }}
          >
            ✦ 가족 팀십 NEW
          </span>
        </div>

        <h1
          className="heading-serif text-5xl md:text-6xl max-w-2xl mb-6 leading-tight"
          style={{ color: '#fff' }}
        >
          팀십은{' '}
          <em className="not-italic" style={{ color: 'var(--gold)' }}>
            가족
          </em>
          에서<br />시작된다
        </h1>

        <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed" style={{ color: 'var(--lgray)' }}>
          기업에서 21년간 배운 팀십의 언어.<br className="hidden md:block" />
          집에서도 쓸 수 있어야 진짜입니다.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <CTAButton href="/corporate" size="lg"
            className="border border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full">
            기업 팀십 →
          </CTAButton>
          <CTAButton href="/family" variant="sage" size="lg">
            가족 팀십 →
          </CTAButton>
        </div>

        <div className="flex flex-wrap gap-3">
          {TRUST_BADGES.map((b) => (
            <span
              key={b.text}
              className="flex items-center gap-2 text-[12px] px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,.08)', color: 'var(--lgray)' }}
            >
              <b.icon size={12} strokeWidth={1.5} />
              {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
