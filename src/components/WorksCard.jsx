import PropTypes from 'prop-types';
import i18next from 'i18next';

const WorksCard = ({ right, picture, title, description, date }) => {
  let rightImage = 'workImageRight';
  let leftImage = 'workImageLeft';

  if (i18next.language === 'ar') {
    rightImage = 'workImageLeft';
    leftImage = 'workImageRight';
  }

  if (right) {
    return (
      <div className="px-9 mb-7 flex md:justify-evenly justify-center items-center md:gap-36 gap-2 md:flex-row flex-col">
        <div className="bg-green-300 h-fit max-w-lg py-8 px-16 rounded relative">
          <h3 className="text-2xl mb-3">{title}</h3>
          <p>{description}</p>
          <p className="absolute -bottom-4 left-5 bg-red-500 text-white py-2 px-4 shadow-2xl rounded">
            {date}
          </p>
        </div>
        <figure className={`workImageBg ${leftImage} md:block hidden`}>
          <img src={picture} alt={title} />
        </figure>
      </div>
    );
  } else {
    return (
      <div className="px-9 mb-7 flex md:justify-evenly justify-center items-center  md:gap-36 gap-2 md:flex-row flex-col">
        <figure className={`workImageBg ${rightImage} md:block hidden`}>
          <img src={picture} alt={title} />
        </figure>
        <div className="bg-green-300 h-fit max-w-lg py-8 px-16 rounded relative">
          <h3 className="text-2xl mb-3">{title}</h3>
          <p>{description}</p>
          <p className="absolute -bottom-4 right-5 bg-red-500 text-white py-2 px-4 shadow-2xl rounded">
            {date}
          </p>
        </div>
      </div>
    );
  }
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
