import HeroSection from '@/components/home/HeroSection';
import WorksBanner from '@/components/home/WorksBanner';
import Whoiam from '@/components/home/Whoiam';
import PortfolioSection from '@/components/home/Projects';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorksBanner />
      <Whoiam />
      <PortfolioSection />
      <Footer />
    </div>
  );
}