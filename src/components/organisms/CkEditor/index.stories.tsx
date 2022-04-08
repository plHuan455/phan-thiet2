import { Story, Meta } from '@storybook/react';
import React from 'react';

import CkEditor from '.';

export default {
  title: 'Components/organisms/CkEditor',
  component: CkEditor,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <CkEditor
    content="
    Theo ông Bùi Xuân Huy - tổng giám đốc Tập đoàn Novaland, dự án Novaworld Phan Thiết được UBND Bình Thuận cấp giấy chứng nhận đầu tư lần đầu từ tháng 7/2008. Dự án này đã trải qua khoảng 11 năm thực hiện đền bù, giải tỏa mặt bằng nên đã thu hẹp vòng đời (vòng đời dự án 50 năm).
    </br>
    Theo ông Bùi Xuân Huy - tổng giám đốc Tập đoàn Novaland, dự án Novaworld Phan Thiết được UBND Bình Thuận cấp giấy chứng nhận đầu tư lần đầu từ tháng 7/2008. Dự án này đã trải qua khoảng 11 năm thực hiện đền bù, giải tỏa mặt bằng nên đã thu hẹp vòng đời (vòng đời dự án 50 năm)."
  />
);
