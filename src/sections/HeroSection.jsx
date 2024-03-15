import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import DonateBtn from '../components/DonateBtn';
import Hero from '../assets/Hero.jpg';
import Banner from '../components/Banner';

const HeroSection = () => {
  const { t } = useTranslation();
  let right = 'heroCollection-right-en';
  let mid = 'heroCollection-mid-en';
  let left = 'heroCollection-left-en';

  if (i18next.language === 'ar') {
    right = 'heroCollection-right-ar';
    mid = 'heroCollection-mid-ar';
    left = 'heroCollection-left-ar';
  }

  return (
    <section className="min-h-screen w-full">
      <div className="h-screen flex relative">
        <div className="md:w-4/6 w-full h-full bg-slate-700 flex justify-center pt-40">
          <div className="md:w-3/6 w-5/6 flex flex-col md:items-start items-center">
            <div className="shadow-md py-2 px-4 rounded mb-8 bg-white/20 text-white">
              <h1 className="text-4xl">{t('hero_title')}</h1>
              <p className="text-xl">{t('hero_subtitle')}</p>
            </div>
            <DonateBtn>{t('Donate_Now')}</DonateBtn>
          </div>
        </div>
        <div className="md:w-2/6 w-0 h-full bg-green-300 heroCollection">
          <div className={right}>
            <img src={Hero} alt="some" className="w-full h-auto rounded" />
          </div>
          <div className={mid}>
            <img src={Hero} alt="some" className="w-full h-auto rounded" />
          </div>
          <div className={left}>
            <img src={Hero} alt="some" className="w-full h-auto rounded" />
          </div>
        </div>
        <Banner />
      </div>
    </section>
  );
};

export default HeroSection;
