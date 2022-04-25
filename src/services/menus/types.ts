export type MenuItemData = {
  id: number;
  menuId: number;
  title: string;
  link?: string;
  type: string;
  referenceId?: number;
  cssClass?: string;
  icon?: string;
  target: string;
  parentId: number;
  lft: number;
  rgt: number;
  depth: number;
  createdAt: string;
  updatedAt: string;
  reference?: Reference;
  importantActive?: boolean;
}

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
