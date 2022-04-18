/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import PopupPlayer from '.';

export default {
  title: 'Components/templates/PopupPlayer',
  component: PopupPlayer,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open Popup</button>
      <PopupPlayer
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        videoType="1"
        theme="linear-gradient(180deg, rgb(0, 168, 168) 0%, rgb(2, 116, 127) 100%)"
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // src="https://www.youtube.com/watch?v=NuWAl7-Vkwk&list=RDNuWAl7-Vkwk&start_radio=1"
      />
    </>
  );
};

export const youtube: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open Popup</button>
      <PopupPlayer
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        videoType="2"
        theme="linear-gradient(180deg, rgb(0, 168, 168) 0%, rgb(2, 116, 127) 100%)"
        // src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        src="https://www.youtube.com/watch?v=NuWAl7-Vkwk&list=RDNuWAl7-Vkwk&start_radio=1"
      />
    </>
  );
};
