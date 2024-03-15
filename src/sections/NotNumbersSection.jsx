import image from '../assets/600x600.png';
import SectionHeader from '../components/SectionHeader';
import DonateBtn from '../components/DonateBtn';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';

const NotSection = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-5 bg-green-50">
      <Container className={'px-2'}>
        <SectionHeader
          title="They are Humans"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tincidunt, nisl non fringilla dictum, justo mi fermentum metus, nec
          aliquet justo odio sit amet ligula. Sed nec purus non massa
          condimentum lacinia. Integer et ipsum sed nulla tincidunt suscipit.
          Donec in nunc nec arcu tincidunt sodales. Sed nec purus non massa
          condimentum lacinia. Integer et ipsum sed nulla tincidunt suscipit.
          Donec in nunc nec arcu tincidunt sodales."
        />
      </Container>
      <div className="flex flex-col gap-1 px-4">
        <div className="flex gap-1">
          <div className="w-3/6">
            <img
              src={image}
              alt="Not Numbers"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="w-3/6 grid grid-cols-2 gap-1">
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-3/6 grid grid-cols-2 gap-1">
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
            <img src={image} alt="Not Numbers" />
          </div>
          <div className="w-3/6">
            <img
              src={image}
              alt="Not Numbers"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
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
