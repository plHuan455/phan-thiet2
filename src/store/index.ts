import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import menuReducer from './menus';
import staticReducer from './static';
import systemReducer from './systems';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    system: systemReducer,
    static: staticReducer,
    menus: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
