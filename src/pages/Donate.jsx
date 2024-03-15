import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import DonateMethod from '../components/DonateMethod';
import SectionHeader from '../components/SectionHeader';
import Alert from '../components/Alert';
import getCurrentLocation from '../components/utilities';
import {
  FaDollarSign,
  FaPumpMedical,
  FaHamburger,
  FaTshirt,
  FaInfinity,
} from 'react-icons/fa';

const Donate = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const fetchLocation = async () => {
      const { error, data } = await getCurrentLocation();
      if (error) {
        setError(error);
      } else {
        console.log('Location data:', data);
      }
    };

    fetchLocation();
  }, []);

  return (
    <main>
      {error && <Alert type="warning">{error}</Alert>}
      <Container>
        <SectionHeader
          title={t('Donate_BTN')}
          description={t('donate_desc')}
          center={true}
        />
        <div className="flex flex-col gap-2 items-center py-4 mb-4">
          <DonateMethod method="money" icon={<FaDollarSign />} />
          <DonateMethod method="medicine" icon={<FaPumpMedical />} />
          <DonateMethod method="food" icon={<FaHamburger />} />
          <DonateMethod method="clothes" icon={<FaTshirt />} />
          <DonateMethod method="other" icon={<FaInfinity />} />
        </div>
      </Container>
    </main>
  );
};

export default Donate;
