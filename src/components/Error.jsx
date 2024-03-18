import PropTypes from 'prop-types';
import error from '../assets/error.svg';

const Error = ({ message }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col py-32">
      <h6 className="text-6xl text-center text-red-500">{message}</h6>
      <img src={error} alt="Error" className="w-96 h-96" />
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
