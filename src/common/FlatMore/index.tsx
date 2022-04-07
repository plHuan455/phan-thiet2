import React, { PropsWithChildren } from 'react';

import FlatList, { FlatListProps } from 'common/FlatList';
import Heading, { TextStyle } from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export type FlatMoreProps<T> = {
  title: {
    text: string;
    modifiers?: TextStyle;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  };
  link?: {
    href?: string;
    target?: string;
    text?: string;
  };
} & FlatListProps<T>;

const FlatMore = <T, >({
  title,
  link,
  children,
  data,
  ...props
}:PropsWithChildren<FlatMoreProps<T>>) => (
  <div className="c-flatMore">
    <div className={`u-mb-32 ${link ? 'd-flex justify-content-between align-items-center' : ''}`}>
      <Heading {...title} content={title.text} />
      {link && (
        <div className="d-lg-block d-none">
          <Link href={link.href} target={link.target}>
            <div className="animate animate-arrowSlide d-flex align-items-center">
              <Text modifiers={['14x20', '400', 'copper']} content={link.text} />
              <div className="u-ml-8" />
              <Icon iconName="arrowRightCopper" size="16" />
            </div>
          </Link>
        </div>
      )}
    </div>

    <FlatList data={data} {...props}>
      {children}
    </FlatList>

    <div className="d-flex justify-content-center d-lg-none u-mt-32">
      <Link href={link?.href} target={link?.target}>
        <div className="animate animate-arrowSlide d-flex align-items-center">
          <Text modifiers={['14x20', '400', 'copper']} content={link?.text} />
          <div className="u-ml-8" />
          <Icon iconName="arrowRightCopper" size="16" />
        </div>
      </Link>
    </div>
  </div>
  );

export default FlatMore;
