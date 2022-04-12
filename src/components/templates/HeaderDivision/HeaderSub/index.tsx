import React, { useRef, useState, useMemo } from 'react';

import Container from 'common/Container';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import useClickOutside from 'hooks/useClickOutside';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

export interface HeaderSubProps {
  backUrl?: LinkTypes;
  logoUrl?: LinkTypes;
  logo?: string;
  subMenu?: MenuItem[];
  isScroll?: boolean;
  pathname?: string;
}

const HeaderSub:React.FC<HeaderSubProps> = ({
  backUrl,
  logo,
  subMenu,
  logoUrl,
  isScroll,
  pathname,
}) => {
  const [active, setActive] = useState(false);
  const menuRef = useRef<HTMLDivElement|null>(null);

  useClickOutside(menuRef, () => {
    if (active) setActive(false);
  });

  const findActive = useMemo(() => (
    subMenu?.find((x) => `/${x.reference?.slug || x.link}` === pathname)
  ), [pathname, subMenu]);

  return (
    <div className={mapModifiers('t-headerSub', isScroll && 'isScroll')}>
      <Container>
        <div className="t-headerSub_wrap">
          <div className="t-headerSub_left">
            <Link className="t-headerSub_btnGoBack" href={backUrl?.url} target={backUrl?.target}>
              <Icon iconName="arrowLeftWhite" size="16" />
            </Link>
            <Link className="t-headerSub_imageLogo" href={logoUrl?.url} target={logoUrl?.target}>
              <Image src={logo} ratio="184x59" />
            </Link>
          </div>
          <div className="t-headerSub_right">
            <div ref={menuRef} className="t-headerSub_menu">
              <div
                onClick={() => setActive(!active)}
                className={`t-headerSub_active ${active ? 'active' : ''}`}
              >
                <span>
                  {findActive?.title}
                </span>
                <Icon iconName="chevronDownWhite" size="16" />
              </div>
              <ul
                className={`t-headerSub_menu_list ${active ? 'active' : ''}`}
              >
                {subMenu?.map((item, index) => (
                  <li className="t-headerSub_menu_item">
                    <Link
                      key={`index-${index.toString()}`}
                      href={item.reference?.slug || item.link}
                      target={item.target}
                      className="t-headerSub_menu_itemLink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderSub;
