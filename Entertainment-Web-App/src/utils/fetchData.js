import axios from 'axios';

export const fetchData = async (url, options) => {
  try {
    const response = await axios.request({
      url,
      ...options,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Request failed: ${error.message}`);
  }
};

export const trandingMovies = {
  method: 'GET',
  params: {page: '1'},
  headers: {
    Type: 'get-trending-movies',
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};

export const movieById = {
  method: 'GET',
  params: {
    movieid: 'tt27214365'
  },
  headers: {
    Type: 'get-movie-details',
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};
