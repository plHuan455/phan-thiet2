import CONSTANTS from './constants';

import { LanguagePrefix } from 'common/Language';
import i18n from 'i18n';
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
  const prefixLang = i18n.language === 'vi' ? '' : `/${i18n.language}`;
  if (menu.reference?.slug) {
    return ({
      ...menu,
      reference: {
        slug: `${prefixLang}/${prefix}/${menu.reference?.slug}`,
      },
    });
  }
  return menu;
};

const returnLink = (menu:MenuItem):MenuItem => {
  const prefixLang = i18n.language === 'vi' ? '/' : `/${i18n.language}/`;

  if (menu.reference?.slug === '/') {
    return ({
      ...menu,
      reference: {
        slug: i18n.language === 'vi' ? '/' : `/${i18n.language}`,
      },
    });
  }

  if (menu.reference?.slug) {
    return ({
      ...menu,
      reference: {
        slug: `${prefixLang}${menu.reference?.slug}`,
      },
    });
  }

  return menu;
};

export const customLinkMenu = (menu: MenuItem):MenuItem => {
  const keyLang = i18n.language.toUpperCase() as LanguagePrefix;

  if (menu.type === 'OneContent\\Subdivision\\Models\\Subdivision') {
    return returnLinkPrefix(menu,
      CONSTANTS.PREFIX.DIVISION[keyLang]);
  }

  if (menu.type === 'OneContent\\Event\\Models\\Event') {
    return returnLinkPrefix(menu, CONSTANTS.PREFIX.EVENT[keyLang]);
  }

  if (menu.type === 'OneContent\\News\\Models\\News') {
    return returnLinkPrefix(menu, CONSTANTS.PREFIX.NEWS[keyLang]);
  }

  return returnLink(menu);
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
