import SectionHeader from '../components/SectionHeader';
import DonateBtn from '../components/DonateBtn';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import not_01 from '../assets/not_01.jpg';
import not_02 from '../assets/not_02.jpg';
import not_03 from '../assets/not_03.jpg';
import not_04 from '../assets/not_04.jpg';
import not_05 from '../assets/not_05.jpg';
import not_06 from '../assets/not_06.jpg';
import not_07 from '../assets/not_07.jpg';
import not_08 from '../assets/not_08.jpg';
import not_09 from '../assets/not_09.jpg';
import not_10 from '../assets/not_10.jpg';

const NotSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-5 bg-green-50">
      <Container className="px-2">
        <SectionHeader
          title={t('notNumber_title')}
          description={t('notNumber_disc')}
          center={true}
        />
      </Container>
      <div className="flex flex-col gap-4 px-4 md:flex-row md:gap-6">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:gap-4">
          <div className="w-full md:w-1/2">
            <img src={not_01} alt="Not Numbers 01" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src={not_02} alt="Not Numbers 02" className="w-full h-auto" />
            <img src={not_03} alt="Not Numbers 03" className="w-full h-auto" />
            <img src={not_04} alt="Not Numbers 04" className="w-full h-auto" />
            <img src={not_05} alt="Not Numbers 05" className="w-full h-auto" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row md:gap-4">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img src={not_06} alt="Not Numbers 06" className="w-full h-auto" />
            <img src={not_07} alt="Not Numbers 07" className="w-full h-auto" />
            <img src={not_08} alt="Not Numbers 08" className="w-full h-auto" />
            <img src={not_09} alt="Not Numbers 09" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <img src={not_10} alt="Not Numbers 10" className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="container min-h-24 flex justify-between items-center md:gap-0 gap-3 md:flex-row flex-col md:mb-0 my-7 px-2">
        <p className="text-xl">{t('notNumber_take_action')}</p>
        <DonateBtn />
      </div>
    </section>
  );
};

export default NotSection;
