import { Story, Meta } from '@storybook/react';
import React from 'react';

import MapContact from '.';

import dummyContact from 'assets/dataDummy/contact';

export default {
  title: 'Components/templates/MapContact',
  component: MapContact,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const defaultPosition = dummyContact.list[0].position;
  return (
    <MapContact
      defaultPosition={defaultPosition}
      {...dummyContact}
    />
  );
};
