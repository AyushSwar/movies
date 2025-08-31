import React from 'react';
import { X, Star, Calendar, Users } from 'lucide-react';
import { Movie } from '../../types/movie';
import { getMovieImageUrl } from '../../services/movieApi';

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-1.5 sm:p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-all"
          >
            <X size={16} className="sm:w-5 sm:h-5" />
          </button>
          
          <div className="relative h-48 sm:h-64 md:h-80">
            <img
              src={getMovieImageUrl(movie.backdrop_path, 'w1280')}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white pr-8">
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 line-clamp-2">{movie.title}</h2>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex items-center text-gray-600">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-yellow-500 fill-current" />
              <span className="font-semibold text-sm sm:text-base">{movie.vote_average.toFixed(1)}</span>
              <span className="ml-1 text-xs sm:text-sm">({movie.vote_count} votes)</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">{new Date(movie.release_date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center text-gray-600 hidden sm:flex">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Popularity: {Math.round(movie.popularity)}</span>
            </div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Overview</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {movie.overview || 'No overview available for this movie.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;