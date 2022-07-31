import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '0f5c4a68ea4f6f8af4c4fd53fcc81027';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getSearchMovies = async searchQuery => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}`
    );
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    toast.error(error.message);
  }
};
