/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface CollectionProps {
  title: string;
  color?: string;
  button: LinkTypes;
  thumbnail: string;
}

const Collection: React.FC<CollectionProps> = ({
  title, color, button, thumbnail,
}) => (
  <Link href={button.url} target={button.target}>
    <div className="m-collection">
      <div className="m-collection_title" style={{ color }}>
        <Heading type="h6" content={title} modifiers={['400', 's015', 'inherit']} />
      </div>
      <div className="m-collection_thumbnail">
        <img alt={title} src={thumbnail} />
        <div className="m-collection_link">
          <div className="m-collection_wrapLink">
            <Icon iconName="arrowRightCopper" size="16" />
            <Text modifiers={['12x18', '700', 'white', 'center']} content={button.text} />
          </div>
        </div>
      </div>
      <div className="m-collection_shadow" />
    </div>
  </Link>
);

Collection.defaultProps = {
};

export default Collection;
