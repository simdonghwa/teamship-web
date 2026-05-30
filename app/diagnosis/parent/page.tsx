import type { Metadata } from 'next';
import DiagnosisClient from '@/components/diagnosis/DiagnosisClient';
import parentData from '@/content/diagnosis-parent.json';

export const metadata: Metadata = {
  title: '부모 자기결정력 진단',
  description: '18문항으로 알아보는 부모 자기결정력 진단. 아이를 대하는 내 방식을 점검합니다.',
};

export default function ParentDiagnosisPage() {
  return <DiagnosisClient data={parentData} mode="parent" accentColor="var(--rust)" accentBg="var(--rust-l)" />;
}
