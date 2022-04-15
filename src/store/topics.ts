import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import topicsListService from 'services/topics';
import { TopicParams, TopicTypes } from 'services/topics/types';

interface State {
  data: TopicTypes[];
}

const initialState: State = {
  data: [],
};

export const topicsListAsync = createAsyncThunk<
  TopicTypes[],
  TopicParams | undefined
>('topics/list', async (params, { rejectWithValue }) => {
  try {
    const response = await topicsListService(params);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const contactSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(topicsListAsync.fulfilled, ($state, action) => {
      $state.data = action.payload;
    });
  },
});

export default contactSlice.reducer;
