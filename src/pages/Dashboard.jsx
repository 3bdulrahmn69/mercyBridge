import { useState, useEffect } from 'react';
import SiteName from '../components/SiteName';
import FoundShape from '../components/FoundShape';
import DashBoardRecord from '../components/DashBoardRecord';
import PostCharity from '../components/PostCharity';
import {
  getCharities,
  getNews,
  getStates,
  deleteState,
  deleteNews,
  deleteCharity,
} from '../components/utilities';
import PostState from '../components/PostState';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(
    window.sessionStorage.getItem('activeTab') || 'Charities'
  );
  const [states, setStates] = useState([]);
  const [news, setNews] = useState([]);
  const [charities, setCharities] = useState([]);
  const [showPostCharity, setShowPostCharity] = useState(false);
  const [showPostState, setShowPostState] = useState(false);
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const states = await getStates();
        setStates(states);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, [states]);

  useEffect(() => {
    const fetchCharities = async () => {
      try {
        const { charities } = await getCharities();
        setCharities(charities);
      } catch (error) {
        console.error('Error fetching charities:', error);
      }
    };

    fetchCharities();
  }, [charities]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        setNews(news);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [news]);

  const handleDelete = async (id, type) => {
    if (type === 'charity') {
      try {
        await deleteCharity(id);
        const updatedCharities = charities.filter(
          (charity) => charity.id !== id
        );
        setCharities(updatedCharities);
      } catch (error) {
        console.error('Error deleting charity:', error);
      }
    } else if (type === 'state') {
      try {
        await deleteState(id);
        const updatedStates = states.filter((state) => state.id !== id);
        setStates(updatedStates);
      } catch (error) {
        console.error('Error deleting state:', error);
      }
    } else if (type === 'news') {
      try {
        await deleteNews(id);
        const updatedNews = news.filter((newsItem) => newsItem.id !== id);
        setNews(updatedNews);
      } catch (error) {
        console.error('Error deleting news:', error);
      }
    } else {
      console.error('Invalid type:', type);
    }
  };

  const handleEdit = async (id, type) => {
    console.log('Editing:', id, type);
  };

  const handleActiveTab = (tab) => {
    window.sessionStorage.setItem('activeTab', tab);
    setActiveTab(tab);
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="bg-green-500 text-white flex items-center justify-between px-8 py-4 shadow-md">
        <SiteName width={120} height={50} />
        <nav>
          <ul className="flex gap-4">
            <li
              className={`px-4 py-2 cursor-pointer my-2 rounded-md transition-colors duration-300 ${
                activeTab === 'Charities'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-700 hover:text-white'
              }`}
              onClick={() => handleActiveTab('Charities')}
            >
              Charities
            </li>
            <li
              className={`px-4 py-2 cursor-pointer my-2 rounded-md transition-colors duration-300 ${
                activeTab === 'News'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-700 hover:text-white'
              }`}
              onClick={() => handleActiveTab('News')}
            >
              News
            </li>
            <li
              className={`px-4 py-2 cursor-pointer my-2 rounded-md transition-colors duration-300 ${
                activeTab === 'States'
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-700 hover:text-white'
              }`}
              onClick={() => handleActiveTab('States')}
            >
              States
            </li>
          </ul>
        </nav>
        <h1 className="text-3xl md:text-4xl uppercase bg-green-700 px-4 py-2 rounded-md shadow">
          Dashboard
        </h1>
      </div>
      <section className="w-full px-8 py-8">
        {activeTab === 'Charities' && (
          <div className="mb-8">
            <div className="flex justify-between items-center bg-green-500 text-white px-6 py-4 rounded-t-lg shadow-lg">
              <h2 className="text-lg font-semibold">Charities</h2>
              <div className="flex gap-4 items-center">
                <FoundShape number={charities.length} />
                <button
                  className="bg-green-700 px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300"
                  onClick={() => setShowPostCharity(true)}
                >
                  Add Charity
                </button>
              </div>
            </div>
            <div className="bg-white rounded-b-lg shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Id', 'Name', 'Actions'].map((item, index) => (
                      <th
                        key={index}
                        className={`px-6 py-3 bg-green-500 text-white ${
                          index === 2 ? 'text-center' : ''
                        }`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {charities.map((charity) => (
                    <DashBoardRecord
                      key={charity.id}
                      element={charity}
                      type="charity"
                      deleteFunc={() => handleDelete(charity.id, 'charity')}
                      editFunc={handleEdit}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'News' && (
          <div>
            <div className="flex justify-between items-center bg-green-500 text-white px-6 py-4 rounded-t-lg shadow-lg">
              <h2 className="text-lg font-semibold">News</h2>
              <div className="flex gap-4 items-center">
                <FoundShape number={news.length} />
                <button className="bg-green-700 px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300">
                  Add News
                </button>
              </div>
            </div>
            <div className="bg-white rounded-b-lg shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Id', 'Title', 'Date', 'Actions'].map((item, index) => (
                      <th
                        key={index}
                        className={`px-6 py-3 bg-green-500 text-white ${
                          index === 3 ? 'text-center' : ''
                        }`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {news.map((newsItem) => (
                    <DashBoardRecord
                      key={newsItem.id}
                      element={newsItem}
                      type="news"
                      deleteFunc={() => handleDelete(newsItem.id, 'news')}
                      editFunc={handleEdit}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 'States' && (
          <div>
            <div className="flex justify-between items-center bg-green-500 text-white px-6 py-4 rounded-t-lg shadow-lg">
              <h2 className="text-lg font-semibold">States</h2>
              <div className="flex gap-4 items-center">
                <FoundShape number={states.length} />
                <button
                  className="bg-green-700 px-4 py-2 rounded-md hover:bg-green-800 transition-colors duration-300"
                  onClick={() => setShowPostState(true)}
                >
                  Add State
                </button>
              </div>
            </div>
            <div className="bg-white rounded-b-lg shadow">
              <table className="w-full">
                <thead>
                  <tr>
                    {['Id', 'Name', 'Actions'].map((item, index) => (
                      <th
                        key={index}
                        className={`px-6 py-3 bg-green-500 text-white ${
                          index === 2 ? 'text-center' : ''
                        }`}
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {states.map((state) => (
                    <DashBoardRecord
                      key={state.id}
                      element={state}
                      type="state"
                      deleteFunc={() => handleDelete(state.id, 'state')}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
      {showPostCharity && (
        <PostCharity setShowPostCharity={setShowPostCharity} />
      )}
      {showPostState && (
        <PostState
          setShowPostState={setShowPostState}
          data={data}
          setData={setData}
        />
      )}
    </main>
  );
};

export default Dashboard;
