import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import PopupImage from '.';

import imagePopupImage from 'assets/images/popupImage/image_popup_image.png';

export default {
  title: 'Components/templates/PopupImage',
  component: PopupImage,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        height: '100vh',
        background: '#fff',
      }}
    >
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <PopupImage
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        dataImageList={
          [
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
            imagePopupImage,
          ]
        }
      />
    </div>
  );
};
