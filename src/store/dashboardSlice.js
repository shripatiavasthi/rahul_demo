import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
  theme: 'light',
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload
    },
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    setTheme(state, action) {
      state.theme = action.payload
    },
    resetDashboard() {
      return initialState
    },
  },
})

export const {
  setSidebarOpen,
  toggleSidebar,
  setTheme,
  resetDashboard,
} = dashboardSlice.actions
export default dashboardSlice.reducer
