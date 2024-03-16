import NewsCard from '../components/NewsCard';
import SectionHeader from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';
import SectionEndLink from '../components/SectionEndLink';
import Container from '../components/Container';
import { useState, useEffect, useMemo } from 'react';
import { getNews } from '../components/utilities';
import i18next from 'i18next';

const NewsSection = () => {
  const { t } = useTranslation();
  const [newsData, setNewsData] = useState([]);
  const lang = i18next.language;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews(lang);
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [lang]);

  const newsCards = useMemo(
    () =>
      newsData
        .slice(-4)
        .reverse()
        .map((news) => (
          <NewsCard
            key={news.id}
            right={news.id % 2 === 0}
            title={news.title}
            content={news.content}
            link={news.link}
            date={news.date}
            img={news.img}
          />
        )),
    [newsData]
  );

  return (
    <section className="pb-5 bg-gray-50" id="news">
      <Container>
        <SectionHeader
          title={t('News_Title')}
          description={t('News_disc')}
          center={true}
        />
      </Container>
      {newsCards}
      <SectionEndLink
        link="/news"
        title={'All News'}
        colors={{
          bg: 'bg-gray-100',
        }}
      />
    </section>
  );
};

export default NewsSection;
