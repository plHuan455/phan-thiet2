import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { staticAllService } from 'services/pages';

type State = {
  static?: DataStaticTypes[];
};

const initialState: State = {
  static: [],
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

const staticSlice = createSlice({
  name: 'static',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(staticAllAsync.fulfilled, ($state, action) => {
      $state.static = action.payload;
    });
  },
});

export default staticSlice.reducer;
