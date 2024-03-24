import i18next from 'i18next';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Container from '../components/Container';
import ImageModal from '../components/ImageModal';
import { getNewsById } from '../components/utilities';
import {
  LiaAngleLeftSolid,
  LiaArrowLeftSolid,
  LiaArrowRightSolid,
} from 'react-icons/lia';

const NewsProfile = () => {
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNext, setIsNext] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const lang = i18next.language;
  const { id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      try {
        const response = await getNewsById(id, lang);
        setNews(response);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching news.');
      } finally {
        setIsLoading(false);
      }
    }

    async function checkNext() {
      try {
        const nextNewsId = (parseInt(id) + 1).toString();
        const response = await getNewsById(nextNewsId, lang);
        setIsNext(response !== null);
      } catch (error) {
        setIsNext(false);
      }
    }

    fetchNews();
    checkNext();
  }, [id, lang]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const handleImageClick = (idx) => {
    setShowModal(true);
    setImgIndex(idx);
    lenis.scrollTo(0);
  };

  return (
    <main className={`pb-4 ${showModal ? 'overflow-hidden h-screen' : ''}`}>
      {showModal && (
        <ImageModal
          img={news.img}
          imgIndex={imgIndex}
          setShowModal={setShowModal}
        />
      )}
      <figure className="w-full h-60 relative mb-8">
        <img
          src={news.img[0]}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black/20 top-0 hover:bg-black/40 duration-300"></div>
        <Link
          to="/news"
          className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300 text-2xl"
          title="Back to news page"
        >
          <LiaAngleLeftSolid />
        </Link>
        <h1 className="absolute md:-bottom-6 bottom-0 md:left-40 left-0 bg-white md:border-4 border-0 border-green-500 py-2 px-4 font-bold md:rounded-md rounded-none md:text-2xl text-base uppercase">
          {news.title}
        </h1>
      </figure>
      <Container>
        <article>
          <p className="font-medium leading-7 lg:px-0 px-2">{news.content}</p>
        </article>
        <article className="md:px-0 px-2 mt-4">
          <h2 className="font-bold text-3xl mb-4">
            {i18next.t('newsProfile.snapshots')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.img.map((img, index) => (
              <figure key={index} className="w-full h-96 relative">
                <img
                  src={img}
                  alt={news.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer rounded"
                  onClick={() => handleImageClick(index)}
                />
              </figure>
            ))}
          </div>
          <p className="flex justify-end mt-4 md:mb-20 mb-10">{news.date}</p>
        </article>
        <div className="flex md:justify-between justify-center gap-5" dir="ltr">
          <Link
            to={`/news/${parseInt(id) === 1 ? 1 : parseInt(id) - 1}`}
            className={`bg-green-700 text-white rounded-md w-28 h-fit py-2 flex justify-end px-4 items-center gap-1 hover:bg-green-600 duration-300 hover:gap-3 ${
              parseInt(id) === 1 ? 'invisible' : ''
            }`}
            title="Previous news"
          >
            <LiaArrowLeftSolid className="font-black" />
            {i18next.t('newsProfile.back')}
          </Link>
          <Link
            to={`/news/${isNext ? parseInt(id) + 1 : parseInt(id)}`}
            className={`bg-green-700 text-white rounded-md w-28 h-fit py-2 flex justify-start px-4 items-center gap-1 hover:bg-green-600 duration-300 hover:gap-3 ${
              !isNext ? 'invisible' : ''
            }`}
            title="Next news"
          >
            {i18next.t('newsProfile.next')}{' '}
            <LiaArrowRightSolid className="font-black" />
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default NewsProfile;
