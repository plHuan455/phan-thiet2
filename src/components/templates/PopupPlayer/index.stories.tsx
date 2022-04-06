import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import PopupPlayer from '.';

export default {
  title: 'Components/templates/PopupPlayer',
  component: PopupPlayer,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open Popup</button>
      <PopupPlayer
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </>
  );
};
