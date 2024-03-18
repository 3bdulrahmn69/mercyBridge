import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useMemo } from 'react';
import { getStates } from '../components/utilities';

const StateSelector = ({ location }) => {
  const { t } = useTranslation();
  const [locationState, setLocationState] = useState(location);
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchStates() {
      setLoading(true);
      try {
        const response = await getStates();
        setStates(response);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching states.');
      } finally {
        setLoading(false);
      }
    }

    fetchStates();
  }, []);

  const translatedStates = useMemo(
    () =>
      states.map((state) => ({
        name: state.name,
      })),
    [states]
  );

  if (loading) {
    return (
      <label htmlFor="state">
        {t('filter_by_state')}:
        <select
          className="state-selector p-2 mx-2 border border-green-500 rounded-md font-bold focus:outline-green-500"
          value={locationState}
          onChange={(e) => setLocationState(e.target.value)}
          id="state"
        >
          <option value="000">Loading...</option>
        </select>
      </label>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <label htmlFor="state">
      {t('filter_by_state')}:
      <select
        className="state-selector p-2 mx-2 border border-green-500 rounded-md font-bold focus:outline-none"
        value={locationState}
        onChange={(e) => setLocationState(e.target.value)}
        id="state"
      >
        <option value="all">{t('all')}</option>
        {translatedStates.map((state) => (
          <option key={state.name} value={state.name}>
            {t(state.name)}
          </option>
        ))}
      </select>
    </label>
  );
};

StateSelector.propTypes = {
  location: PropTypes.string,
};

export default StateSelector;
