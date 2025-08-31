import React from 'react';
import { Home, BarChart3, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCurrentView, closeSidebar } from '../../store/slices/uiSlice';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { sidebarOpen, currentView } = useAppSelector((state) => state.ui);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'data', label: 'Data', icon: BarChart3 },
  ];

  const handleNavigation = (view: 'home' | 'data') => {
    dispatch(setCurrentView(view));
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:flex-shrink-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h1 className="text-lg sm:text-xl font-bold text-gray-900">MovieDash</h1>
          <button
            onClick={() => dispatch(closeSidebar())}
            className="lg:hidden p-1.5 sm:p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <nav className="mt-4 sm:mt-6">
          <ul className="space-y-1 sm:space-y-2 px-3 sm:px-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id as 'home' | 'data')}
                    className={`w-full flex items-center px-3 py-2.5 sm:px-4 sm:py-3 text-left rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={18} className="mr-2 sm:mr-3 sm:w-5 sm:h-5" />
                    <span className="font-medium text-sm sm:text-base">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;