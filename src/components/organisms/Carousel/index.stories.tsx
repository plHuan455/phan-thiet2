import { Story, Meta } from '@storybook/react';
import React from 'react';

import Carousel, { NextArrow, PrevArrow } from '.';

export default {
  title: 'Components/organisms/Carousel',
  component: Carousel,
  argTypes: {},
} as Meta;

const styleExample = {
  height: 400,
  backgroundColor: '#ccc',
};

const setting = {
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot" />
    );
  },
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

export const normal: Story = () => (
  <div style={{ height: '100vh', maxWidth: '1200px', margin: ' 0 auto' }}>
    <Carousel settings={setting} innerDots>
      <div style={styleExample}>a</div>
      <div style={styleExample}>b</div>
      <div style={styleExample}>c</div>
      <div style={styleExample}>d</div>
    </Carousel>
  </div>
);
