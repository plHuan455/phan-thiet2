import { Story, Meta } from '@storybook/react';
import React from 'react';

import Selection from '.';

import selectionImage from 'assets/images/selection/image.png';

export default {
  title: 'Components/templates/Selection',
  component: Selection,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ paddingTop: 300 }}>
    <Selection
      title="LỰA CHỌN HOÀN HẢO <br />CHO ĐẦU TƯ, DU LỊCH <br />VÀ NGHỈ DƯỠNG"
      image={selectionImage}
    />
  </div>
);
