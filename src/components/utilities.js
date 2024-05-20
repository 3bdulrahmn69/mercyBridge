import axios from 'axios';

function getPosition(options = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    }
  });
}

async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  const axiosInstance = axios.create({ timeout: 30000 }); // Adjusted timeout to 30 seconds
  let attempts = 0;
  const maxAttempts = 3; // Retry up to 3 times

  while (attempts < maxAttempts) {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      attempts += 1;
      if (
        error.code === 'ECONNABORTED' ||
        error.message.includes('timeout') ||
        error.message.includes('ERR_CONNECTION_TIMED_OUT')
      ) {
        console.log(`Attempt ${attempts} failed, retrying...`);
        continue;
      }
      throw new Error('Failed to fetch location data: ' + error.message);
    }
  }
  throw new Error('All attempts to fetch location data failed.');
}

export default async function getCurrentLocation() {
  try {
    const options = { timeout: 10000 };
    const position = await getPosition(options);
    const { latitude, longitude } = position.coords;
    const data = await reverseGeocode(latitude, longitude);

    if (!data.address) {
      throw new Error('Address data is unavailable.');
    }

    const state = data.address.state;
    const city = data.address.city;

    return { error: null, data: { state, city } };
  } catch (error) {
    console.error(error.message);
    if (error.message === 'User denied Geolocation') {
      return { error: 'Please allow location access', data: null };
    }
    return { error: error.message, data: null };
  }
}
//_____________________________________________________________________________________
const api = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000,
});

const retryRequest = async (fn, retries = 3, delay = 1000) => {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 1) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retryRequest(fn, retries - 1, delay * 2);
  }
};

export async function getStates() {
  const requestStates = async () => {
    try {
      const response = await api.get('/states');
      return response.data;
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error('Error fetching states:', error);
      }
      throw error;
    }
  };

  return retryRequest(requestStates);
}

//_____________________________________________________________________________________
export async function postState(data) {
  try {
    const response = await api.post('/states', data);
    return response.data;
  } catch (error) {
    console.error('Error posting state:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function deleteState(stateId) {
  try {
    const response = await api.delete(`/states/${stateId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting state:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function getNews(lang = 'en', config = {}) {
  try {
    const response = await api.get(
      lang === 'ar' ? '/news-ar' : '/news',
      config
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function postNews(data) {
  try {
    const response = await api.post('/news', data);
    return response.data;
  } catch (error) {
    console.error('Error posting news:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function deleteNews(newsId) {
  try {
    const response = await api.delete(`/news/${newsId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting news:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function getNewsById(newsId, lang = 'en') {
  try {
    const url = lang === 'ar' ? `news-ar/${newsId}` : `news/${newsId}`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function getCharities(lang = 'en') {
  const url = lang === 'ar' ? '/charities-ar' : '/charities';
  try {
    const response = await api.get(url);
    return { error: null, charities: response.data };
  } catch (error) {
    console.error('Error fetching charities:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function postCharity(data) {
  try {
    const response = await api.post('/charities', data);
    return response.data;
  } catch (error) {
    console.error('Error posting charity:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function deleteCharity(charityId) {
  try {
    const response = await api.delete(`/charities/${charityId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting charity:', error);
    throw error;
  }
}
//_____________________________________________________________________________________
export async function getCharityById(charityId, lang = 'en') {
  const url =
    lang === 'ar' ? `/charities-ar/${charityId}` : `/charities/${charityId}`;
  try {
    const response = await api.get(url);
    return { error: null, charity: response.data };
  } catch (error) {
    console.error('Error fetching charity:', error);
    throw error;
  }
}
