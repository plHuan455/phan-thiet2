import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import CustomModal from 'components/molecules/Modal';
import Card from 'components/organisms/Card';
import Carousel, { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import useScrollInfinite from 'hooks/useScrollInfinite';

interface PopupImageProps {
  isOpen: boolean;
  handleClose: () => void;
  dataImageList: string[];
  currentImgIdx?: number;
  loading?: boolean;
  handleLoadMore?: () => void;
}

const PopupImage: React.FC<PopupImageProps> = ({
  isOpen,
  handleClose,
  dataImageList,
  currentImgIdx,
  loading,
  handleLoadMore,
}) => {
  const { t } = useTranslation();
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();
  const { setNode } = useScrollInfinite(handleLoadMore);
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
    prevArrow: <PrevArrow customArrow="circleGray" extendClassname={loading ? 'arrow-disable' : ''} />,
    nextArrow: <NextArrow customArrow="circleGray" extendClassname={loading ? 'arrow-disable' : ''} />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrow: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
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
          dots: false,
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
    if (nav1 && currentImgIdx && isOpen) {
      nav1?.slickGoTo(currentImgIdx);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav1]);

  return (
    <div className="t-popupImage">
      <CustomModal
        isOpen={isOpen}
        handleClose={handleClose}
        modifiers="image"
        icon={{
          name: 'closeWhite',
          size: '32',
        }}
      >
        {dataImageList.length > 0 ? (
          <div className={`t-popupImage_wrapper ${loading ? 'loading-block' : ''}`}>
            <div className="t-popupImage_imageShow">
              <Carousel
                asNavFor={nav2 as Slider}
                ref={(slider) => setNav1(slider)}
                settings={imageShowSettings}
              >
                {dataImageList.map((item, index) => (
                  <Card.LoadMore
                    ref={(ref) => (index === dataImageList.length - 1 ? setNode(ref) : undefined)}
                    key={`popupImageShow-${index.toString()}`}
                    loading={loading}
                  >
                    <div className="t-popupImage_imageShow_item">
                      <Image src={item} alt={item} ratio="934x526" />
                    </div>
                  </Card.LoadMore>
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
          <Text modifiers={['24x36', 'white', 'center']}>{t('general.not_found_data')}</Text>
        )}
      </CustomModal>
    </div>
  );
};

PopupImage.defaultProps = {
  currentImgIdx: 0,
  loading: undefined,
  handleLoadMore: undefined,
};

export default PopupImage;
