import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const DonateBtn = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <Link to={'/donate'} className={className}>
      {children ? children : t('Donate_Now')}
    </Link>
  );
};

DonateBtn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DonateBtn.defaultProps = {
  children: null,
  className:
    'w-56 h-16 bg-green-500 flex justify-center items-center hover:bg-transparent uppercase rounded text-white hover:text-green-500 border-2 shadow-xl shadow-green-900/30 border-green-500 transition-all duration-300 ease-in-out',
};

export default DonateBtn;
