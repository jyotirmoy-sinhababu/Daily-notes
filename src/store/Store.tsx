import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../slice/TodoSlice';
import themeReducer from '../slice/ThemeSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
