import PropTypes from 'prop-types';

function SectionHeader({ title, description, center }) {
  return (
    <>
      <h2 className="uppercase md:text-4xl text-3xl text-center py-3">
        {title}
      </h2>
      <p
        className={`text-gray-400 md:text-lg text-sm mb-8 px-2 ${
          center ? 'text-center' : ''
        }`}
      >
        {description}
      </p>
    </>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

SectionHeader.defaultProps = {
  center: false,
};

export default SectionHeader;
