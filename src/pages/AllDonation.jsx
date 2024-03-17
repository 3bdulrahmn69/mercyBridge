import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Alert from '../components/Alert';
import getCurrentLocation from '../components/utilities';
import SectionHeader from '../components/SectionHeader';
import StateSelector from '../components/StateSelector';
import Container from '../components/Container';

const AllDonation = () => {
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

  const location = sessionStorage.getItem('currentLocationState');

  return (
    <main className="min-h-screen">
      {error && <Alert type="warning">{error}</Alert>}
      <SectionHeader title={t('Donate_Money')} />
      <Container>
        <div className="flex justify-end">
          <StateSelector location={location} />
        </div>
      </Container>
    </main>
  );
};

export default AllDonation;
