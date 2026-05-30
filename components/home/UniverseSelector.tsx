import Link from 'next/link';

const UNIVERSES = [
  {
    axis: 'AXIS 01',
    icon: '🏢',
    title: '기업 팀십',
    desc: 'AX Teamship™ 5요소 기반 워크숍·강의·컨설팅. AI 전환기에 팀을 다시 세우는 법.',
    tag: '현재 주수익',
    href: '/corporate',
    color: 'var(--rust)',
    bg: 'var(--rust-l)',
    border: 'rgba(196,98,45,.25)',
    cta: '기업 팀십 보기',
  },
  {
    axis: 'AXIS 02 · NEW',
    icon: '👨‍👩‍👧‍👦',
    title: '가족 팀십',
    desc: '자기결정력 × AX Teamship™. 부모와 아이가 함께 만드는 첫 번째 팀 — 진단 + 워크숍.',
    tag: '신규 확장',
    href: '/family',
    color: 'var(--sage)',
    bg: 'var(--sage-l)',
    border: 'rgba(77,124,90,.25)',
    cta: '가족 팀십 보기',
  },
  {
    axis: 'AXIS 03 · COMING SOON',
    icon: '🏫',
    title: '교육 팀십',
    desc: '교사-학생 팀십. 교육청·학교 연계 프로그램. 지금 대기 명단에 등록하세요.',
    tag: '씨앗 단계',
    href: '/education',
    color: 'var(--gray)',
    bg: 'var(--cream2)',
    border: 'var(--lgray)',
    cta: '대기 등록',
  },
];

export default function UniverseSelector() {
  return (
    <section className="py-20" style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--rust)' }}>
            Teamship Universe
          </p>
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">
            어떤 팀십이 필요하세요?
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'var(--gray)' }}>
            SAFETY · TRUST · ENERGY · GROWTH · MOMENTUM<br />
            같은 5가지 요소, 다른 무대
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {UNIVERSES.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl p-7 border-[1.5px] flex flex-col"
              style={{ background: u.bg, borderColor: u.border }}
            >
              <p className="text-[9px] font-bold tracking-[2px] uppercase mb-3" style={{ color: u.color }}>
                {u.axis}
              </p>
              <span className="text-4xl mb-3 block">{u.icon}</span>
              <h3 className="heading-serif text-xl mb-3" style={{ color: u.color }}>
                {u.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed mb-5 flex-1" style={{ color: 'var(--gray)' }}>
                {u.desc}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-bold px-3 py-1 rounded-full"
                  style={{ background: `${u.color}20`, color: u.color }}
                >
                  {u.tag}
                </span>
                <Link href={u.href}
                  className="text-[12px] font-bold transition-opacity hover:opacity-70"
                  style={{ color: u.color }}>
                  {u.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
