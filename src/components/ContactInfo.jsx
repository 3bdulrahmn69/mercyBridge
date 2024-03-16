import { FaMapMarker } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="uppercase text-2xl mt-8">{t('Contact_Info')}</h3>
      <div className="flex flex-col gap-3 justify-start my-8 text-start md:px-8 px-2 text-lg text-gray-700">
        <p className="bg-green-300 py-2 px-4 rounded">
          <FaEnvelope className="inline-block mr-3" />
          support@mercybridge.org
        </p>
        <p className="bg-green-300 py-2 px-4 rounded">
          <FaEnvelope className="inline-block mr-3" />
          donate@mercybridge.org
        </p>
        <p className="bg-green-300 py-2 px-4 rounded">
          <FaPhoneAlt className="inline-block mr-3" />
          +2 010 1832 6780
        </p>
        <p className="bg-green-300 py-2 px-4 rounded">
          <FaMapMarker className="inline-block mr-3" />
          Egypt
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
