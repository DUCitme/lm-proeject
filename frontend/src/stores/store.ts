import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducers from './rootReducer';

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger) as any,
});

export type IRootState = ReturnType<typeof store.getState>;
export type IAppDispatch = typeof store.dispatch;

export type IAppStore = typeof store;
