import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const UltimateSelector = ({
  label,
  arrToSelectFrom,
  selectedValue,
  setSelectedValue,
}) => {
  const { t } = useTranslation();
  const pageDirection = i18next.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <label htmlFor="state" className="flex items-center" dir={pageDirection}>
      {label}:
      <select
        className="state-selector p-2 mx-2 border border-green-500 rounded-md font-bold focus:outline-none"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        id="state"
      >
        <option value="All">{t('all')}</option>
        {arrToSelectFrom.map((select) => (
          <option key={select.name} value={select.name}>
            {t(select.name)}
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
