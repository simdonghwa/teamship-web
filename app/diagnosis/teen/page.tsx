import type { Metadata } from 'next';
import DiagnosisClient from '@/components/diagnosis/DiagnosisClient';
import teenData from '@/content/diagnosis-teen.json';

export const metadata: Metadata = {
  title: '청소년 자기결정력 진단',
  description: '16문항으로 알아보는 청소년 자기결정력 진단. 나는 나의 선택을 믿는가.',
};

export default function TeenDiagnosisPage() {
  return <DiagnosisClient data={teenData} mode="teen" accentColor="var(--teal)" accentBg="var(--teal-l)" />;
}
