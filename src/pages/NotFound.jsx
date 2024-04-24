import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import img from '../assets/error404.svg';
import SectionEndLink from '../components/SectionEndLink';

const NotFound = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = '404 Not Found';
  }, []);

  return (
    <main>
      <div className="py-8">
        <figure>
          <img
            src={img}
            alt="404 Not Found"
            style={{
              width: '100%',
              maxWidth: '500px',
              margin: 'auto',
              display: 'block',
            }}
          />
        </figure>
        <SectionEndLink
          link="/"
          isHome={false}
          title={t('backToHome')}
          colors={{ bg: 'bg-green-500', text: 'text-white' }}
        />
      </div>
    </main>
  );
};

export default NotFound;
