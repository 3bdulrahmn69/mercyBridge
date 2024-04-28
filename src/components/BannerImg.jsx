import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BannerImg({ img, id }) {
  return (
    <Link
      to={`/donate/${id}`}
      className="bg-white rounded-full md:w-28 w-20 md:h-28 h-20 mx-2 shrink-0 flex-none overflow-hidden p-4"
    >
      <img src={img} alt="logo" className="w-full h-full object-contain" />
    </Link>
  );
}

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BannerImg;
