/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import DivisionJourneys from '.';

import divisionJourneysData from 'assets/dataDummy/divisionJourneys';

export default {
  title: 'Components/templates/DivisionJourneys',
  component: DivisionJourneys,
  argTypes: {
    loading: {
      type: 'boolean',
    },
  },
} as Meta;

export const normal: Story = ({
  loading,
}) => {
  const [slugActive, setSlugActive] = useState<string|undefined>('nova-world-center');

  return (
    <div style={{ minHeight: '1000px' }}>
      <DivisionJourneys
        {...divisionJourneysData}
        loading={loading}
        textNotFound="Không tìm thấy dữ liệu"
        slugActive={slugActive}
        handleClick={(slug) => setSlugActive(slug)}
        title="HÀNH TRÌNH TRẢI NGHIỆM SIÊU THÀNH PHỐ BIỂN"
      />
    </div>
  );
};
