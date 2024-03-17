import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { ReactLenis } from '@studio-freight/react-lenis';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Language from './components/Language';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';
import GoTopBtn from './components/GoTopBtn';
import Footer from './components/Footer';
import MoneyDonation from './pages/MoneyDonation';
import MedicineDonation from './pages/MedicineDonation';
import FoodDonation from './pages/FoodDonation';
import ClothesDonation from './pages/ClothesDonation';
import OtherDonation from './pages/OtherDonation';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Help from './pages/Help';
import AllDonation from './pages/AllDonation';
import GazaDonation from './pages/GazaDonation';
import WomenDonation from './pages/WomenDonation';
import ChildrenDonation from './pages/ChildrenDonation';
import HospitalsDonation from './pages/HospitalsDonation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <Language />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/money" element={<MoneyDonation />} />
          <Route path="/donate/medicine" element={<MedicineDonation />} />
          <Route path="/donate/food" element={<FoodDonation />} />
          <Route path="/donate/clothes" element={<ClothesDonation />} />
          <Route path="/donate/gaza" element={<GazaDonation />} />
          <Route path="/donate/hospitals" element={<HospitalsDonation />} />
          <Route path="/donate/children" element={<ChildrenDonation />} />
          <Route path="/donate/women" element={<WomenDonation />} />
          <Route path="/donate/all" element={<AllDonation />} />
          <Route path="/donate/other" element={<OtherDonation />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        <GoTopBtn />
        <Footer />
      </BrowserRouter>
    </ReactLenis>
  );
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'subdomain'],
      lookupFromPathIndex: 0,
      caches: ['cookie'],
      checkWhitelist: true,
    },
    backend: {
      loadPath: '/languages/{{lng}}/translation.json',
    },
    whitelist: ['en', 'ar'],
    nonExplicitWhitelist: true,
  });

export default App;
