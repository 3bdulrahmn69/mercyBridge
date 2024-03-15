import CounterCard from '../components/CounterCard';
import DonateBtn from '../components/DonateBtn';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';
import Container from '../components/Container';

const CounterSection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full pb-5">
      <Container className="flex flex-col">
        <SectionHeader
          title={t('Counter_Title')}
          description={t('Counter_Description')}
        />
        <div className="flex md:flex-row md:gap-8 flex-col gap-4 justify-center items-center">
          <CounterCard
            count={5}
            title={t('Charity')}
            description={t('Counter_Charity_Description')}
          />
          <CounterCard
            count={15}
            title={t('Governorate')}
            description={t('Counter_Governorate_Description')}
          />
          <CounterCard
            count={150}
            title={t('Donors')}
            description={t('Counter_Donors_Description')}
          />
        </div>
        <div className="w-full min-h-24 flex justify-between items-center md:gap-0 gap-3 md:flex-row flex-col md:mb-0 my-7 md:px-0 px-2">
          <p className="text-xl">{t('Counter_take_action')}</p>
          <DonateBtn />
        </div>
      </Container>
    </section>
  );
};

export default CounterSection;
