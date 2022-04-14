import React, { useRef, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Container from 'common/Container';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import useClickOutside from 'hooks/useClickOutside';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

export interface HeaderSubProps {
  logo?: LinkTypes;
  menu?: MenuItem[];
  isScroll?: boolean;
}

const HeaderSub:React.FC<HeaderSubProps> = ({
  logo,
  menu,
  isScroll,
}) => {
  const [active, setActive] = useState(false);
  const menuRef = useRef<HTMLDivElement|null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useClickOutside(menuRef, () => {
    if (active) setActive(false);
  });

  const findActive = useMemo(() => (
    menu?.find((x) => `/${x.reference?.slug || x.link}` === pathname)
  ), [pathname, menu]);

  return (
    <div className={mapModifiers('t-headerSub', isScroll && 'isScroll')}>
      <Container>
        <div className="t-headerSub_wrap">
          <div className="t-headerSub_left">
            <div className="t-headerSub_btnGoBack" onClick={() => navigate(-1)}>
              <Icon iconName="arrowLeftWhite" size="16" />
            </div>
            {logo && (
              <Link className="t-headerSub_imageLogo" href={logo?.url} target={logo?.target}>
                <Image src={logo?.icon} ratio="78x25" />
              </Link>
            )}
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
                {menu?.map((item, index) => (
                  <li className="t-headerSub_menu_item">
                    <Link
                      key={`index-${index.toString()}`}
                      href={item.reference?.slug || item.link}
                      target={item.target}
                      onClick={() => setActive(false)}
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
