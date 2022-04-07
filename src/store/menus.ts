import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getMenusService from 'services/menus';
import { MenuDataTypes, MenuItemData } from 'services/menus/types';
import { MENU_CODE } from 'utils/constants';

interface MenusState {
  header: MenuItemData[];
  footer: MenuItemData[];
}

const initialState: MenusState = {
  header: [],
  footer: [],
};

export const getMenusAction = createAsyncThunk<
  MenuDataTypes[],
  void,
  { rejectValue: ErrorResponse }
>('menusReducer/getMenusAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getMenusService();
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const menusSlice = createSlice({
  name: 'menusReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMenusAction.fulfilled, ($state, action) => {
      // Header
      $state.header = action.payload.find((item) => item.code === MENU_CODE.MENU_HEADER)
        ?.items || [];
      // Footer
      $state.footer = action.payload.find((item) => item.code === MENU_CODE.MENU_FOOTER)
        ?.items || [];
    });
  },
});

export default menusSlice.reducer;
