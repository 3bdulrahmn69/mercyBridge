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
  FaHospitalAlt,
  FaFemale,
  FaPencilAlt,
} from 'react-icons/fa';
import { FaGun, FaChild } from 'react-icons/fa6';

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

        <div className="flex md:justify-evenly justify-center md:items-baseline items-center md:flex-row flex-col">
          <div className="flex flex-col gap-2 items-center py-4 rounded-xl bg-gray-100 mb-4 md:w-80 w-72">
            <h2 className="text-2xl my-4">{t('By_Method')}</h2>
            <DonateMethod method="money" icon={<FaDollarSign />} />
            <DonateMethod method="medicine" icon={<FaPumpMedical />} />
            <DonateMethod method="food" icon={<FaHamburger />} />
            <DonateMethod method="clothes" icon={<FaTshirt />} />
          </div>
          <div className="flex flex-col gap-2 items-center py-4 rounded-xl bg-gray-100 mb-4 md:w-80 w-72">
            <h2 className="text-2xl my-4">{t('By_Donor')}</h2>
            <DonateMethod method="gaza" icon={<FaGun />} />
            <DonateMethod method="hospitals" icon={<FaHospitalAlt />} />
            <DonateMethod method="children" icon={<FaChild />} />
            <DonateMethod method="women" icon={<FaFemale />} />
          </div>
        </div>
        <div className="flex md:gap-0 gap-2 justify-center mb-4 md:flex-row flex-col-reverse md:items-baseline items-center">
          <div className="md:w-80 w-72 justify-center flex">
            <DonateMethod method="other" icon={<FaPencilAlt />} />
          </div>
          <div className="md:w-80 w-72 justify-center flex">
            <DonateMethod method="all" icon={<FaInfinity />} />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Donate;
