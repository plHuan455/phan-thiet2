import React, { MutableRefObject, useLayoutEffect, useRef } from 'react';

import Container from 'common/Container';
import Text from 'components/atoms/Text';
import mapModifiers, { handleScrollCenter, scrollDownNextSection } from 'utils/functions';

export interface MenusProps {
  active?: string;
  refBarWrap?: MutableRefObject<HTMLDivElement | null>;
  refBar?: MutableRefObject<HTMLDivElement | null>;
  menuList?: {
    label: string;
    value: string;
    ref: MutableRefObject<HTMLDivElement | null>;
  }[];
}

const Menus: React.FC<MenusProps> = ({
  active,
  refBar,
  refBarWrap,
  menuList,
}) => {
  const refContent = useRef<HTMLUListElement|null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(refContent, '.s-menus_item-active');
  }, [active]);

  return (
    <div ref={refBarWrap} className="s-menus">
      <div ref={refBar} className="s-menus_bar">
        <Container>
          <div className="s-menus_wrapper">
            <ul ref={refContent} className="s-menus_content">
              {menuList?.map((item, idx) => (
                <li
                  className={mapModifiers('s-menus_item', active === item.value ? 'active' : '')}
                  key={idx.toString()}
                  onClick={() => scrollDownNextSection(item.ref)}
                >
                  <Text modifiers={['400', '14x20', 'raisinBlack', 'uppercase']} content={item.label} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
};

Menus.defaultProps = {
};

export default Menus;
