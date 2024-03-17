import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function DonateMethod({ method, icon }) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/donate/${method}`}
      className={`bg-gray-200 rounded md:w-72 w-64 flex gap-3 items-center justify-between py-2 px-4 ${
        i18next.language === 'ar' ? 'hover:mr-6' : 'hover:ml-6'
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-center md:text-3xl text-xl">
        <div className="bg-red-500 text-white px-2 py-1 rounded mx-2">
          {icon}
        </div>
        <p className="capitalize">{t(method)}</p>
      </div>
      <div className="bg-green-500 rounded-full text-white p-2">
        {i18next.language === 'ar' ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </Link>
  );
}

DonateMethod.propTypes = {
  method: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default DonateMethod;
