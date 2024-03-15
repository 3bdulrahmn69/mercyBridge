import SectionHeader from '../components/SectionHeader';
import WorksCard from '../components/WorksCard';
import Container from '../components/Container';
import SectionEndLink from '../components/SectionEndLink';
import img from '../assets/600x400.png';

const WorksSection = () => {
  return (
    <section className="bg-gray-50 pb-5" id="ourWorks">
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
        description={
          'We started a charity to help people in need. lore   m ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.'
        }
        picture={img}
        date={'2021-09-01'}
      />
      <WorksCard
        title={'Our Lunch'}
        description={'We started a charity to help people in need.'}
        picture={img}
        date={'2021-09-01'}
      />
      <SectionEndLink
        link="/works"
        colors={{ bg: 'bg-transparent', text: 'text-green-500' }}
        title={'All Works'}
      />
    </section>
  );
};

export default WorksSection;
