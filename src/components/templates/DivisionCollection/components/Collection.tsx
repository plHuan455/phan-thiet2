import React from 'react';

import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text, { TextStyle } from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface CollectionProps {
  title: {
    text: string;
    modifiers?: TextStyle
  }
  btnMore: {
    text: string;
    href?: string;
    target?: string
    backgroundColor?: ColorStyle
  }
  thumbnail: string
}

const Collection: React.FC<CollectionProps> = ({ title, btnMore, thumbnail }) => (
  <div className="m-collection">
    <div className="m-collection_title">
      <Text content={title.text} modifiers={title.modifiers} />
    </div>
    <div className="m-collection_image">
      <div className="position-relative">
        <Link href={btnMore.href} target={btnMore.target}>
          <img alt={title.text} src={thumbnail} />
        </Link>
        <div className="m-collection_link">
          <Link href={btnMore.href} target={btnMore.target}>
            <button className="m-collection_link_btn" type="button">
              <Icon iconName="arrowRightCopper" size="16" />
            </button>
          </Link>
          <div className={mapModifiers('m-collection_link_text', btnMore.backgroundColor)}>
            <Link href={btnMore.href} target={btnMore.target}>
              <Text modifiers={['12x18', '700', 'white']} content={btnMore.text} />
            </Link>
          </div>
        </div>
      </div>
      <div className="m-collection_shadow" />
    </div>

  </div>
);

Collection.defaultProps = {
};

export default Collection;
