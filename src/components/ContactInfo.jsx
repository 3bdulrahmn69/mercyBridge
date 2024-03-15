import { FaMapMarker } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="uppercase text-2xl mt-8">{t('Contact_Info')}</h3>
      <div className="flex flex-col gap-3 justify-start my-8 text-start px-8 text-lg">
        <p>
          <FaEnvelope className="inline-block mr-3" />
          support@mercybridge.org
        </p>
        <p>
          <FaPhoneAlt className="inline-block mr-3" />
          +1 555 1234
        </p>
        <p>
          <FaMapMarker className="inline-block mr-3" />
          Springfield, IL 62701
        </p>
        <p>
          <FaMapMarker className="inline-block mr-3" />
          1234 Street Name
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
