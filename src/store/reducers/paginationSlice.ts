import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitalState {
  page: string;
  itemsPerPage: number;
}

const initialState: IInitalState = {
  page: '1',
  itemsPerPage: 25,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export const paginationState = (state: RootState) => state.paginationSlice;
export default paginationSlice.reducer;
