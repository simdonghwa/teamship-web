// ============================================================
// AX Teamship™ — Static Content
// Single source of truth for all B2B website copy & data.
// ============================================================

// ── Interfaces ───────────────────────────────────────────────

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  email: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasSub?: boolean;
}

export interface ProgramSubNavItem {
  label: string;
  href: string;
  desc: string;
}

export interface FiveElement {
  key: string;
  name: string;
  oneliner: string;
  background: string;
  tools: string[];
  before: string;
  after: string;
}

export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface CurriculumBlock {
  block: string;
  title: string;
  desc: string;
}

export interface WeekPhase {
  phase: string;
  weeks: string;
  title: string;
  desc: string;
}

export interface KeynoteItem {
  id: string;
  title: string;
  desc: string;
}

export interface WorkshopProgram {
  id: 'workshop';
  name: string;
  tagline: string;
  duration: string;
  format: string;
  target: string;
  size: string;
  problems: string[];
  curriculum: CurriculumBlock[];
  outputs: string[];
}

export interface BootcampProgram {
  id: 'bootcamp';
  name: string;
  tagline: string;
  duration: string;
  format: string;
  target: string;
  size: string;
  weeks: WeekPhase[];
}

export interface KeynoteProgram {
  id: 'keynote';
  name: string;
  tagline: string;
  duration: string;
  format: string;
  target: string;
  size: string;
  keynotes: KeynoteItem[];
}

export interface Programs {
  workshop: WorkshopProgram;
  bootcamp: BootcampProgram;
  keynote: KeynoteProgram;
}

export interface CaseMetric {
  label: string;
  value: string;
}

export interface Case {
  id: string;
  industry: string;
  headline: string;
  metrics: CaseMetric[];
  summary: string;
}

export interface Insight {
  id: string;
  type: string;
  title: string;
  summary: string;
}

export interface CareerItem {
  year: string;
  desc: string;
}

export interface Founder {
  slug: string;
  name: string;
  role: string;
  philosophy: string;
  bio: string;
  career: CareerItem[];
  tags: string[];
}

export interface EngagementStep {
  step: string;
  title: string;
  desc: string;
}

export interface ContactType {
  value: string;
  label: string;
}

// ── SITE ─────────────────────────────────────────────────────

export const SITE: SiteConfig = {
  name: 'AX Teamship™',
  tagline: 'AI 시대, 살아남는 팀의 조건이 바뀌었다',
  domain: 'axteamship.com',
  email: 'hello@axteamship.com',
};

// ── NAV ──────────────────────────────────────────────────────

export const NAV: NavItem[] = [
  { label: '방법론', href: '/method' },
  { label: '프로그램', href: '/programs/workshop', hasSub: true },
  { label: '사례', href: '/cases' },
  { label: '회사 소개', href: '/about' },
];

// ── PROGRAM_SUBNAV ───────────────────────────────────────────

export const PROGRAM_SUBNAV: ProgramSubNavItem[] = [
  { label: '워크숍', href: '/programs/workshop', desc: '1·2일 오프라인 집중' },
  { label: '부트캠프', href: '/programs/bootcamp', desc: '4~8주 모듈형 전환' },
  { label: '키노트', href: '/programs/keynote', desc: '60~90분 강연·행사' },
];

// ── FIVE_ELEMENTS ────────────────────────────────────────────

