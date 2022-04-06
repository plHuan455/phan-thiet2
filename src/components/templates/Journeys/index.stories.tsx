import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Journeys, { VerticalJourneys } from '.';

export default {
  title: 'Components/templates/Journeys',
  component: Journeys,
  argTypes: {},
} as Meta;

export const verticalJourneys: Story = () => (
  <div
    style={{
      height: '100vh',
      maxWidth: '400px',
      background: '#8c8c8c',
      paddingTop: '50px',
    }}
  >
    <Router>
      <VerticalJourneys
        dataListVertical={[
          {
            title: 'PGA GOLFVILLAS',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'WAIKIKI',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'SANTA MONCA',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'BOUTIQUE HOTEL',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'PGA GOLFVILLAS',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'WAIKIKI',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
          {
            title: 'SANTA MONCA',
            desc: 'Đặc điểm độc đáo của Waikiki Novaland Phan Thiet là những căn villa dạng sky desk',
            btnText: 'Tham quan các mẫu nhà',
            slug: '/',
            target: '_blank',
          },
        ]}
      />
    </Router>
  </div>
);

export const normal: Story = () => (
  <Journeys />
);
