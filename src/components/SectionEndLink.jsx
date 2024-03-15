import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const SectionEndLink = ({ isHome, link, title, colors }) => {
  return (
    <div className="flex justify-center">
      {isHome ? (
        <Link
          to={link}
          className={`${colors.bg} ${colors.text} text-lg px-4 py-2 rounded-md flex items-center gap-1 hover:gap-4 transition-all duration-300`}
        >
          {title}{' '}
          {i18next.language === 'ar' ? (
            <FaArrowLeft className="mr-2" />
          ) : (
            <FaArrowRight className="ml-2" />
          )}
        </Link>
      ) : (
        <Link
          to={link}
          className={`text-lg px-4 py-2 rounded-md ${colors.bg} ${colors.text} flex items-center gap-1 hover:gap-4 transition-all duration-300`}
        >
          {i18next.language === 'ar' ? (
            <>
              {title}
              <FaArrowLeft className="mr-2" />
            </>
          ) : (
            <>
              <FaArrowLeft className="mr-2" />
              {title}
            </>
          )}{' '}
        </Link>
      )}
    </div>
  );
};

SectionEndLink.propTypes = {
  link: PropTypes.string.isRequired,
  isHome: PropTypes.bool,
  title: PropTypes.string,
  colors: PropTypes.shape({
    bg: PropTypes.string,
    text: PropTypes.string,
  }),
};

SectionEndLink.defaultProps = {
  isHome: true,
  title: 'View More',
  colors: {
    bg: 'bg-blue-500',
    text: 'text-white',
  },
};

export default SectionEndLink;
