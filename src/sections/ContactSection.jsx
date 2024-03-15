import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import SectionEndLink from '../components/SectionEndLink';
import Container from '../components/Container';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full pb-5" id="contact">
      <Container>
        <SectionHeader
          title={t('Contact')}
          description={t('Contact_Description')}
          center={true}
        />
        <div className="flex md:flex-row flex-col justify-between md:items-stretch items-center">
          <div className="md:w-2/6 w-11/12 bg-gray-100 rounded text-black text-center">
            <ContactInfo />
          </div>
          <div className="md:w-3/6 w-11/12 my-6">
            <h3 className="uppercase text-2xl mb-5">{t('send_us_message')}</h3>
            <ContactForm />
          </div>
        </div>
      </Container>
      <SectionEndLink
        link="/contact"
        title={'Contact Us'}
        colors={{ bg: 'bg-red-500', text: 'text-white' }}
      />
    </section>
  );
};

export default ContactSection;
