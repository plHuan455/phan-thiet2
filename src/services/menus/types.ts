export type Reference = {
  slug: string;
}

export type MenuItem = {
  subMenu?: MenuItem[];
} & MenuItemData;

export type MenuDataTypes = {
  code: string;
  items: MenuItem[];
}
