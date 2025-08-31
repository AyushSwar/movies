import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loadMovies, setCurrentPage, setSelectedMovie } from '../store/slices/moviesSlice';
import MovieTable from '../components/Movies/MovieTable';
import Pagination from '../components/UI/Pagination';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';
import MovieModal from '../components/Movies/MovieModal';
import { Movie } from '../types/movie';

const DataPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { movies, loading, error, currentPage, totalPages, selectedMovie } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    // Load movies without search query for data view
    dispatch(loadMovies({ page: currentPage }));
  }, [dispatch, currentPage]);

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
    dispatch(loadMovies({ page: currentPage }));
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Movie Data</h1>
        <p className="text-sm sm:text-base text-gray-600">View detailed movie information in table format</p>
      </div>

      {loading && <LoadingSpinner />}
      
      {error && !loading && (
        <ErrorMessage message={error} onRetry={handleRetry} />
      )}
      
      {!loading && !error && (
        <>
          <MovieTable movies={movies} onMovieClick={handleMovieClick} />
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

export default DataPage;