export const FIVE_ELEMENTS: FiveElement[] = [
  {
    key: 'SAFETY',
    name: '심리적 안전',
    oneliner: '실패를 말해도 괜찮은 팀이 먼저 배운다',
    background:
      'AI 전환기에 팀원들이 새로운 시도를 회피하는 근본 원인은 심리적 안전의 부재다. 리더가 평가자처럼 느껴지는 순간 팀은 침묵을 선택한다.',
    tools: ['팀 취약성 매핑 세션', '실패 리뷰 루틴 설계', '비판 없는 아이디어 스프린트'],
    before: '아이디어 제안 월 1.2건',
    after: '+22pt 심리적 안전 지수',
  },
  {
    key: 'TRUST',
    name: '위임과 신뢰',
    oneliner: '동료의 판단을 믿고 맡길 때 팀이 빨라진다',
    background:
      '의사결정이 리더에게 집중될수록 팀의 실행 속도는 저하된다. 신뢰는 선언이 아니라 위임의 경험을 통해 축적된다.',
    tools: ['위임 매트릭스 설계', '책임 경계 명문화', '주간 신뢰 체크인'],
    before: '의사결정 평균 소요 4.2일',
    after: '+63% 의사결정 속도',
  },
  {
    key: 'ENERGY',
    name: '강점과 에너지',
    oneliner: '각자가 빛나는 순간을 알면 팀이 지속된다',
    background:
      '번아웃의 주요 원인은 업무량 과다가 아니라 강점 미활용이다. 자신의 강점을 모르는 팀원은 에너지를 비효율적으로 소비한다.',
    tools: ['강점 매핑 워크숍', '에너지 드레인 식별 도구', '역할 재설계 세션'],
    before: '번아웃 신고 월 3.1건',
    after: '+41% 팀 에너지 지수',
  },
  {
    key: 'GROWTH',
    name: '함께 배우는 시스템',
    oneliner: '함께 배우는 팀만이 AI 전환을 주도한다',
    background:
      '개인 학습은 한계가 있다. AI 전환기에는 팀 단위 학습 시스템이 조직의 적응 속도를 결정한다.',
    tools: ['팀 러닝 스프린트', '인사이트 공유 루틴', 'AI 도구 팀 실험 설계'],
    before: '학습 공유 없음, 개인별 파편화',
    after: '+38% 팀 역량 성장률',
  },
  {
    key: 'MOMENTUM',
    name: '결정과 실행의 가속',
    oneliner: '함께 결정하고 해내는 경험이 팀을 강하게 만든다',
    background:
      'OKR이 실패하는 이유는 목표 설정이 아니라 실행 문화의 부재다. 완료의 경험이 다음 실행을 가속한다.',
    tools: ['팀 OKR 설계 워크숍', '주간 실행 리뷰 루틴', '완료 의식 설계'],
    before: 'OKR 완수율 31%',
    after: '+31%p OKR 완수율',
  },
];

// ── STATS ────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: '+22pt', label: '심리적 안전 지수', context: '8주 워크숍 후 평균' },
  { value: '+63%', label: '의사결정 속도', context: '부트캠프 참여 팀 기준' },
  { value: '+31%p', label: 'OKR 완수율', context: '6개월 추적 데이터' },
];

// ── PROGRAMS ─────────────────────────────────────────────────

