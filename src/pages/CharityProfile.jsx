import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharityById } from '../components/utilities';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Container from '../components/Container';

const CharityProfile = () => {
  const { id } = useParams();
  const [charity, setCharity] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCharity() {
      setIsLoading(true);
      try {
        const response = await getCharityById(id);
        setCharity(response.charity);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching charity.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharity();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <main className="w-full min-h-screen">
      <Container>
        <figure className="w-full bg-green-500">
          <img
            src={charity.banner}
            alt={charity.name}
            className="w-full h-80"
          />
        </figure>
        <h1>{charity.name}</h1>
      </Container>
    </main>
  );
};

export default CharityProfile;
