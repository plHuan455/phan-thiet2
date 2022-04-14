import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotifyProps } from 'components/organisms/Notify';

interface State {
  props?: NotifyProps;
}

const initialState: State = {
  props: undefined,
};

const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    updateNotifyProps($state, action: PayloadAction<NotifyProps>) {
      $state.props = { ...$state.props, ...action.payload };
    },
  },
});

export const { updateNotifyProps } = notifySlice.actions;

export default notifySlice.reducer;
