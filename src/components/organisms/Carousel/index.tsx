/* eslint-disable react/require-default-props */
import React from 'react';
import ReactSlick, { CustomArrowProps, Settings } from 'react-slick';

import mapModifiers from 'utils/functions';

export interface CarouselProps {
  settings?: Settings;
  asNavFor?: ReactSlick;
  ref?: React.RefObject<ReactSlick>;
  children: React.ReactNode;
  centerMode?: boolean;
  innerDots?: boolean;
}

interface ArrowProps extends CustomArrowProps {
  extendClassname?: string;
  customArrow?: 'circleWhite' | 'default';
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className, onClick, extendClassname = '', customArrow = 'default',
}) => (
  <div
    className={`o-carousel_arrow o-carousel_arrow_prev ${customArrow} ${className} ${extendClassname}`}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<ArrowProps> = ({
  className, onClick, extendClassname = '', customArrow = 'default',
}) => (
  <div
    className={`o-carousel_arrow o-carousel_arrow_next ${customArrow} ${className} ${extendClassname}`}
    onClick={onClick}
  />
);

const Carousel = React.forwardRef<ReactSlick, CarouselProps>(
  ({
    settings, children, asNavFor, centerMode, innerDots,
  }, ref) => (
    <div
      className={mapModifiers('o-carousel',
        centerMode && 'centerMode',
        settings?.arrows && 'hasArrow',
        innerDots ? 'innerDots' : 'outDots')}
    >
      <ReactSlick
        centerPadding="0"
        {...settings}
        {...(asNavFor && { asNavFor })}
        ref={ref}
      >
        {React.Children.map(children, (item) => (
          <div className="o-carousel_wrap">
            <div className="o-carousel_item">{item}</div>
          </div>
        ))}
      </ReactSlick>
    </div>
  ),
);

Carousel.defaultProps = {
  settings: {
    infinite: true,
    dots: true,
    dotsClass: 'o-carousel_dots',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: 'ease-in-out',
  },
};

PrevArrow.defaultProps = {
  extendClassname: undefined,
  customArrow: undefined,
};

NextArrow.defaultProps = {
  extendClassname: undefined,
  customArrow: undefined,
};

export default Carousel;
