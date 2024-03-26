import i18next from 'i18next';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../components/SectionHeader';
import Container from '../components/Container';
import NewsCard from '../components/NewsCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getNews } from '../components/utilities';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const lang = i18next.language;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getNews(lang);
        setNewsData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [lang]);

  const newsCards = useMemo(
    () =>
      newsData.map((news) => (
        <NewsCard
          key={news.id}
          right={news.id % 2 === 0}
          title={news.title}
          content={news.content}
          id={news.id}
          date={news.date}
          img={news.img}
        />
      )),
    [newsData]
  );

  return (
    <main className="min-h-screen">
      <Container>
        <SectionHeader
          title={t('News_Title')}
          description={t('News_disc')}
          center={true}
        />
      </Container>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error message={t('news_error')} />
      ) : (
        <div className="flex flex-wrap justify-evenly gap-4">{newsCards}</div>
      )}
    </main>
  );
};

export default News;
