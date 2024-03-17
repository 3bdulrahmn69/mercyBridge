import { useTranslation } from 'react-i18next';
import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import WorksCard from '../components/WorksCard';
import ourLaunch from '../assets/ourLaunch.jpg';
import firstMove from '../assets/firstMove.jpg';
import secondMove from '../assets/secondMove.jpg';

const Works = () => {
  const { t } = useTranslation('works');
  return (
    <main className="min-h-screen">
      <Container>
        <SectionHeader
          title="Our Works"
          description="We works with many Charities."
          center={true}
        />
      </Container>
      <WorksCard
        title={t('ourLaunch')}
        description={t('ourLaunch_description')}
        picture={ourLaunch}
        date={'2024-01-01'}
      />
      <WorksCard
        right={true}
        title={t('FirstMove')}
        description={t('FirstMove_description')}
        picture={firstMove}
        date={'2021-09-01'}
      />
      <WorksCard
        title={t('SecondMove')}
        description={t('SecondMove_description')}
        picture={secondMove}
        date={'2021-09-01'}
      />
    </main>
  );
};

export default Works;
