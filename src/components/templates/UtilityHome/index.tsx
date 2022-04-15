import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import useDeviceQueries from 'hooks/useDeviceQueries';

export interface CarouselItemTypes {
  title?: string;
  description?: string;
  thumbnail?: string;
  icon?: {
    label: string;
    imgSrc: string;
  };
}

interface UtilityHomeProps {
  title?: string;
  listUtilities?: CarouselItemTypes[];
}

const UtilityHome: React.FC<UtilityHomeProps> = ({
  title,
  listUtilities,
}) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();

  const { isDesktop } = useDeviceQueries();

  const settingMain = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
  };

  const settingMenu = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    vertical: !isDesktop,
    verticalSwiping: !isDesktop,
    focusOnSelect: true,
    centerMode: true,
    cssEase: 'ease-in-out',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="t-utilityHome">
      <Container>
        <div className="t-utilityHome_content">
          <div className="t-utilityHome_overlay" />
          <div className="t-utilityHome_title">
            <Title type="h4" modifiers={['700', 'gradientGreen']} content={title} />
          </div>
          {
            listUtilities && listUtilities?.length > 0 && (
              <div className="t-utilityHome_wrapCarousel">
                <div className="t-utilityHome_carouselMain">
                  <Carousel
                    asNavFor={nav2 as Slider}
                    ref={(slider) => {
                      setNav1(slider);
                    }}
                    settings={settingMain}
                  >
                    {
                      listUtilities.map((item, index) => (
                        <div key={`t-utilityHome-${index.toString()}`} className="t-utilityHome_itemMain">
                          <div className="t-utilityHome_itemMain-title">
                            <Text modifiers={['raisinBlack', '700', '20x32']} content={item.title} />
                          </div>
                          <div className="t-utilityHome_itemMain-desc">
                            <Text modifiers={['14x20', '400', 'davyGrey']} content={item.description} />
                          </div>
                          <div className="t-utilityHome_itemMain-thumb">
                            <Image src={item.thumbnail} alt={item.title} ratio="929x479" />
                          </div>
                        </div>
                      ))
                    }
                  </Carousel>
                </div>
                <div className="t-utilityHome_carouselMenu">
                  <Carousel
                    asNavFor={nav1 as Slider}
                    ref={(slider) => setNav2(slider)}
                    settings={settingMenu}
                  >
                    {
                      listUtilities.map((item, index) => (
                        <div
                          key={`t-utilityHome-carouselMenu-${index.toString()}`}
                          className="t-utilityHome_itemMenu"
                        >
                          <div className="t-utilityHome_itemMenu-label">
                            <Text modifiers={['gradientGreen', '14x20', 'center', '700']} content={item.title} />
                          </div>
                          <div className="t-utilityHome_itemMenu-wrapper">
                            <div className="t-utilityHome_itemMenu-border">
                              <div className="t-utilityHome_itemMenu-icon">
                                <Image src={item?.icon?.imgSrc} alt={item?.icon?.label} ratio="1x1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </Carousel>
                </div>
              </div>
            )
          }
        </div>
      </Container>
    </div>
  );
};

UtilityHome.defaultProps = {
  title: '',
  listUtilities: [],
};

export default UtilityHome;
