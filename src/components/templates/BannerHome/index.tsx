import React from 'react';

import Container from 'common/Container';
import Image, { ImageProps } from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Carousel from 'components/organisms/Carousel';

export interface CardBannerProps {
  srcImgMain?: string;
  alt?: string;
  srcImgSub?: string;
  srcLayer?: string;
  title?: string;
}

export const CardBanner:React.FC<CardBannerProps> = ({
  alt,
  srcImgMain,
  srcImgSub,
  srcLayer,
  title,
}) => (
  <div className="m-cardBanner">
    <div className="m-cardBanner_imgMain">
      <Image src={srcImgMain} alt={alt} ratio="1x1" />
    </div>
    <div className="m-cardBanner_title">
      <Text content={title} modifiers={['700', 'copper', 's015', '20x32']} />
    </div>
    <div className="m-cardBanner_imgSub">
      <img src={srcImgSub} alt={alt || ''} />
    </div>
    {srcLayer && (
    <div className="m-cardBanner_layer">
      <img src={srcLayer} alt={alt || ''} />
    </div>
    )}
  </div>
);

export interface BannerHomeProps {
  banner?: ImageProps;
  list?: CardBannerProps[];
  description?: string;
}

const setting = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot rect" />
    );
  },
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const BannerHome: React.FC<BannerHomeProps> = ({
  banner,
  list,
  description,
}) => (
  <div className="t-bannerHome">
    <div className="t-bannerHome_image">
      <Image
        {...banner}
        ratio="1365x1290"
      />
    </div>
    <Animate type="fadeInUp" extendClassName="t-bannerHome_content">
      <Container>
        {!!list?.length && (
          <div className="t-bannerHome_list">
            <Carousel settings={setting}>
              {list.map((x, i) => (
                <div className="t-bannerHome_card" key={`card-${i.toString()}`}>
                  <CardBanner
                    {...x}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
        <div className="t-bannerHome_description">
          <Text modifiers={['s015', 'center', 'davyGrey', '20x32']} content={description} />
        </div>
      </Container>
    </Animate>
  </div>
);

export default React.memo(BannerHome);
