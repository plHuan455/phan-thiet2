import React, { PropsWithChildren, useMemo } from 'react';
import { Settings } from 'react-slick';

import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

export type FlatListProps<T> = {
  settings?: Settings;
  data?: T[];
  render: (item: T, index?: number)=> any;
  innerDots?: boolean;
}

const FlatList = <T, >({
  settings,
  data,
  render,
  children,
  innerDots,
}:PropsWithChildren<FlatListProps<T>>) => {
  const settingSelf = useMemo((): Settings => ({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: false,
    cssEase: 'ease-in-out',
    customPaging() {
      return (
        <span className="o-carousel_dot rect" />
      );
    },
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  }), []);

  return (
    <div className="c-flatList">
      {children}

      {data && data?.length > 0 && (
        <Animate type="fadeInUp">
          <Carousel
            innerDots={innerDots}
            settings={{
              ...settingSelf,
              ...(settings || {}),
            }}
          >
            {data.map((x, i) => (
              <React.Fragment key={`item-${i.toString()}`}>
                {render(x, i)}
              </React.Fragment>
            ))}
          </Carousel>
        </Animate>
      )}
    </div>
  );
};

export default FlatList;
