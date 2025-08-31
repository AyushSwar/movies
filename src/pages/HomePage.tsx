import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loadMovies, setSearchQuery, setCurrentPage, setSelectedMovie } from '../store/slices/moviesSlice';
import SearchBar from '../components/UI/SearchBar';
import MovieGrid from '../components/Movies/MovieGrid';
import Pagination from '../components/UI/Pagination';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import MovieModal from '../components/Movies/MovieModal';
import { Movie } from '../types/movie';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, currentPage, totalPages, searchQuery, selectedMovie } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(loadMovies({ page: currentPage, query: searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleMovieClick = (movie: Movie) => {
    dispatch(setSelectedMovie(movie));
  };

  const handleCloseModal = () => {
    dispatch(setSelectedMovie(null));
  };

  const handleRetry = () => {
    dispatch(loadMovies({ page: currentPage, query: searchQuery }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Popular Movies</h1>
          <p className="text-sm sm:text-base text-gray-600">Discover the latest and most popular movies</p>
        </div>
        <div className="w-full">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for movies..."
          />
        </div>
      </div>

      {loading && <LoadingSpinner />}
      
      {error && !loading && (
        <ErrorMessage message={error} onRetry={handleRetry} />
      )}
      
      {!loading && !error && (
        <>
          <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            loading={loading}
          />
        </>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={!!selectedMovie}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomePage;