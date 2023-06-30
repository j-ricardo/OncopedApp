import { configureStore } from '@reduxjs/toolkit';
import paginaReducer from '../../features/pagina_atual/paginaAtualSlice';
export const store = configureStore({
  reducer: {
    paginaReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;