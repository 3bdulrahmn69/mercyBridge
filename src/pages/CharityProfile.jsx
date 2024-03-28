import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLenis } from '@studio-freight/react-lenis';
import Container from '../components/Container';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ImageModal from '../components/ImageModal';
import { getCharityById } from '../components/utilities';
import { LiaAngleLeftSolid, LiaExternalLinkAltSolid } from 'react-icons/lia';

const CharityProfile = () => {
  const { t } = useTranslation();
  const lang = i18next.language;
  const { id } = useParams();
  const [charity, setCharity] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    async function fetchCharity() {
      setIsLoading(true);
      try {
        const response = await getCharityById(id, lang);
        setCharity(response.charity);
        setSelectedLocation(response.charity.location[0]);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching charity.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharity();
  }, [id, lang]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const handleImageClick = (idx) => {
    setShowModal(true);
    setImgIndex(idx);
    lenis.scrollTo(0);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <main
      className={`w-full min-h-screen ${
        showModal ? 'overflow-hidden h-screen' : 'overflow-y-auto mb-8'
      }`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {showModal && (
        <ImageModal
          img={charity.snapshots}
          setShowModal={setShowModal}
          imgIndex={imgIndex}
        />
      )}
      <figure className="w-full h-60 mb-16 relative">
        <img
          src={charity.banner}
          alt={charity.name}
          className="w-full h-full"
        />
        <div className="w-full h-full pb-5 bg-black/20 absolute top-0 hover:bg-black/40 duration-300"></div>
        <Container>
          <div className="flex items-center gap-4 absolute -bottom-1/4">
            <figure className="w-40 h-40 p-4 bg-white rounded-full border-4 border-green-500 overflow-hidden">
              <img
                src={charity.logo}
                alt={charity.name}
                className="w-full h-full object-contain"
              />
            </figure>
            <h1 className="bg-green-500 text-white text-4xl rounded-md h-fit py-2 px-6 font-bold">
              {charity.name}
            </h1>
          </div>
          <a
            href={charity.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit charity website"
            className="absolute top-4 right-4 bg-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300"
          >
            <LiaExternalLinkAltSolid />
          </a>
        </Container>
        <Link
          to="/donate"
          className="absolute top-4 left-4 bg-white px-4 py-2 rounded-md hover:bg-green-600 hover:text-white duration-300 text-2xl"
          title="Back to news page"
        >
          <LiaAngleLeftSolid />
        </Link>
      </figure>
      <div className="lg:px-0 px-4">
        <section className="flex md:flex-row flex-col-reverse justify-evenly mb-8">
          <aside className="bg-green-500 text-white md:w-2/12 w-full md:mt-0 mt-4 px-8 py-4 rounded-lg h-fit max-h-80">
            <h2 className="font-bold text-3xl text-center mb-4">
              {t('states')}
            </h2>
            <ul className="text-xl">
              {charity.location.map((location) => (
                <li
                  key={location.states}
                  className={`mb-2 hover:underline cursor-pointer ${
                    location === selectedLocation
                      ? 'bg-white w-fit px-2 py-1 text-green-500 rounded duration-300'
                      : ''
                  }`}
                  onClick={() => handleLocationClick(location)}
                >
                  {location.states}
                </li>
              ))}
            </ul>
          </aside>
          <section className="md:w-8/12 w-full">
            <article>
              <h2 className="font-bold text-3xl mb-4">
                {t('donate.description')}
              </h2>
              <p className="text-xl">{charity.description}</p>
            </article>
            <hr className="w-full my-8 border-4 rounded-lg" />
            <article className="bg-green-500 rounded text-white px-4 py-2">
              <h2 className="font-bold text-3xl mb-4">
                {t('donate.locationIn')} {selectedLocation.states}
              </h2>
              <p className="text-xl">
                {t('donate.phone')}: {selectedLocation.phone}
              </p>
              <p className="text-xl">
                {t('donate.address')}: {selectedLocation.address}
              </p>
            </article>
          </section>
        </section>
        <section>
          <Container>
            <article>
              <h2 className="font-bold text-3xl mb-4">
                {t('donate.donationMethods')}
              </h2>
              {charity.donationDetails.map((donationDetail) => (
                <div key={donationDetail.method} className="mb-4">
                  <h3 className="text-2xl font-bold uppercase bg-green-500 text-white px-4">
                    {donationDetail.method}:
                  </h3>
                  {Object.entries(donationDetail.ways).map(([way, value]) => {
                    const isOnlineMethod =
                      way === 'Online' && value.startsWith('http');
                    return (
                      <p key={way} className="text-xl mx-8">
                        <span className="font-bold">{way}</span>:
                        {isOnlineMethod ? (
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                          >
                            click here
                          </a>
                        ) : (
                          ` ${value}`
                        )}
                      </p>
                    );
                  })}
                </div>
              ))}
            </article>
            <article>
              <h2 className="font-bold text-3xl mb-4">
                {t('newsProfile.snapshots')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {charity.snapshots &&
                  charity.snapshots.map((snapshot, idx) => (
                    <figure key={idx} className="w-full h-96 relative">
                      <img
                        src={snapshot}
                        alt={charity.name}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer rounded"
                        onClick={() => handleImageClick(idx)}
                      />
                    </figure>
                  ))}
                {!charity.snapshots && (
                  <div className="text-2xl text-center text-red-500 font-bold">
                    {t('newsProfile.noSnapshots')}
                  </div>
                )}
              </div>
            </article>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default CharityProfile;
