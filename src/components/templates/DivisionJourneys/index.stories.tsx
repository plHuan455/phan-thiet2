import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionJourneys from '.';

import divisionJourneysData from 'assets/dataDummy/divisionJourneys';

export default {
  title: 'Components/templates/DivisionJourneys',
  component: DivisionJourneys,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ minHeight: '1000px' }}>
    <DivisionJourneys
      {...divisionJourneysData}
      textNotFound="Không tìm thấy dữ liệu"
      title="HÀNH TRÌNH TRẢI NGHIỆM SIÊU THÀNH PHỐ BIỂN"
      idActive={1}
      tabs={[
        {
          name: 'Công viên biển Miami Bikini Beach',
          id: 1,
        },
        {
          name: 'Công viên giải trí NovaDreams Adventure Park',
          id: 2,
        },
      ]}
    />
  </div>
);
