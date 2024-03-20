import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import StateSelector from '../components/StateSelector';
import CharityCard from '../components/CharityCard';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import Error from '../components/Error';
import FoundShape from '../components/FoundShape';
import getCurrentLocation from '../components/utilities';
import { getCharities as getCharitiesFromApi } from '../components/utilities';
import { getStates } from '../components/utilities';
import NoSomethingFound from '../components/NoSomethingFound';

const Donate = () => {
  const { t } = useTranslation();
  const [errorWithLocation, setErrorWithLocation] = useState(null);
  const [errorWithCharities, setErrorWithCharities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [locationSelected, setLocationSelected] = useState('');
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    async function fetchStates() {
      setIsLoading(true);
      try {
        const response = await getStates();
        setStates(response);
      } catch (error) {
        setErrorWithCharities(
          error.message || 'An error occurred while fetching states.'
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchStates();
  }, []);

  useEffect(() => {
    if (states.length > 0) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const locationResponse = await getCurrentLocation();
          if (locationResponse.error) {
            setErrorWithLocation(locationResponse.error);
            setLocationSelected('All');
          } else {
            const stateFound = states.find(
              (state) => state.name === locationResponse.data.state
            );
            setLocationSelected(
              stateFound ? locationResponse.data.state : 'All'
            );
          }
        } catch (err) {
          setErrorWithLocation(
            err.message || 'An error occurred while fetching location.'
          );
          setLocationSelected('All');
        }

        try {
          const charitiesResponse = await getCharitiesFromApi();
          if (charitiesResponse.error) {
            setErrorWithCharities(charitiesResponse.error);
          } else {
            setCharities(charitiesResponse.charities);
          }
        } catch (err) {
          setErrorWithCharities(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [states]);

  const translatedStates = useMemo(
    () =>
      states.map((state) => ({
        name: state.name,
      })),
    [states]
  );

  const filteredCharities = charities.filter((charity) =>
    locationSelected === 'All'
      ? true
      : charity.states.includes(locationSelected)
  );

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main className="pb-6 lg:px-0 px-4">
      <SectionHeader
        title={t('Donate_BTN')}
        description={t('donate_desc')}
        center={true}
      />
      <Container className="md:px-4">
        <div className="flex gap-4 items-center mb-4">
          <StateSelector
            states={translatedStates}
            location={locationSelected}
            setLocationSelected={setLocationSelected}
          />
          <FoundShape number={filteredCharities.length} />
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          {filteredCharities.map((charity) => (
            <CharityCard
              key={charity.id}
              name={charity.name}
              description={charity.description}
              image={charity.img}
              methods={charity.methods}
            />
          ))}
          {filteredCharities.length === 0 && (
            <NoSomethingFound
              message="message"
              location={t(locationSelected)}
            />
          )}
        </div>
      </Container>
      {errorWithLocation && <Alert type="warning">{errorWithLocation}</Alert>}
      {errorWithCharities && <Error message={errorWithCharities} />}
    </main>
  );
};

export default Donate;
