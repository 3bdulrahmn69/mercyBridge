import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'MercyBridge | Privacy';
  }, []);

  return (
    <main className="py-4 px-8">
      <h1 className="text-xl font-bold">{t('privacy.title')}</h1>
      <p>{t('privacy.lastUpdated', { date: '[Insert Date]' })}</p>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.introductionTitle')}
        </h2>
        <p>{t('privacy.introduction')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.informationCollectionTitle')}
        </h2>
        <p>{t('privacy.informationCollection')}</p>
        <ul className="list-disc pl-6">
          <li>
            <strong>{t('privacy.personalData')}</strong>{' '}
            {t('privacy.personalDataDesc')}
          </li>
          <li>
            <strong>{t('privacy.usageData')}</strong>{' '}
            {t('privacy.usageDataDesc')}
          </li>
          <li>
            <strong>{t('privacy.dataRetention')}</strong>{' '}
            {t('privacy.dataRetentionDesc')}
          </li>
          <li>
            <strong>{t('privacy.cookies')}</strong> {t('privacy.cookiesDesc')}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.useOfInformationTitle')}
        </h2>
        <p>{t('privacy.useOfInformation')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.disclosureOfInformationTitle')}
        </h2>
        <p>{t('privacy.disclosureOfInformation')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.securityOfDataTitle')}
        </h2>
        <p>{t('privacy.securityOfData')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.linksToOtherSitesTitle')}
        </h2>
        <p>{t('privacy.linksToOtherSites')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          {t('privacy.changesToThisPrivacyPolicyTitle')}
        </h2>
        <p>{t('privacy.changesToThisPrivacyPolicy')}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">{t('privacy.contactUsTitle')}</h2>
        <p>{t('privacy.contactUs')}</p>
        <a href="mailto:support@mercybridge.com">mercybridge.com</a>
      </section>
    </main>
  );
};

export default Privacy;
