import axios from 'axios';
import { MoviesResponse } from '../types/movie';

const API_KEY = 'fb7bb23f03b6994dafc674c074d01761';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchPopularMovies = async (page: number = 1): Promise<MoviesResponse> => {
  const response = await movieApi.get('/movie/popular', {
    params: { page },
  });
  return response.data;
};

export const searchMovies = async (query: string, page: number = 1): Promise<MoviesResponse> => {
  const response = await movieApi.get('/search/movie', {
    params: { query, page },
  });
  return response.data;
};

export const getMovieImageUrl = (path: string, size: string = 'w500'): string => {
  if (!path) return '/placeholder-movie.jpg';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};