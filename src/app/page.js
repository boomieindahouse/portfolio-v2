import HeroSection from '@/components/home/HeroSection';
import WorksBanner from '@/components/home/WorksBanner';
import Whoiam from '@/components/home/Whoiam';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorksBanner />
      <Whoiam />
    </div>
  );
}