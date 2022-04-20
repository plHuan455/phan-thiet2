import React from 'react';

import useNews from '../hook';

import Container from 'common/Container';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

const menuDummy = [
  {
    label: 'Tin tức',
    value: 'tin-tuc',
  },
  {
    label: 'Sự kiện',
    value: 'su-kien',
  },
  {
    label: 'Hình ảnh',
    value: 'hinh-anh',
  },
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Tài liệu khác',
    value: 'video',
  },
];

// interface TabMenuProps {
//   setRef: (index: number) => void;
//   refIdx: number | undefined;
// }

const Menus: React.FC = () => {
  const { setRef, refIdx } = useNews();
  return (
    <div className="s-menus u-pt-24 u-pb-22">
      <Container>
        <div className="s-menus_wrapper">
          <ul className="s-menus_content">
            {menuDummy?.map((item, idx) => (
              <li
                className={mapModifiers('s-menus_item', refIdx === idx && 'active')}
                key={idx.toString()}
                onClick={() => setRef(idx)}
              >
                <Text modifiers={['400', '14x20', 'raisinBlack', 'uppercase']} content={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

Menus.defaultProps = {
};

export default Menus;
