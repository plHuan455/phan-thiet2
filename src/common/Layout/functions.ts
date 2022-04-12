import dummyFooter from 'assets/dataDummy/footer';
import dummyHeader from 'assets/dataDummy/header';
import { store } from 'store';

const getDataHeaderDefault = () => {
  const state = store.getState();

  const {
    mainHeader: menuHeaderDefault,
  } = state.menus;

  return {
    ...dummyHeader,
    menu: menuHeaderDefault,
  };
};

const getDataFooter = () => {
  const state = store.getState();

  const {
    mainFooter,
    footer2: menuTermFooter,
  } = state.menus;

  return {
    ...dummyFooter,
    menuList: {
      title: mainFooter[0],
      list: mainFooter[0]?.subMenu || [],
    },
    divisionList: {
      title: mainFooter[1],
      list: mainFooter[1]?.subMenu || [],
    },
    serviceList: {
      title: mainFooter[2],
      list: mainFooter[2]?.subMenu || [],
    },
    subMenu: menuTermFooter,
  };
};

export default {
  getDataHeaderDefault,
  getDataFooter,
};
