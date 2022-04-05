import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Notify from '.';

export default {
  title: 'Components/organisms/Notify',
  component: Notify,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>Open</button>
      <Notify
        isOpen={isOpen}
        handleConfirm={() => setIsOpen(false)}
        title="Đăng ký thành công"
        message="Cảm ơn Quý Khách đã nhận thông tin dự án NovaWorld Phan Thiet. Novaland sẽ liên hệ trong thời gian sớm nhất."
        btnText="Xác nhận"
      />
    </>
  );
};
