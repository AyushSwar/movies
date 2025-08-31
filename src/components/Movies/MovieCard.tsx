import React from 'react';
import { Star } from 'lucide-react';
import { Movie } from '../../types/movie';
import { getMovieImageUrl } from '../../services/movieApi';

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div
      onClick={() => onClick(movie)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg w-full"
    >
      <div className="relative pb-[150%] w-full">
        <img
          src={getMovieImageUrl(movie.poster_path)}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-black bg-opacity-70 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md flex items-center text-xs sm:text-sm">
          <Star size={14} className="mr-1 fill-current text-yellow-400" />
          {movie.vote_average.toFixed(1)}
        </div>
      </div>
      <div className="p-2 sm:p-3 md:p-4">
        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 line-clamp-2 leading-tight text-sm sm:text-base">
          {movie.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          {new Date(movie.release_date).getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;