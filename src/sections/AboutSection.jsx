import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';
import about from '../assets/about.svg';
import SectionEndLink from '../components/SectionEndLink';
import Container from '../components/Container';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full pb-5" id="about">
      <Container>
        <SectionHeader
          title={t('About')}
          description={t('About_disc')}
          center={true}
        />
        <div>
          <div className="mb-4 md:px-0 px-2">
            <h4 className="text-3xl font-bold text-gray-500">
              {t('Who_We_Are')}
            </h4>
            <p className="text-gray-400 mt-4">{t('Who_We_Are_disc')}</p>
          </div>
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <figure className="w-full md:w-6/12">
                <img src={about} alt="about" className="rounded-lg shadow-lg" />
              </figure>
              <div className="w-full md:w-5/12 mt-8 md:mt-0 md:px-0 px-2">
                <h4 className="text-2xl font-bold text-gray-500">
                  {t('Our_mission')}
                </h4>
                <p className="text-gray-400 mt-4">{t('Our_mission_disc')}</p>
                <h4 className="text-2xl font-bold text-gray-500 mt-8">
                  {t('Our_vision')}
                </h4>
                <p className="text-gray-400 mt-4">{t('Our_vision_disc')}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="pt-8">
        <SectionEndLink
          link="/about"
          colors={{ bg: 'bg-transparent', text: 'text-green-500' }}
        />
      </div>
      <div className="w-full h-20 bg-gray-200 mt-9">
        <Container className={'flex justify-center items-center h-full'}>
          <p className="text-gray-400">{t('about_end')}</p>
        </Container>
      </div>
    </section>
  );
};

export default AboutSection;
