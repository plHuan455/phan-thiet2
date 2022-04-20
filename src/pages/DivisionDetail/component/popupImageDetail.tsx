import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import CustomModal from 'components/molecules/Modal';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';

interface PopupImageDetailProps {
  isOpen: boolean;
  handleClose: () => void;
  dataList: CardLayerProps[];
  slideActive: number;
}

const PopupImageDetail: React.FC<PopupImageDetailProps> = ({
  isOpen,
  handleClose,
  dataList,
  slideActive,
}) => {
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const imageShowSettings = {
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: false,
    swipe: false,
    draggable: false,
    fade: true,
  };

  const imageListSettings = {
    infinite: dataList.length > 5,
    arrow: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    focusOnSelect: dataList.length > 1,
    prevArrow: <PrevArrow customArrow="circleGray" />,
    nextArrow: <NextArrow customArrow="circleGray" />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrow: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          cssEase: 'ease-in-out',
          customPaging() {
            return (
              <span className="o-carousel_dot circle" />
            );
          },
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          cssEase: 'ease-in-out',
          customPaging() {
            return (
              <span className="o-carousel_dot circle" />
            );
          },
        },
      },
    ],
  };

  useEffect(() => {
    if (nav2 && slideActive) {
      nav2.slickGoTo(slideActive);
    }
  }, [slideActive, nav2]);

  return (
    <div className="t-popupImageDetail">
      <CustomModal
        isOpen={isOpen}
        handleClose={handleClose}
        modifiers="image"
        icon={{
          name: 'closeWhite',
          size: '32',
        }}
      >
        {dataList.length > 0 ? (
          <div className="t-popupImageDetail_wrapper">
            <div className="t-popupImageDetail_imageShow">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => setNav1(slider)}
                settings={imageShowSettings}
              >
                {dataList.map((item, index) => (
                  <div className="t-popupImageDetail_imageShow_item" key={`popupImageDetailShow-${index.toString()}`}>
                    <Image src={item.thumbnail} alt={item.title} ratio="934x526" />
                    <div className="t-popupImageDetail_imageShow-content">
                      <Text modifiers={['16x28', '700', 'white']} content={item.title} />
                      <div className="u-mt-10 u-mt-md-16 t-popupImageDetail_imageShow-desc">
                        <Text modifiers={['16x28', '400', 'white']} content={item.description} />
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="t-popupImageDetail_imageList">
              <Carousel
                asNavFor={nav1 as Slider}
                ref={(slider) => setNav2(slider)}
                settings={imageListSettings}
              >
                {dataList.map((val, idx) => (
                  <div className="t-popupImageDetail_imageList_item" key={`popupImageDetailList-${idx.toString()}`}>
                    <Image src={val.thumbnail} alt={val.title} ratio="211x114" />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          <></>
        )}
      </CustomModal>
    </div>
  );
};

export default PopupImageDetail;
