import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CounterCard from '../components/CounterCard';
import DonateBtn from '../components/DonateBtn';
import { getStates, getCharities } from '../components/utilities';

const CounterSection = () => {
  const { t } = useTranslation();
  const [governorate, setGovernorate] = useState(0);
  const [charities, setCharities] = useState(0);

  useEffect(() => {
    async function fetchStates() {
      try {
        const response = await getStates();
        setGovernorate(response.length);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    }

    async function fetchCharities() {
      try {
        const response = await getCharities();
        setCharities(response.charities.length);
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    }

    fetchCharities();
    fetchStates();
  }, []);

  return (
    <section className="w-full pb-5">
      <Container className="flex flex-col">
        <SectionHeader
          title={t('Counter_Title')}
          description={t('Counter_Description')}
        />
        <div className="flex md:flex-row md:gap-8 flex-col gap-4 justify-center items-center px-0 md:px-2 lg:px-0">
          <CounterCard
            count={charities}
            title={t('Charity')}
            description={t('Counter_Charity_Description')}
          />
          <CounterCard
            count={governorate}
            title={t('Governorate')}
            description={t('Counter_Governorate_Description')}
          />
          <CounterCard
            count={150}
            title={t('Donors')}
            description={t('Counter_Donors_Description')}
          />
        </div>
        <div className="w-full min-h-24 flex justify-between items-center md:gap-0 gap-3 md:flex-row flex-col md:mb-0 my-7 lg:px-0 px-2">
          <p className="text-xl">{t('Counter_take_action')}</p>
          <DonateBtn />
        </div>
      </Container>
    </section>
  );
};

export default CounterSection;
