import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import Alert from '../components/Alert';
import getCurrentLocation from '../components/utilities';

const OtherDonation = () => {
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
    <main className={'bg-red-400 h-screen py-4'}>
      {error && <Alert type="warning">{error}</Alert>}
      <Container className={'h-full'}>
        <form action="" className="w-full h-full justify-center  flex flex-col">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip" />
          <input type="text" placeholder="Country" />
          <input type="text" placeholder="Item" />
          <input type="text" placeholder="Quantity" />
          <input type="text" placeholder="Description" />
          <input type="submit" value="Submit Donation" />
        </form>
      </Container>
    </main>
  );
};

export default OtherDonation;
