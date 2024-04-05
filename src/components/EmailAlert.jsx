import PropTypes from 'prop-types';

const EmailAlert = ({ Message }) => {
  return (
    <div className="fixed z-50 top-36 border-4 border-green-500 shadow-lg md:right-2 right-0 bg-white rounded-l-full after:top-0 after:absolute after:right-0 after:bg-green-500 after:h-full after:w-2 animate-FadeInRev">
      <p className="text-green-500 py-4 px-8">{Message}</p>
    </div>
  );
};

EmailAlert.propTypes = {
  Message: PropTypes.string.isRequired,
};

export default EmailAlert;
