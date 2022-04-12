import React from 'react';

import Link from 'components/atoms/Link';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

interface InternalNavItemTypes {
  isChild?: boolean;
  idExpand?: Array<number | undefined>;
  active?: boolean;
  pageSlug?: string;
  pathname: string;
  handleClickExpand?: (item: MenuItem) => void;
  handleCloseMenu?: () => void;
}

export interface NavItemProps extends MenuItem, InternalNavItemTypes { }

const recursiveMenuActive = (item: MenuItem, pathname: string, cb: () => void) => {
  const link = item.reference?.slug || item?.link;
  if (`/${link}` === pathname) {
    cb();
  } else if (link === '/' && pathname === '/') {
    cb();
  }
  if (item.subMenu) {
    item.subMenu.forEach((x) => {
      recursiveMenuActive(x, pathname, cb);
    });
  }
};

export const checkActiveMenu = (item: MenuItem, pathname: string) => {
  let flag = false;
  recursiveMenuActive(item, pathname, () => {
    flag = true;
  });
  return flag;
};

export const NavItem: React.FC<NavItemProps> = ({
  isChild,
  idExpand,
  active,
  pageSlug,
  pathname,
  handleClickExpand,
  handleCloseMenu,
  ...props
}) => (
  <li
    className={mapModifiers(
      'menu-item',
      isChild && 'isChild',
      !isChild && checkActiveMenu(props, pathname) && 'active',
      props.subMenu?.length ? 'hasChild' : undefined,
      idExpand && idExpand.includes(props.id) && 'expand',
    )}
  >
    {!props.subMenu?.length && (
      <Link
        onClick={handleCloseMenu}
        href={props.reference?.slug || props.link}
        target={props.target}
        className="menu-item_link"
      >
        {props.title}
      </Link>
    )}
    {props.subMenu?.length && (
      <span
        onClick={(e) => {
          e.stopPropagation();
          if (handleClickExpand) handleClickExpand(props);
        }}
        className="menu-item_link"
      >
        {props.reference?.slug || props.link ? (
          <Link
            onClick={handleCloseMenu}
            href={props.reference?.slug || props.link}
            target={props.target}
            className="menu-item_title"
          >
            {props.title}
          </Link>
        ) : (
          props.title
        )}
      </span>
    )}
    {!isChild && <span className="menu-item_line" />}
    {props.subMenu?.length && (
      <>
        <div className="menu-item_wrap">
          <ul className="menu-item_list">
            {props.subMenu.map((x, i) => (
              <NavItem
                {...x}
                idExpand={idExpand}
                handleClickExpand={handleClickExpand}
                handleCloseMenu={handleCloseMenu}
                key={i.toString()}
                isChild
                pageSlug={pageSlug}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      </>
    )}
  </li>
);

export interface NavProps extends InternalNavItemTypes {
  menu?: MenuItem[];
  pageSlug?: string;
  pathname: string;
  variant?: 'default' | 'subdivisions';
}

const Nav: React.FC<NavProps> = ({
  menu,
  pageSlug,
  pathname,
  variant,
  ...props
}) => (
  <ul className={mapModifiers('menu', variant)}>
    {menu?.map((item, index) => (
      <NavItem
        pageSlug={pageSlug}
        pathname={pathname}
        key={index.toString()}
        {...item}
        {...props}
      />
    ))}
  </ul>
);

export default React.memo(Nav);
