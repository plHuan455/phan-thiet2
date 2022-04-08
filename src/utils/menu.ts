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
