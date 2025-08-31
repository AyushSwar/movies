import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from '../../types/movie';
import { fetchPopularMovies, searchMovies } from '../../services/movieApi';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  searchQuery: '',
  selectedMovie: null,
};

export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async ({ page, query }: { page: number; query?: string }) => {
    if (query && query.trim()) {
      return await searchMovies(query, page);
    }
    return await fetchPopularMovies(page);
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedMovie: (state, action: PayloadAction<Movie | null>) => {
      state.selectedMovie = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export const { setSearchQuery, setCurrentPage, setSelectedMovie, clearError } = moviesSlice.actions;
export default moviesSlice.reducer;