import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MessageNotify = {
  message?: string;
  type?: 'warning' | 'success',
}

type PageType = 'homepage' | 'subdivisions' | 'another';

type InitialState = {
  messageNotify?: MessageNotify;
  pageType?: PageType;
};

const initialState: InitialState = {
  messageNotify: {
    message: undefined,
    type: undefined,
  },
  pageType: undefined,
};

const systemsSlice = createSlice({
  name: 'systems',
  initialState,
  reducers: {
    setTypePage: ($state, action: PayloadAction<PageType>) => {
      $state.pageType = action.payload;
    },
  },
  extraReducers() {},
});

export const {
  setTypePage,
} = systemsSlice.actions;

export default systemsSlice.reducer;