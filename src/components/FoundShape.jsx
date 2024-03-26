import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const FoundShape = ({ number, className }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <span className="bg-white rounded-full w-8 h-8 text-black mx-2 flex justify-center items-center font-bold">
        {number}
      </span>
      {t('donate.results')}
    </div>
  );
};

FoundShape.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
};

FoundShape.defaultProps = {
  className:
    'bg-red-500 rounded py-1 px-2 text-white flex items-center justify-self-end',
};

export default FoundShape;
