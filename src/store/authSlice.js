import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
  rememberMe: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.token = action.payload.token
      state.user = action.payload.user
      state.rememberMe = Boolean(action.payload.rememberMe)
    },
    clearCredentials() {
      return initialState
    },
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions
export default authSlice.reducer
