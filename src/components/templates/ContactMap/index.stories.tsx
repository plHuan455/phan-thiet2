import { Story, Meta } from '@storybook/react';
import React from 'react';

import ContactMap from '.';

import dummyContact from 'assets/dataDummy/contact';

export default {
  title: 'Components/templates/ContactMap',
  component: ContactMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const defaultPosition = dummyContact.list[0].position;
  return (
    <ContactMap
      defaultPosition={defaultPosition}
      {...dummyContact}
    />
  );
};
