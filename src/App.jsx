import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { ReactLenis } from '@studio-freight/react-lenis';
import Language from './components/Language';
import Header from './sections/Header';
import Home from './pages/Home';
import News from './pages/News';
import NewsProfile from './pages/NewsProfile';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import CharityProfile from './pages/CharityProfile';
import NotFound from './pages/NotFound';
import GoTopBtn from './components/GoTopBtn';
import Footer from './sections/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Help from './pages/Help';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </ReactLenis>
  );
};

const InnerApp = () => {
  const location = useLocation();

  const hideHeader =
    location.pathname.match(/\/news\/\d+$/) ||
    location.pathname.match(/\/donate\/\d+$/) ||
    location.pathname.match(/\/dashboard$/);

  const hideFooter = location.pathname.match(/\/dashboard$/);

  return (
    <>
      <ScrollToTop />
      {!hideHeader && <Language />}
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:id" element={<CharityProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GoTopBtn />
      {!hideFooter && <Footer />}
    </>
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
