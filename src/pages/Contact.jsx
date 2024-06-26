import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  useEffect(() => {
    document.title = 'MercyBridge | Contact';
  }, []);

  const { t } = useTranslation();
  return (
    <main>
      <Container>
        <div className="animate-slideDown">
          <SectionHeader
            title={t('Contact')}
            description={t('Contact_Description')}
            center={true}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-stretch items-center">
          <div className="md:w-2/6 w-11/12 bg-gray-100 rounded text-black text-center animate-FadeIn">
            <ContactInfo />
          </div>
          <div className="md:w-3/6 w-11/12 my-6 animate-FadeInRev">
            <h3 className="uppercase text-2xl mb-5">{t('send_us_message')}</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
