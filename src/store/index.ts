import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import scoreboardReducer from './scoreboardSlice';
import imagesReducer from './imagesSlice';
import userReducer from './userSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const reducer = combineReducers({
    user: userReducer,
    scoreboard: scoreboardReducer,
    images: imagesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
