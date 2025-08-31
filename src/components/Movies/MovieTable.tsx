import React from 'react';
import { ArrowUpDown, Star } from 'lucide-react';
import { Movie } from '../../types/movie';
import { getMovieImageUrl } from '../../services/movieApi';

interface MovieTableProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieTable: React.FC<MovieTableProps> = ({ movies, onMovieClick }) => {
  const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('desc');

  const sortedMovies = React.useMemo(() => {
    return [...movies].sort((a, b) => {
      if (sortOrder === 'desc') {
        return b.vote_average - a.vote_average;
      }
      return a.vote_average - b.vote_average;
    });
  }, [movies, sortOrder]);

  const toggleSort = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  if (movies.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No movies found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden -mx-4 sm:mx-0">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Movie
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Release Date
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button
                  onClick={toggleSort}
                  className="flex items-center space-x-1 hover:text-gray-700 transition-colors"
                >
                  <span>Rating</span>
                  <ArrowUpDown size={14} />
                </button>
              </th>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Popularity
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedMovies.map((movie) => (
              <tr
                key={movie.id}
                onClick={() => onMovieClick(movie)}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-3 sm:px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-8 sm:h-16 sm:w-12">
                      <img
                        src={getMovieImageUrl(movie.poster_path, 'w92')}
                        alt={movie.title}
                        className="h-12 w-8 sm:h-16 sm:w-12 object-cover rounded"
                      />
                    </div>
                    <div className="ml-2 sm:ml-4 min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-2 pr-2">
                        {movie.title}
                      </div>
                      <div className="text-xs text-gray-500 sm:hidden mt-1">
                        {new Date(movie.release_date).getFullYear()}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden sm:table-cell">
                  {new Date(movie.release_date).toLocaleDateString()}
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-gray-900">
                    <Star size={14} className="mr-1 text-yellow-500 fill-current" />
                    {movie.vote_average.toFixed(1)}
                  </div>
                </td>
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-900 hidden md:table-cell">
                  {Math.round(movie.popularity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieTable;