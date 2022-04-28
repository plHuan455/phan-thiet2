import React, { useRef } from 'react';
import { FacebookShareButton } from 'react-share';

import useAnimation from './animation';

import balloonBottom from 'assets/images/detail/balloon_bottom.png';
import balloonTop from 'assets/images/detail/balloon_top.png';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import useScrollAnimate from 'hooks/useScrollAnimation';

export interface DetailProps {
  timeLeave?: string;
  dateLeave?: string;
  label?: string;
  title?: string;
  content?: string;
  tags?: {
    href?: string;
    name?: string;
  }[];
  textTopic?: string;
  textShare?: string;
  hasRelated?: boolean;
  titleRelated?: string;
  reactRelated?: React.ReactNode;
}

const Detail: React.FC<DetailProps> = ({
  timeLeave,
  dateLeave,
  label,
  title,
  content,
  tags,
  textTopic,
  textShare,
  hasRelated,
  titleRelated,
  reactRelated,
}) => {
  const ballon1Ref = useRef<HTMLDivElement>(null);
  const ballon2Ref = useRef<HTMLDivElement>(null);
  const isScrollToBallon1 = useScrollAnimate(ballon1Ref);
  const isScrollToBallon2 = useScrollAnimate(ballon2Ref);
  const { animated, ballonAnimate } = useAnimation();

  return (
    <div className="t-detail">
      <animated.div className="t-detail_balloonTop" ref={ballon1Ref} style={isScrollToBallon1 ? ballonAnimate : {}}>
        <Image src={balloonTop} ratio="1x1" alt="balloon" />
      </animated.div>
      <Container>
        <Animate type="fadeInUp" extendClassName="t-detail_content">
          <div className="t-detail_sub">
            <ul>
              {timeLeave && (
              <li>
                <Text modifiers={['12x20', 'davyGrey']} content={timeLeave} />
              </li>
              )}
              <li>
                <Text modifiers={['12x20', 'davyGrey']} content={dateLeave} />
              </li>
              <li>
                <Text modifiers={['12x20', 'gradientGreen']} content={label} />
              </li>
            </ul>
          </div>
          <div className="t-detail_heading u-mt-12">
            <div className="t-detail_title">
              <Heading type="h4" modifiers={['700', 'gradientGreen', 's015']} content={title} />
            </div>
            <div className="t-detail_share">
              <div className="t-detail_share_text">
                <Heading type="h6" modifiers={['s015', 'raisinBlack']}>{`${textShare}:`}</Heading>
              </div>
              <ul>
                <li>
                  <FacebookShareButton url={window.location.href}>
                    <Icon iconName="facebook" size="24" />
                  </FacebookShareButton>
                </li>
                <li>
                  <div
                    className="zalo-share-button"
                    data-oaid="579745863508352884"
                    data-layout="icon-text"
                    data-customize="true"
                    data-href={window.location.href}
                  >
                    <Icon iconName="zalo" size="24" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="t-detail_content u-mt-30 u-mt-lg-64">
            <Text modifiers={['16x28', 'justify', 'davyGrey']} type="div" content={content} />
          </div>
          {tags && tags?.length > 0 && (
            <div className="t-detail_tags u-mt-24 u-mt-lg-56">
              <div className="t-detail_tags_text">
                <Text modifiers={['14x20', 'davyGrey']}>
                  {`${textTopic}:`}
                </Text>
              </div>
              <ul>
                {tags?.map((item, index) => (
                  <li key={`tag-${index.toString()}`}>
                    <Link className="t-detail_tags_link" href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Animate>
      </Container>
      {hasRelated && (
      <div className="t-detail_related u-pt-80 u-pt-lg-120">
        <animated.div className="t-detail_balloonBottom" ref={ballon2Ref} style={isScrollToBallon2 ? ballonAnimate : {}}>
          <Image src={balloonBottom} ratio="1x1" alt="balloon" />
        </animated.div>
        <Container>
          <Heading type="h4" modifiers={['700', 'gradientGreen', 's015', 'center', 'uppercase']} content={titleRelated} />
          <div className="t-detail_carousel u-mt-32">
            {reactRelated}
          </div>
        </Container>
      </div>
      )}
    </div>
  );
};

export default Detail;
