import React, { useState } from 'react';
import Slider from 'react-slick';

import Image from 'components/atoms/Image';
import CustomModal from 'components/molecules/Modal';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';

interface PopupImageProps {
  isOpen: boolean;
  handleClose: () => void;
  dataImageList: string[];
}

const PopupImage: React.FC<PopupImageProps> = ({
  isOpen,
  handleClose,
  dataImageList,
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
  };

  const imageListSettings = {
    infinite: dataImageList.length > 5,
    arrow: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    focusOnSelect: dataImageList.length > 1,
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
              <span className="o-carousel_dot rect" />
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
              <span className="o-carousel_dot rect" />
            );
          },
        },
      },
    ],
  };

  return (
    <div className="t-popupImage">
      <CustomModal
        isOpen={isOpen}
        handleClose={handleClose}
        modifiers="image"
      >
        {dataImageList.length > 0 ? (
          <div className="t-popupImage_wrapper">
            <div className="t-popupImage_imageShow">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => setNav1(slider)}
                settings={imageShowSettings}
              >
                {dataImageList.map((item, index) => (
                  <div className="t-popupImage_imageShow_item" key={`popupImageShow-${index.toString()}`}>
                    <Image src={item} alt={item} ratio="934x526" />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="t-popupImage_imageList">
              <Carousel
                asNavFor={nav1 as Slider}
                ref={(slider) => setNav2(slider)}
                settings={imageListSettings}
              >
                {dataImageList.map((val, idx) => (
                  <div className="t-popupImage_imageList_item" key={`popupImageList-${idx.toString()}`}>
                    <Image src={val} alt={val} ratio="211x114" />
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

export default PopupImage;
