import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Journeys from '.';

import dataJourneys from 'assets/dataDummy/journeys';

export default {
  title: 'Components/templates/Journeys',
  component: Journeys,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Router>
    <Journeys
      title="HÀNH TRÌNH TRẢI NGHIỆM SECOND HOME"
      titleField="Các mẫu nhà"
      {...dataJourneys}
    />
  </Router>
);
