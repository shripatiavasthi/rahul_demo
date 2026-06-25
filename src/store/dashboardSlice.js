import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
  workspaceView: 'dashboard',
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
    setWorkspaceView(state, action) {
      state.workspaceView = action.payload
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
  setWorkspaceView,
  setTheme,
  resetDashboard,
} = dashboardSlice.actions
export default dashboardSlice.reducer
