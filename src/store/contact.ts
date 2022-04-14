import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getTopicsListService from 'services/contact';
import { TopicParams, TopicTypes } from 'services/contact/types';

interface contactState {
  topics: TopicTypes[];
}

const initialState: contactState = {
  topics: [],
};

export const getTopicsListAsync = createAsyncThunk<
  TopicTypes[],
  TopicParams | undefined
>('topics/list', async (params, { rejectWithValue }) => {
  try {
    const response = await getTopicsListService(params);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const contactSlice = createSlice({
  name: 'contactReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTopicsListAsync.fulfilled, ($state, action) => {
      $state.topics = action.payload;
    });
  },
});

export default contactSlice.reducer;
