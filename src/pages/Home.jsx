import { useEffect } from 'react';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';
import CounterSection from '../sections/CounterSection';
import HeroSection from '../sections/HeroSection';
import NewsSection from '../sections/NewsSection';
import NotNumbersSection from '../sections/NotNumbersSection';
import WorksSection from '../sections/WorksSection';

const Home = () => {
  useEffect(() => {
    document.title = 'MercyBridge | Home';
  }, []);

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <NewsSection />
      <CounterSection />
      <AboutSection />
      <WorksSection />
      <NotNumbersSection />
      <ContactSection />
    </main>
  );
};

export default Home;
