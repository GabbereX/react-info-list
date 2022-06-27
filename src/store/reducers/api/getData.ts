import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseURL } from '../../../config';
import { RootState } from '../../store';
import { IData } from '../../../interfaces/IData';

interface IInitialState {
  data: IData[];
  isLoading: boolean;
  status: string;
}

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  status: '',
};

export const fetchAPI = createAsyncThunk(
  'data/fetchAPI',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IData[]>(baseURL);
      return response.data;
    } catch (err) {
      return rejectWithValue('Ошибка! Сервер не отвечает, попробуйте позже');
    }
  }
);

const getData = createSlice({
  name: 'getData',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAPI.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchAPI.fulfilled.type]: (state, action: PayloadAction<IData[]>) => {
      state.isLoading = false;
      state.status = '';
      state.data = action.payload;
    },
    [fetchAPI.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.status = action.payload;
    },
  },
});

export const getDataState = (state: RootState) => state.getData;
export default getData.reducer;
