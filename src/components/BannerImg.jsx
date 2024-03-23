import PropTypes from 'prop-types';

function BannerImg({ img }) {
  return (
    <div className="bg-white rounded-full md:w-28 w-20 md:h-28 h-20 mx-2 shrink-0 flex-none overflow-hidden p-4">
      <img src={img} alt="logo" className="w-full h-full object-contain" />
    </div>
  );
}

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default BannerImg;
