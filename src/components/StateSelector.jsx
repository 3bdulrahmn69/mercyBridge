import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const StateSelector = ({ states, location, setLocationSelected }) => {
  const { t } = useTranslation();

  return (
    <label htmlFor="state">
      {t('filter_by_state')}:
      <select
        className="state-selector p-2 mx-2 border border-green-500 rounded-md font-bold focus:outline-none"
        value={location}
        onChange={(e) => setLocationSelected(e.target.value)}
        id="state"
      >
        <option value="All">{t('all')}</option>
        {states.map((state) => (
          <option key={state.name} value={state.name}>
            {t(state.name)}
          </option>
        ))}
      </select>
    </label>
  );
};

StateSelector.propTypes = {
  states: PropTypes.array,
  location: PropTypes.string,
  setLocationSelected: PropTypes.func,
};

export default StateSelector;
