import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const UltimateSelector = ({
  label,
  arrToSelectFrom,
  selectedValue,
  setSelectedValue,
}) => {
  const { t } = useTranslation();

  return (
    <label htmlFor="state">
      {label}:
      <select
        className="state-selector p-2 mx-2 border border-green-500 rounded-md font-bold focus:outline-none"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        id="state"
      >
        <option value="All">{t('all')}</option>
        {arrToSelectFrom.map((state) => (
          <option key={state.name} value={state.name}>
            {t(state.name)}
          </option>
        ))}
      </select>
    </label>
  );
};

UltimateSelector.propTypes = {
  label: PropTypes.string,
  arrToSelectFrom: PropTypes.array,
  selectedValue: PropTypes.string,
  setSelectedValue: PropTypes.func,
};

export default UltimateSelector;
