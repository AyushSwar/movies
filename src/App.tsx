import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useAppSelector } from './hooks/redux';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import DataPage from './pages/DataPage';

const AppContent: React.FC = () => {
  const currentView = useAppSelector((state) => state.ui.currentView);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
          {currentView === 'home' ? <HomePage /> : <DataPage />}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;