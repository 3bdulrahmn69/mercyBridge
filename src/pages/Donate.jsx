import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18next from 'i18next';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import UltimateSelector from '../components/UltimateSelector';
import CharityCard from '../components/CharityCard';
import Alert from '../components/Alert';
import Loading from '../components/Loading';
import Error from '../components/Error';
import FoundShape from '../components/FoundShape';
import NoSomethingFound from '../components/NoSomethingFound';
import getCurrentLocation from '../components/utilities';
import { getStates, getCharities } from '../components/utilities';

const Donate = () => {
  const { t } = useTranslation();
  const query = new URLSearchParams(useLocation().search);
  const methodFromQuery = query.get('for');

  const [errorWithLocation, setErrorWithLocation] = useState(null);
  const [errorWithCharities, setErrorWithCharities] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [locationSelected, setLocationSelected] = useState('');
  const [methodSelected, setMethodSelected] = useState('All');
  const [forSelected, setForSelected] = useState(methodFromQuery || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [charities, setCharities] = useState([]);
  const lang = i18next.language;

  const pageDirection = i18next.language === 'ar' ? 'rtl' : 'ltr';

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
          const charitiesResponse = await getCharities(lang);
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
  }, [states, lang]);

  useEffect(() => {
    setForSelected(methodFromQuery || 'All');
  }, [methodFromQuery]);

  const translatedStates = useMemo(
    () =>
      states.map((state) => ({
        name: state.name,
      })),
    [states]
  );

  const filteredCharities = charities.filter((charity) => {
    const locationMatches =
      locationSelected === 'All' ||
      charity.location.some((location) => location.states === locationSelected);

    const methodMatches =
      methodSelected === 'All' || charity.methods.includes(methodSelected);

    const forMatches =
      forSelected === 'All' || charity.donationFor.includes(forSelected);

    const searchMatches =
      searchQuery === '' ||
      charity.name.toLowerCase().includes(searchQuery.toLowerCase());

    return locationMatches && methodMatches && forMatches && searchMatches;
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main className="pb-6 lg:px-0 px-4">
      <div className="animate-slideDown">
        <SectionHeader
          title={t('Donate_BTN')}
          description={t('donate_desc')}
          center={true}
        />
      </div>
      <Container className="md:px-4">
        <div
          className="flex md:justify-between mb-4 flex-col lg:flex-row animate-FadeInRev"
        >
          <div className="lg:w-1/4 w-full lg:mb-0 mb-2">
            <input
              dir={pageDirection}
              type="text"
              placeholder={t('donate.Search charities')}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex md:flex-nowrap flex-wrap rap gap-y-2 justify-between">
            <UltimateSelector
              label={t('filter_by_state')}
              arrToSelectFrom={translatedStates}
              selectedValue={locationSelected}
              setSelectedValue={setLocationSelected}
            />
            <UltimateSelector
              label={t('filter_by_method')}
              arrToSelectFrom={[
                { name: 'Cash' },
                { name: 'Food' },
                { name: 'Clothes' },
                { name: 'Volunteer' },
              ]}
              selectedValue={methodSelected}
              setSelectedValue={setMethodSelected}
            />
            <UltimateSelector
              label={t('filter_by_for')}
              arrToSelectFrom={[
                { name: 'Gaza' },
                { name: 'Society' },
                { name: 'Children' },
                { name: 'Women' },
                { name: 'Health' },
                { name: 'Education' },
              ]}
              selectedValue={forSelected}
              setSelectedValue={setForSelected}
            />
            <FoundShape number={filteredCharities.length} />
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly gap-2">
          {filteredCharities.map((charity) => (
            <CharityCard
              key={charity.id}
              id={+charity.id}
              name={charity.name}
              description={charity.description}
              image={charity.logo}
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
