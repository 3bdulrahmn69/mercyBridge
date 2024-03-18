import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <main className="py-4 px-8">
      <h1 className="text-xl font-bold">{t('terms.title')}</h1>
      <p>{t('terms.lastUpdated')}</p>

      <section>
        <p>{t('terms.intro')}</p>
        <p>{t('terms.acceptance')}</p>
        <p>{t('terms.agreement')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('terms.linksToOtherSites.title')}
        </h2>
        <p>{t('terms.linksToOtherSites.content')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('terms.termination.title')}
        </h2>
        <p>{t('terms.termination.content')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('terms.governingLaw.title')}
        </h2>
        <p>{t('terms.governingLaw.content')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">{t('terms.changes.title')}</h2>
        <p>{t('terms.changes.content')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">{t('terms.contactUs.title')}</h2>
        <p>{t('terms.contactUs.content')}</p>
        <a href="mailto:support@mercybridge.com">mercybridge.com</a>
      </section>
    </main>
  );
};

export default Terms;
