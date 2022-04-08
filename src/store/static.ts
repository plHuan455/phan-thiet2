import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { staticAllService, staticErrorsService } from 'services/pages';

type State = {
  static?: DataStaticTypes[];
  errors?: DataStaticErrorTypes[];
};

const initialState: State = {
  static: [],
  errors: [],
};

export const staticAllAsync = createAsyncThunk<
  DataStaticTypes[],
  undefined
>(
  'static/All',
  async (_, { rejectWithValue }) => {
    try {
      const res = await staticAllService();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const staticErrorsAsync = createAsyncThunk<
  DataStaticErrorTypes[],
  undefined
>(
  'static/Errors',
  async (_, { rejectWithValue }) => {
    try {
      const res = await staticErrorsService();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const staticSlice = createSlice({
  name: 'static',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(staticAllAsync.fulfilled, ($state, action) => {
      $state.static = action.payload;
    });
    builder.addCase(staticErrorsAsync.fulfilled, ($state, action) => {
      $state.errors = action.payload;
    });
  },
});

export default staticSlice.reducer;
