import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const NoSomethingFound = ({ location }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-96 flex justify-center items-center flex-col">
      <h1 className="md:text-4xl text-3xl font-bold uppercase">
        {t('donate.Sorry')},
        <span role="img" aria-label="sad face" className="md:text-5xl text-4xl">
          😞
        </span>
      </h1>
      <h2 className="md:text-3xl text-xl text-gray-800">
        {t(`donate.message`)}
        <span className="font-bold">{location && ` ${location}`}</span>
      </h2>
    </div>
  );
};

NoSomethingFound.propTypes = {
  location: PropTypes.string,
};

export default NoSomethingFound;
