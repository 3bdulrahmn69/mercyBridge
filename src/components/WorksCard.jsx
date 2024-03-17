import PropTypes from 'prop-types';
import i18next from 'i18next';

const WorksCard = ({ right, picture, title, description, date }) => {
  const getImageAlignmentClass = (isRightAligned) => {
    const isRtl = i18next.language === 'ar';
    if (isRightAligned) {
      return isRtl ? 'workImageLeft' : 'workImageRight';
    } else {
      return isRtl ? 'workImageRight' : 'workImageLeft';
    }
  };

  const Content = () => (
    <div className="bg-green-300 h-fit lg:max-w-lg max-w-lg md:max-w-60 lg:py-8 lg:px-16 md:px-8 md:py-4 py-8 px-16  rounded relative">
      <h3 className="md:text-2xl text-lg mb-3 bg-white w-fit px-1 py-0.5 md:px-4 md:py-2 rounded text-green-500 break-keep">
        {title}
      </h3>
      <p>{description}</p>
      <p
        className={`absolute lg:-bottom-4 md:-bottom-6 -bottom-4 ${
          right ? 'right-5' : 'left-5'
        } bg-red-500 text-white py-2 px-4 shadow-2xl rounded`}
      >
        {date}
      </p>
    </div>
  );

  return (
    <div className="px-9 mb-7 flex md:justify-evenly justify-center items-center md:gap-36 gap-2 md:flex-row flex-col">
      {right && <Content />}
      <figure
        className={`workImageBg ${getImageAlignmentClass(
          !right
        )} md:block hidden`}
      >
        <img src={picture} alt={title} />
      </figure>
      {!right && <Content />}
    </div>
  );
};

WorksCard.propTypes = {
  right: PropTypes.bool,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

WorksCard.defaultProps = {
  right: false,
};

export default WorksCard;
