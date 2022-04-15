import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import systemsGeneralService from 'services/systems';
import { SystemsData } from 'services/systems/types';

type MessageNotify = {
  message?: string;
  type?: 'warning' | 'success',
}

type PageType = 'default' | 'subdivisions';

type InitialState = {
  messageNotify?: MessageNotify;
  pageType?: PageType;
  data?: SystemsData
};

const initialState: InitialState = {
  messageNotify: {
    message: undefined,
    type: undefined,
  },
  pageType: 'default',
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
  reducers: {
    setTypePage: ($state, action: PayloadAction<PageType>) => {
      $state.pageType = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(systemsGeneralAsync.fulfilled, ($state, action) => {
      $state.data = action.payload;
    });
  },
});

export const {
  setTypePage,
} = systemsSlice.actions;

export default systemsSlice.reducer;
