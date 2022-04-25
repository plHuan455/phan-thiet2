import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import systemsGeneralService from 'services/systems';
import { SystemsData } from 'services/systems/types';

type MessageNotify = {
  message?: string;
  type?: 'warning' | 'success',
}

type InitialState = {
  messageNotify?: MessageNotify;
  data?: SystemsData
};

const initialState: InitialState = {
  messageNotify: {
    message: undefined,
    type: undefined,
  },
};

export const systemsGeneralAsync = createAsyncThunk<
SystemsData,
void,
{ rejectValue: unknown }
>(
  'systems/getSystems',
  async (_, { rejectWithValue }) => {
    try {
      return await systemsGeneralService();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const systemsSlice = createSlice({
  name: 'systems',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(systemsGeneralAsync.fulfilled, ($state, action) => {
      $state.data = action.payload;
    });
  },
});

export default systemsSlice.reducer;
