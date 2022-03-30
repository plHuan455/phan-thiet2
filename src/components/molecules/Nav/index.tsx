import React from 'react';

import Link from 'components/atoms/Link';
import { MenuItem } from 'services/menus/types';

export interface NavProps {
  menu?: MenuItem[];
  handleClick?: (item?: MenuItem) => void;
}

const Nav: React.FC<NavProps> = ({ menu, handleClick }) => (
  <ul className="m-nav">
    {menu?.map((item, index) => (
      <li
        className={`m-nav_item ${item.subMenu?.length ? 'subMenu' : ''}`}
        key={`item-${index.toString()}`}
      >
        <Link
          className="m-nav_link"
          href={item?.reference?.slug || item.link}
          target={item?.target}
          onClick={() => handleClick && handleClick(item)}
        >
          {item.title}
        </Link>
        {item?.subMenu && item?.subMenu?.length > 0 && (
        <ul className="m-nav_inner">
          {item.subMenu?.map((e, i) => (
            <li className="m-nav_subItem" key={`_sub${String(i)}`}>
              <Link
                href={e?.reference?.slug || e.link}
                target={e.target}
                className="m-nav_subLink"
                onClick={() => handleClick && handleClick(e)}
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
        )}
      </li>
    ))}
  </ul>
);

export default Nav;
