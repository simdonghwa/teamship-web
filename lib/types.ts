export interface DiagnosisResult {
  mode: 'parent' | 'teen';
  scores: {
    autonomy: number;
    competence?: number;
    identity?: number;
    relation: number;
    resilience: number;
  };
  typeIndex: number;
  typeName: string;
  completedAt: Date;
  sessionId: string;
}

export interface ContactForm {
  type: 'corporate' | 'family' | 'speaker' | 'other';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  childGrade?: string;
  programId: string;
  message?: string;
  diagnosisResult?: string;
  source?: string;
  submittedAt: Date;
}

export interface Program {
  id: string;
  category: 'corporate' | 'family';
  title: string;
  duration: string;
  target: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
}

export interface FiveElement {
  key: 'SAFETY' | 'TRUST' | 'ENERGY' | 'GROWTH' | 'MOMENTUM';
  icon: string;
  corporate: string;
  family: string;
  education: string;
  question: string;
  tip: string;
}

export interface DiagnosisQuestion {
  id: number;
  text: string;
  category: string;
  reverse?: boolean;
}

export interface DiagnosisType {
  index: number;
  name: string;
  emoji: string;
  description: string;
  advice: string;
  cta: string;
  ctaHref: string;
}
