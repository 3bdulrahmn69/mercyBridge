import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const Language = () => {
  const { t } = useTranslation();
  const languages = [
    { code: 'en', label: 'English', connery_code: 'gb' },
    { code: 'ar', label: 'العربية', connery_code: 'eg' },
  ];

  const setTextDirection = (langCode) => {
    document.body.dir = langCode === 'ar' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    setTextDirection(i18n.language);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-red-500 text-white flex justify-between py-1 md:px-4 px-2">
      <p>{t('Donate_Now_Language')}</p>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code} className="inline-block mx-2">
            <button
              className={i18n.language === lang.code ? 'opacity-70' : ''}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setTextDirection(lang.code);
                window.location.reload();
              }}
              disabled={i18n.language === lang.code}
            >
              <span
                className={`fi fi-${lang.connery_code} mx-2 rounded-sm`}
              ></span>
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
