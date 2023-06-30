import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store/store";

export interface PaginaAtual {
  id: number;
  nome: string;
}

const initialState: PaginaAtual = {
    id: 0,
    nome: 'ViewInicio'
}

export const paginaSlice = createSlice({
  name: "pagina",
  initialState,
  reducers: {
    alterarPagina: (state, action: PayloadAction<PaginaAtual>) => {
      state = action.payload;
    },
  },
});
export const { alterarPagina } =
  paginaSlice.actions;
export const paginaSelector = (state: RootState) => state.paginaReducer;
export default paginaSlice.reducer;