export const PROGRAMS: Programs = {
  workshop: {
    id: 'workshop',
    name: '워크숍',
    tagline: '팀십 근육을 만드는 가장 빠른 방법',
    duration: '1·2일',
    format: '오프라인 (온라인 옵션)',
    target: '팀장·임원·팀 단위',
    size: '12~30명',
    problems: [
      '심리적 안전이 없어 아이디어가 묻힌다',
      '의사결정이 한 사람에게 집중된다',
      '팀원의 강점을 모르고 일을 배분한다',
      '학습이 개인 단위에서 멈춰 있다',
      '약속을 해도 실행이 따라오지 않는다',
    ],
    curriculum: [
      {
        block: 'DIAGNOSE',
        title: '팀 현황 진단',
        desc: '5요소 진단 도구로 팀의 취약 지점을 확인한다',
      },
      {
        block: 'INTERVENE',
        title: '개입 실습',
        desc: '각 요소별 핵심 도구를 실제 팀 상황에 적용한다',
      },
      {
        block: 'DESIGN',
        title: '다음 사이클 설계',
        desc: '워크숍 이후 실행할 팀 루틴과 약속을 설계한다',
      },
      {
        block: 'COACH',
        title: '후속 코칭',
        desc: '2주 후 1회 팀 코칭으로 실행을 점검한다',
      },
    ],
    outputs: ['팀 취약점 진단 리포트', '요소별 개입 실행 계획서', '팀 약속 카드'],
  },

  bootcamp: {
    id: 'bootcamp',
    name: '부트캠프',
    tagline: '조직 전환을 설계하는 8주 여정',
    duration: '4~8주',
    format: '모듈형 (주 1회 세션)',
    target: '임원·팀장·HR 파트너',
    size: '20~40명',
    weeks: [
      {
        phase: 'DIAGNOSE',
        weeks: 'W1–2',
        title: '진단',
        desc: '조직 전체 5요소 진단 + 우선순위 설정',
      },
      {
        phase: 'INTERVENE',
        weeks: 'W3–6',
        title: '개입',
        desc: '요소별 집중 개입 세션 + 현업 적용 과제',
      },
      {
        phase: 'MEASURE',
        weeks: 'W7–8',
        title: '측정',
        desc: '변화 측정 + 다음 사이클 설계',
      },
    ],
  },

  keynote: {
    id: 'keynote',
    name: '키노트',
    tagline: 'AI 시대 팀십, 한 시간으로 바꾼다',
    duration: '60~90분',
    format: '강연·행사·컨퍼런스',
    target: '전 임직원·리더·학부모',
    size: '50~3,000명',
    keynotes: [
      {
        id: 'K1',
        title: 'AI 시대 팀의 조건',
        desc: '기술이 아니라 신뢰가 살아남는 팀을 만든다',
      },
      {
        id: 'K2',
        title: '리더의 위임',
        desc: '모든 것을 혼자 하는 리더가 팀을 망친다',
      },
      {
        id: 'K3',
        title: '조직 진화',
        desc: 'AX Teamship™ 5요소로 보는 조직 진화 로드맵',
      },
    ],
  },
};

// ── CASES ────────────────────────────────────────────────────

export const CASES: Case[] = [
  {
    id: 'case01',
    industry: '생명보험',
    headline: '의사결정 위기를 극복한 생명보험사',
    metrics: [
      { label: '의사결정 속도', value: '+63%' },
      { label: '심리적 안전 지수', value: '+18pt' },
      { label: '이탈률', value: '-40%' },
    ],
    summary:
      '신규 디지털 전환 프로젝트에서 팀장 중심의 의사결정 병목이 발생. 8주 부트캠프 후 팀 자율 의사결정 비율이 30%→81%로 개선.',
  },
  {
    id: 'case02',
    industry: '제조업',
    headline: '현장과 본사의 신뢰를 복구한 제조사',
    metrics: [
      { label: '신뢰 지수', value: '+22pt' },
      { label: '제안 건수', value: '+180%' },
      { label: '불량률', value: '-12%' },
    ],
    summary:
      '현장-본사 갈등으로 혁신 제안이 막히던 500인 제조사. 팀십 워크숍 후 현장 리더의 심리적 안전감 회복, 분기 제안 건수 3배 증가.',
  },
  {
    id: 'case03',
    industry: 'SaaS',
    headline: 'OKR 실행 문화를 만든 스타트업',
    metrics: [
      { label: 'OKR 완수율', value: '+31%p' },
      { label: '스프린트 속도', value: '+45%' },
      { label: '리텐션', value: '+28%p' },
    ],
    summary:
      'Series B 이후 성장통을 겪던 120인 SaaS 기업. 2일 워크숍 + 4주 팀 코칭으로 OKR 완수율 31%p 개선, 팀 리텐션 동반 상승.',
  },
];

// ── INSIGHTS ─────────────────────────────────────────────────

export const INSIGHTS: Insight[] = [
  {
    id: 'insight01',
    type: '관점',
    title: 'AI가 팀을 대체하는 게 아니라, 팀을 드러낸다',
    summary:
      'AI 도입 이후 성과 격차가 벌어지는 팀과 좁혀지는 팀 — 차이는 기술 숙련도가 아니라 협업 문화였다.',
  },
  {
    id: 'insight02',
    type: '프레임워크',
    title: '팀장이 모든 것을 결정할 때 생기는 일',
    summary:
      '위임의 경험 없이는 신뢰가 축적되지 않는다. 의사결정 위임의 단계적 설계가 팀 자율성을 만든다.',
  },
  {
    id: 'insight03',
    type: '필드노트',
    title: '부트캠프 8주 후, 팀에 실제로 무슨 일이 생겼나',
    summary:
      '측정값 너머 — 참여자 인터뷰와 관찰 데이터로 보는 팀 변화의 실체.',
  },
];

