import React, { useCallback, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image, { ImageProps } from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface BannerProps {
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
  search?: {
    placeholder?: string;
    onSearch?: (val?: string) => void;
  };
}

export const Search: React.FC<Pick<BannerProps, 'search'>> = ({ search }) => {
  const [val, setVal] = useState('');

  const onKeyDown = useCallback(
    ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter' && search?.onSearch) {
        search.onSearch(val);
      }
    },
    [search, val],
  );

  return (
    <div className="t-banner_search">
      <input
        type="text"
        value={val}
        placeholder={search?.placeholder}
        onChange={({ target: { value } }) => {
          setVal(value);
        }}
        onKeyDown={onKeyDown}
      />
      <button
        type="button"
        onClick={() => search?.onSearch && search?.onSearch(val)}
      >
        <Icon iconName="searchWhite" size="14" />
      </button>
    </div>
  );
};

const Tag: React.FC<Pick<BannerProps, 'tag'>> = ({ tag }) => (
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
              <Text type="p" modifiers={['raisinBlack', '12x20', '400']}>
                {e.text}
              </Text>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

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
    <div className={mapModifiers('t-banner', isLayer && 'layer')}>
      <animated.div className="t-banner_wrapper" style={styles}>
        <Image {...image} ratio="1366x400" />
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
          {search && <Search search={search} />}
          {tag && <Tag tag={tag} />}
        </div>
      </animated.div>
    </div>
  );
};

Banner.defaultProps = {
  isLayer: false,
  title: undefined,
  tag: undefined,
  search: undefined,
};

export default React.memo(Banner);