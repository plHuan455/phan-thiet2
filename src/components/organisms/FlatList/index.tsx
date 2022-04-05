/* eslint-disable react/require-default-props */
import React, { PropsWithChildren, useMemo } from 'react';
import { Settings } from 'react-slick';

import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

type FlatListProps<T> = {
  settings?: Settings;
  data?: T[];
  render: (item: T)=> any;
}

const FlatList = <T, >({
  settings,
  data,
  render,
}:PropsWithChildren<FlatListProps<T>>) => {
  const settingSelf = useMemo(() => ({
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

  if (!data?.length) return null;

  return (
    <div className="o-flatList">
      <Carousel
        settings={{
          ...settingSelf,
          ...(settings || {}),
        }}
      >
        {data.map((x, i) => (
          <React.Fragment key={`item-${i.toString()}`}>
            {render(x)}
          </React.Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default FlatList;
