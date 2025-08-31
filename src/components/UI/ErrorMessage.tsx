import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] text-center px-4">
      <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 text-red-500 mb-3 sm:mb-4" />
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Something went wrong</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-3 py-2 sm:px-4 text-sm sm:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw size={14} className="mr-1.5 sm:mr-2 sm:w-4 sm:h-4" />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;