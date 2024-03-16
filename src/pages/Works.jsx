import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import WorksCard from '../components/WorksCard';
import img from '../assets/600x400.png';

const Works = () => {
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
        title={'Our Lunch'}
        description={'We started a charity to help people in need.'}
        picture={img}
        date={'2021-09-01'}
      />
      <WorksCard
        right={true}
        title={'Our Lunch'}
        description={'We started a charity to help people in need.'}
        picture={img}
        date={'2021-09-01'}
      />
      <WorksCard
        title={'Our Lunch'}
        description={'We started a charity to help people in need.'}
        picture={img}
        date={'2021-09-01'}
      />
    </main>
  );
};

export default Works;
