import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  sidebarOpen: boolean;
  currentView: 'home' | 'data';
}

const initialState: UiState = {
  sidebarOpen: false,
  currentView: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
    setCurrentView: (state, action: PayloadAction<'home' | 'data'>) => {
      state.currentView = action.payload;
      state.sidebarOpen = false; // Close sidebar when navigating
    },
  },
});

export const { toggleSidebar, closeSidebar, setCurrentView } = uiSlice.actions;
export default uiSlice.reducer;