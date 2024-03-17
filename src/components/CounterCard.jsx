import PropTypes from 'prop-types';

function CounterCard({ count, title, description }) {
  return (
    <div className="w-72 h-96 border-green-500 border-2 rounded flex flex-col items-center px-8 py-4">
      <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center text-white text-5xl">
        <p>{count}</p>
      </div>
      <h3 className="text-2xl mt-2">{title}</h3>
      <hr className="w-9/12 my-4" />
      <div className="lg:text-base text-sm">
        <p>{description}</p>
      </div>
    </div>
  );
}

CounterCard.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CounterCard;
