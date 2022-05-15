import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import usersReducer from './slices/users';
import mainReducer from './slices/main';
import contactsReducer from './slices/contacts';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['userReducer'],
};

const rootReducer = combineReducers({
  userReducer,
  usersReducer,
  mainReducer,
  contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
