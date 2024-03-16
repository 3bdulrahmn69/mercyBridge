import PropTypes from 'prop-types';

function SectionEndHint({ Hint }) {
  return <p className="text-gray-400 md:text-lg text-xs">{Hint}</p>;
}

SectionEndHint.propTypes = {
  Hint: PropTypes.string,
};

export default SectionEndHint;
