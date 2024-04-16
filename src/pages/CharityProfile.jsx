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
      <figure className="w-full h-60 mb-16 relative animate-FadeIn" dir="ltr">
        <img
          src={charity.banner}
          alt={charity.name}
          className="w-full h-full object-cover"
        />
        <div className="w-full h-full pb-5 bg-black/30 absolute top-0 hover:bg-black/50 duration-300 flex justify-between items-center p-4">
          <Link
            to="/donate"
            className="inline-block bg-white/80 hover:bg-green-600 hover:text-white text-green-600 font-bold py-2 px-4 rounded-lg shadow transition-colors duration-300"
            title="Back to news page"
          >
            <LiaAngleLeftSolid className="text-2xl" />
          </Link>
          <a
            href={charity.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit charity website"
            className="inline-block bg-white/80 hover:bg-green-600 hover:text-white text-green-600 font-bold py-2 px-4 rounded-lg shadow transition-colors duration-300"
          >
            <LiaExternalLinkAltSolid className="text-2xl" />
          </a>
        </div>
      </figure>
      <div className="animate-slideUp">
        <Container>
          <div className="flex items-center gap-4 -mb-11 transform -translate-y-1/2 lg:px-0 px-2">
            <figure className="w-28 h-28 md:w-40 md:h-40 p-4 bg-white rounded-full border-8 border-green-500 overflow-hidden shadow-lg">
              <img
                src={charity.logo}
                alt={charity.name}
                className="w-full h-full object-contain"
              />
            </figure>
            {charity.name.length > 20 ? (
              <h1 className="text-lg max-w-40 md:max-w-lg lg:max-w-none md:text-3xl font-bold text-green-600">
                {charity.name}
              </h1>
            ) : (
              <h1 className="text-3xl md:text-4xl font-bold text-green-600">
                {charity.name}
              </h1>
            )}
          </div>
        </Container>
        <div className="px-4 lg:px-16">
          <section className="flex flex-col-reverse md:flex-row justify-between gap-8">
            <aside
              className={`text-white w-full md:w-1/4 px-6 py-8 rounded-lg shadow-lg bg-green-500`}
            >
              <h2 className="font-bold text-2xl md:text-3xl text-center mb-4">
                {charity.location.map((location) =>
                  location.states === 'Global' ? t('Global') : t('states')
                )}
              </h2>
              <ul className="text-lg md:text-xl">
                {charity.location.map((location) =>
                  location.states === 'Global' ? null : (
                    <li
                      key={location.states}
                      className={`mb-2 hover:underline cursor-pointer ${
                        location === selectedLocation
                          ? 'bg-white text-green-500 px-2 py-1 rounded'
                          : ''
                      }`}
                      onClick={() => handleLocationClick(location)}
                    >
                      {t(location.states)}
                    </li>
                  )
                )}
              </ul>
            </aside>
            <section className="w-full md:w-3/4">
              <article>
                <h2 className="font-bold text-2xl md:text-3xl mb-4">
                  {t('donate.description')}
                </h2>
                <p className="text-lg md:text-xl">{charity.description}</p>
              </article>
              <hr className="my-8 border-t-4 border-green-500 rounded-lg" />
              {selectedLocation.address && (
                <article className="px-4 py-2">
                  <h2 className="font-bold text-2xl md:text-3xl mb-4">
                    {t('donate.locationIn')} {t(selectedLocation.states)}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedLocation.address.map((address, idx) => (
                      <div
                        key={idx}
                        className="bg-white text-green-600 px-4 py-2 rounded-lg shadow h-fit"
                      >
                        {address.address && (
                          <p className="text-lg"> {address.address}</p>
                        )}
                        {address.phone && (
                          <p className="text-lg border-t-2 border-gray-200 mt-4">
                            {address.phone}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              )}
            </section>
          </section>
          <section className="mt-8">
            <Container>
              {charity.phone && (
                <article>
                  <h2 className="font-bold text-2xl md:text-3xl mb-4">
                    {t('donate.numbers')}
                  </h2>
                  {charity.phone.map((phone, idx) => (
                    <div
                      key={idx}
                      className="text-lg mx-8 mb-2 bg-white px-4 py-2 rounded-b-lg shadow-lg last:rounded-lg"
                    >
                      {phone}
                    </div>
                  ))}
                </article>
              )}
              <article>
                <h2 className="font-bold text-2xl md:text-3xl mb-4">
                  {t('donate.donationMethods')}
                </h2>
                {charity.donationDetails.map((donationDetail, idx) => (
                  <div key={idx} className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold bg-green-500 text-white px-4 py-2 rounded-t-lg">
                      {donationDetail.method}:
                    </h3>
                    {Object.entries(donationDetail.ways).map(([way, value]) => (
                      <div
                        key={way}
                        className="text-lg mx-8 mb-2 bg-white px-4 py-2 rounded-b-lg shadow-lg last:rounded-lg"
                      >
                        <span className="font-semibold">{way}:</span>
                        {value.startsWith('http') ? (
                          <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:underline mx-2"
                          >
                            Click here
                          </a>
                        ) : (
                          ` ${value}`
                        )}
                      </div>
                    ))}
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
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 duration-300 cursor-pointer rounded-lg border-4 border-green-500"
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
      </div>
    </main>
  );
};

export default CharityProfile;
