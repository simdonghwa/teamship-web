import Hero from '@/components/home/Hero';
import ElementsScroller from '@/components/home/ElementsScroller';
import ProgramsBoard from '@/components/home/ProgramsBoard';
import CasesPreview from '@/components/home/CasesPreview';
import EngagementProcess from '@/components/home/EngagementProcess';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ElementsScroller />
      <ProgramsBoard />
      <CasesPreview />
      <EngagementProcess />
    </>
  );
}
