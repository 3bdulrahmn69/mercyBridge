import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();

  return (
    <main className="py-4 px-8">
      <h1 className="text-xl font-bold mb-4">{t('help.title')}</h1>

      <section>
        <h2 className="text-lg font-semibold mb-2">{t('help.faqs')}</h2>
        <p className="mb-2">{t('help.intro')}</p>
        <ul className="list-disc pl-6">
          <li>
            <a href="#faq-donations">{t('help.donationTitle')}</a>
          </li>
          <li>
            <a href="#faq-charities">{t('help.findCharitiesTitle')}</a>
          </li>
          <li>
            <a href="#faq-secure">{t('help.isSecureTitle')}</a>
          </li>
          {/* Add more FAQs as needed */}
        </ul>
      </section>

      <section id="faq-donations" className="mt-8">
        <h3 className="text-lg font-semibold mb-2">
          {t('help.donationTitle')}
        </h3>
        <p className="mb-2">{t('help.donationSteps')}</p>
        <ol className="list-decimal pl-6">
          <li>{t('help.visitWebsite')}</li>
          <li>{t('help.searchCharity')}</li>
          <li>{t('help.selectCharity')}</li>
          <li>{t('help.completeDonation')}</li>
        </ol>
      </section>

      <section id="faq-charities" className="mt-8">
        <h3 className="text-lg font-semibold mb-2">
          {t('help.findCharitiesTitle')}
        </h3>
        <p className="mb-2">{t('help.findCharitiesDesc')}</p>
      </section>

      <section id="faq-secure" className="mt-8">
        <h3 className="text-lg font-semibold mb-2">
          {t('help.isSecureTitle')}
        </h3>
        <p className="mb-2">{t('help.isSecureDesc')}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">{t('help.needMoreHelp')}</h2>
        <p>{t('help.moreHelpDesc')}</p>
        <ul className="list-disc pl-6">
          <li dangerouslySetInnerHTML={{ __html: t('help.emailSupport') }} />
          <a href="mailto:support@mercybridge.com">mercybridge.com</a>
        </ul>
      </section>
    </main>
  );
};

export default Help;
