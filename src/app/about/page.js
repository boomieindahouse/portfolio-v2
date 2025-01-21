import AboutTitle from '../../components/about/AboutTitle';
import ImgBanner from '../../components/about/ImgBanner';
import Introduce from '@/components/about/Introduce';
import Skills from '@/components/about/Skills';
import Footer from '@/components/layout/Footer';
import HobbiesSection from '@/components/about/Hobby';

export default function Home() {
  return (
    <div>
      <AboutTitle />
      <ImgBanner />
      <Introduce />
      <Skills />
      <HobbiesSection />
      <Footer />
    </div>
  );
}