import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import menusService from 'services/menus';
import { MenuDataTypes, MenuItem } from 'services/menus/types';
import CONSTANTS from 'utils/constants';
import { groupMenusCustomLink } from 'utils/menu';

interface State {
  mainHeader: MenuItem[];
  header2: MenuItem[];
  mainFooter: MenuItem[];
  footer2: MenuItem[];
  division: MenuItem[];
}

const initialState: State = {
  mainHeader: [],
  header2: [],
  mainFooter: [],
  footer2: [],
  division: [],
};

export const menusAsync = createAsyncThunk<
  MenuDataTypes[],
  undefined
>('menus/list', async (_, { rejectWithValue }) => {
  try {
    const response = await menusService();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    setActiveHashDivision: ($state, action: PayloadAction<string>) => {
      $state.header2 = $state.header2.map(
        (x) => ({ ...x, importantActive: x.link === action.payload }),
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(menusAsync.fulfilled, ($state, action) => {
      const mainHeader = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.MAIN_HEADER,
      )?.items || [];
      $state.mainHeader = groupMenusCustomLink(mainHeader) || [];

      const header2 = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.HEADER_2,
      )?.items || [];
      $state.header2 = groupMenusCustomLink(header2) || [];

      const division = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.PHAN_KHU,
      )?.items || [];
      $state.division = groupMenusCustomLink(division) || [];

      const mainFooter = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.MAIN_FOOTER,
      )?.items || [];
      $state.mainFooter = groupMenusCustomLink(mainFooter) || [];

      const footer2 = action.payload.find(
        (e) => e.code === CONSTANTS.MENU_CODE.FOOTER_2,
      )?.items || [];
      $state.footer2 = groupMenusCustomLink(footer2) || [];
    });
  },
});

export const { setActiveHashDivision } = menusSlice.actions;

export default menusSlice.reducer;
