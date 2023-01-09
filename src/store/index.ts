import {Slices} from '@/constants'
import {taskReducer} from '@/slices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistReducer, persistStore} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [Slices.tasks],
}

const rootReducer = combineReducers({
  [Slices.tasks]: taskReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
