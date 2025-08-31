import React from 'react';
import { Menu } from 'lucide-react';
import { useAppDispatch } from '../../hooks/redux';
import { toggleSidebar } from '../../store/slices/uiSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} className="sm:w-6 sm:h-6" />
        </button>
        <div className="ml-2 sm:ml-4 lg:ml-0">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Dashboard</h2>
          <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Discover and explore movies</p>
        </div>
      </div>
    </header>
  );
};

export default Header;