// ── FOUNDERS ─────────────────────────────────────────────────

export const FOUNDERS: Founder[] = [
  {
    slug: 'lee-so-young',
    name: '이소영',
    role: 'Co-Founder & Chief Teamship Officer',
    philosophy: '팀십은 조직 구조가 아니라 행동 습관이다.',
    bio: 'Microsoft Korea에서 21년간 AI Transformation Leader로 일하며 팀십의 언어를 현장에서 배웠다. 조직의 성과를 결정하는 것은 전략이 아니라 팀이 매일 만들어가는 습관임을 확인했다.',
    career: [
      { year: '2024~', desc: 'AX Teamship™ 창업 · Co-Founder' },
      { year: '2003~2024', desc: 'Microsoft Korea · AI Transformation Leader · 21년' },
      { year: '현재', desc: '세바시 강연자 · 두 아이 엄마' },
    ],
    tags: ['#AI전환', '#팀리더십', '#조직행동', '#PioneerMom'],
  },
  {
    slug: 'lee-sun-kyung',
    name: '이선경',
    role: 'Co-Founder & Head of Learning Design',
    philosophy: '배움이 일어나는 순간, 팀이 바뀐다.',
    bio: '기업 교육과 학습 설계 전문가. 이론이 현장에서 살아있는 도구가 되도록 AX Teamship™의 모든 커리큘럼을 설계했다.',
    career: [
      { year: '2024~', desc: 'AX Teamship™ 공동창업 · 커리큘럼 디렉터' },
      { year: '2015~2024', desc: '기업 교육 컨설팅 · 학습 설계 전문가 10년' },
    ],
    tags: ['#러닝디자인', '#기업교육', '#조직개발'],
  },
  {
    slug: 'founder-03',
    name: 'TBD',
    role: 'Co-Founder',
    philosophy: '준비 중',
    bio: '',
    career: [],
    tags: [],
  },
  {
    slug: 'founder-04',
    name: 'TBD',
    role: 'Co-Founder',
    philosophy: '준비 중',
    bio: '',
    career: [],
    tags: [],
  },
  {
    slug: 'founder-05',
    name: 'TBD',
    role: 'Co-Founder',
    philosophy: '준비 중',
    bio: '',
    career: [],
    tags: [],
  },
  {
    slug: 'founder-06',
    name: 'TBD',
    role: 'Co-Founder',
    philosophy: '준비 중',
    bio: '',
    career: [],
    tags: [],
  },
];

// ── ENGAGEMENT ───────────────────────────────────────────────

export const ENGAGEMENT: EngagementStep[] = [
  { step: '01', title: '상담', desc: '조직 현황과 목표를 파악하는 30분 무료 상담' },
  { step: '02', title: '진단', desc: '5요소 팀 진단으로 취약 지점을 데이터로 확인' },
  { step: '03', title: '설계', desc: '조직 맞춤 프로그램 커리큘럼과 일정 확정' },
  { step: '04', title: '실행', desc: '워크숍·부트캠프·키노트 중 적합한 형태로 진행' },
  {
    step: '05',
    title: '측정',
    desc: '8주 후 재진단으로 변화를 수치로 확인하고 다음 사이클 설계',
  },
];

// ── CONTACT_TYPES ────────────────────────────────────────────

export const CONTACT_TYPES: ContactType[] = [
  { value: 'workshop', label: '워크숍' },
  { value: 'bootcamp', label: '부트캠프' },
  { value: 'keynote', label: '키노트' },
  { value: 'consulting', label: '컨설팅·자문' },
  { value: 'other', label: '기타 문의' },
];
