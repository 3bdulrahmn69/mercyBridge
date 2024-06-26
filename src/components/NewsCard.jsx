import PropTypes from 'prop-types';
import Container from './Container';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NewsCard = ({ right, title, content, id, date, img }) => {
  const { t } = useTranslation();
  return (
    <article className="w-full bg-gray-100 flex items-center mb-2">
      <Container>
        <div
          className={`flex md:justify-between justify-center items-center ${
            right
              ? 'md:flex-row animate-FadeIn'
              : 'md:flex-row-reverse animate-FadeInRev'
          } flex-col py-2 md:px-2`}
        >
          <figure className="h-56 md:w-5/12 w-11/12">
            <img
              src={img[0]}
              alt="Latest News"
              className="w-full h-full rounded"
            />
          </figure>
          <div className="md:w-6/12 w-11/12 flex flex-col">
            <h2
              className="text-2xl font-bold mt-4 cursor-default"
              title={title}
            >
              {title.slice(0, 40) + '...'}
            </h2>
            <p className="text-gray-600 mt-2">
              {content.join(' ').slice(0, 120) + '...'}
            </p>
            <div
              className={`flex ${
                right ? '' : 'flex-row-reverse'
              } justify-between items-center mt-4`}
            >
              <p className="bg-green-200 text-black px-2 py-1">{date}</p>
              <Link
                to={`/news/${id}`}
                rel="noreferrer noopener"
                className={`bg-green-800 py-2 px-4 text-white block w-fit hover:bg-transparent hover:text-green-800 border-2 border-green-800 rounded-sm transition-colors duration-300`}
              >
                {t('read_more')}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
};

NewsCard.propTypes = {
  right: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  img: PropTypes.array,
};

NewsCard.defaultProps = {
  right: false,
};

export default NewsCard;
