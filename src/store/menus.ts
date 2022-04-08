import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getMenusService from 'services/menus';
import { MenuDataTypes, MenuItem } from 'services/menus/types';
import CONSTANTS from 'utils/constants';
import groupMenus from 'utils/menu';

interface MenusState {
  mainHeader: MenuItem[];
  header2: MenuItem[];
  mainFooter: MenuItem[];
  footer2: MenuItem[];
}

const initialState: MenusState = {
  mainHeader: [],
  header2: [],
  mainFooter: [],
  footer2: [],
};

export const getMenusAction = createAsyncThunk<
  MenuDataTypes[],
  undefined
>('menusReducer/getMenusAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getMenusService();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const menusSlice = createSlice({
  name: 'menusReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMenusAction.fulfilled, ($state, action) => {
      const mainHeader = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.MAIN_HEADER,
      )?.items || [];
      $state.mainHeader = groupMenus(mainHeader) || [];

      const header2 = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.HEADER_2,
      )?.items || [];
      $state.header2 = groupMenus(header2) || [];

      const mainFooter = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.MAIN_FOOTER,
      )?.items || [];
      $state.mainFooter = groupMenus(mainFooter) || [];

      const footer2 = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.FOOTER_2,
      )?.items || [];
      $state.footer2 = groupMenus(footer2) || [];
    });
  },
});

export default menusSlice.reducer;
