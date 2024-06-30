import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from './slices/counter-slice'

const persistConfig ={
  key:'root',
  version:1,
  storage
}

const reducer = combineReducers({counter:counterReducer})
const persitedReducer = persistReducer(persistConfig,reducer)

export const makeStore = () => {
  return configureStore({
    reducer: persitedReducer,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']