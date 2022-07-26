import React from 'react';
import { animated, useSpring } from 'react-spring';

import Search, { SearchProps } from './component';

import Heading from 'components/atoms/Heading';
import Image, { ImageProps } from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface BannerProps {
  image: ImageProps;
  isLayer?: boolean;
  title?: string;
  tag?: {
    keyword?: string;
    list?: {
      text: string;
      href: string;
      target?: string;
    }[];
  };
  search?: SearchProps;
}

const Tag: React.FC<Pick<BannerProps, 'tag'>> = ({ tag }) => (tag?.list?.length ? (
  <div className="t-banner_tag">
    <div className="t-banner_tag_keywords">
      <Text type="p" modifiers={['white', '12x20', '400']}>
        {tag?.keyword}
      </Text>
    </div>
    <ul className="t-banner_tag_list">
      {tag?.list?.map((e, i) => (
        <li key={`${e.text}-${i.toString()}`} className="t-banner_tag_item">
          <Link href={e.href} target={e.target}>
            <div className="t-banner_tag_wrap">
              <Text type="p" modifiers={['raisinBlack', '12x20', '400', 'sm']}>
                {e.text}
              </Text>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
) : null);

const Banner: React.FC<BannerProps> = ({
  image,
  isLayer,
  title,
  tag,
  search,
}) => {
  const styles = useSpring({
    from: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      opacity: 0,
    },
    to: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
    },
    config: {
      duration: 750,
    },
  });

  return (
    <div className={mapModifiers('t-banner', isLayer && 'layer', search && 'isSearch')}>
      <animated.div className="t-banner_wrapper" style={styles}>
        <Image {...image} ratio="1366x364" />
        <div className="t-banner_content">
          {title && (
            <div className="t-banner_title">
              <Heading
                type="h1"
                modifiers={['white', '400', 'center', 'uppercase']}
              >
                {title}
              </Heading>
            </div>
          )}
          {search && (
          <Search {...search} />
          )}
          {tag && <Tag tag={tag} />}
        </div>
      </animated.div>
    </div>
  );
};

Banner.defaultProps = {

};

export default React.memo(Banner);
