import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import authReducer from './authSlice'
import dashboardReducer from './dashboardSlice'
import signupReducer from './signupSlice'

const storage = {
  getItem(key) {
    return Promise.resolve(window.localStorage.getItem(key))
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value)
    return Promise.resolve(value)
  },
  removeItem(key) {
    window.localStorage.removeItem(key)
    return Promise.resolve()
  },
}

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  signup: signupReducer,
})

const persistConfig = {
  key: 'sandbox-interview',
  storage,
  whitelist: ['auth', 'dashboard', 'signup'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
