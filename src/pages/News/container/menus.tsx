import React from 'react';

import Container from 'common/Container';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface TagProps {
  label: string
  value: string
}
interface MenuTagProps {
  dataList: TagProps[]
  active?: number;
  handleChangeTag?: (idx?: number) => void
}

const Menus: React.FC<MenuTagProps> = ({ dataList, active, handleChangeTag }) => (
  <div className="s-menus u-pt-24 u-pb-22">
    <Container>
      <div className="s-menus_wrapper">
        <ul className="s-menus_content">
          {dataList?.map((item, idx) => (
            <li
              className={mapModifiers('s-menus_item', active === idx && 'active')}
              key={idx.toString()}
              onClick={() => handleChangeTag && handleChangeTag(idx)}
            >
              <Text modifiers={['400', '14x20', 'raisinBlack', 'uppercase']} content={item.label} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </div>
);

Menus.defaultProps = {
  active: undefined,
  handleChangeTag: undefined,
};

export default Menus;
