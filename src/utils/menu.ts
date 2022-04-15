import CONSTANTS from './constants';

import { MenuItem } from 'services/menus/types';

// Recursive Menu
const groupMenus = (menus?: MenuItem[]) => {
  if (!menus) return undefined;
  const recursiveMenus = (
    menuList: MenuItem[],
    parentId: number,
  ): MenuItem[] => {
    const menusGrouped: MenuItem[] = [];
    menuList.forEach((menu) => {
      if (menu.parentId === parentId) {
        const subMenus = recursiveMenus(menuList, menu.id);
        menusGrouped.push(
          subMenus.length > 0
            ? {
              ...menu,
              subMenu: subMenus,
            }
            : {
              ...menu,
            },
        );
      }
    });
    return menusGrouped;
  };
  if (menus.length > 0) {
    const firstLevelParentId = menus.find((menu) => menu.depth === 1)!.parentId;
    return recursiveMenus(menus, firstLevelParentId);
  }
  return [];
};

export default groupMenus;

const returnLinkPrefix = (menu:MenuItem, prefix:string) => {
  if (menu.reference?.slug) {
    return ({
      ...menu,
      reference: {
        slug: `${prefix}/${menu.reference?.slug}`,
      },
    });
  }
  if (menu.link) {
    return ({
      ...menu,
      link: `${prefix}/${menu.reference?.slug}`,
    });
  }
  return menu;
};

export const customLinkMenu = (menu: MenuItem):MenuItem => {
  if (menu.type === 'OneContent\\Subdivision\\Models\\Subdivision') {
    return returnLinkPrefix(menu, CONSTANTS.PREFIX.DIVISION.VI);
  }
  if (menu.type === 'OneContent\\Event\\Models\\Event') {
    return returnLinkPrefix(menu, CONSTANTS.PREFIX.EVENT.VI);
  }
  if (menu.type === 'OneContent\\News\\Models\\News') {
    return returnLinkPrefix(menu, CONSTANTS.PREFIX.NEWS.VI);
  }
  return menu;
};

// Recursive Menu With Custom Link
export const groupMenusCustomLink = (menus?: MenuItem[]) => {
  if (!menus) return undefined;
  const recursiveMenus = (
    menuList: MenuItem[],
    parentId: number,
  ): MenuItem[] => {
    const menusGrouped: MenuItem[] = [];
    menuList.forEach((menu) => {
      if (menu.parentId === parentId) {
        const subMenus = recursiveMenus(menuList, menu.id);
        menusGrouped.push(
          subMenus.length > 0
            ? {
              ...customLinkMenu(menu),
              subMenu: subMenus,
            }
            : {
              ...customLinkMenu(menu),
            },
        );
      }
    });
    return menusGrouped;
  };
  if (menus.length > 0) {
    const firstLevelParentId = menus.find((menu) => menu.depth === 1)!.parentId;
    return recursiveMenus(menus, firstLevelParentId);
  }
  return [];
};
