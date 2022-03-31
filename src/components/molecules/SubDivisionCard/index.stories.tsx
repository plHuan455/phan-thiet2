import { Story, Meta } from '@storybook/react';
import React from 'react';

import SubDivisionCard from '.';

import img from 'assets/images/subDivision/image.png';

export default {
  title: 'Components/molecules/SubDivisionCard',
  component: SubDivisionCard,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ backgroundColor: '#f5ebdf', padding: 10 }}>
    <div style={{ maxWidth: 364 }}>
      <SubDivisionCard
        imgSrc={img}
        title="The Florida"
        description="Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị .."
      />
    </div>
  </div>
);
