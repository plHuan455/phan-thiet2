import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Card from '.';

import Container from 'common/Container';

export default {
  title: 'Components/organisms/Card',
  // component: Card,
  argTypes: {
    pd: {
      control: {
        type: 'select',
        options: ['pd-6x20', 'pd-8x16', 'pd-24x16', 'pd-6x16'],
      },
      defaultValue: 'pd-6x20',
    },
  },
} as Meta;

export const player: Story = () => (
  <div style={{ maxWidth: 391, background: 'gray', padding: 20 }}>
    <Card.Player
      thumbnail="https://source.unsplash.com/random"
      tag={{
        text: 'The Kingdom',
        url: '/',
      }}
      title="OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET"
      dateTime="2 giờ trước"
    />
  </div>
);

export const event: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Event
        thumbnail="https://source.unsplash.com/random"
        tag={{
          text: 'The Kingdom',
          url: '',
        }}
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        endTime="2022-04-10T07:47:00.595"
        button={{
          url: '/',
          text: 'Xem chi tiết',
        }}
        summary={[
          {
            iconName: 'clock',
            text: '13:30 - 17:00',
          },
          {
            iconName: 'calendar',
            text: '30/04/2022',
          },
          {
            iconName: 'location',
            text: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
          },
        ]}
      />
    </div>
  </BrowserRouter>
);

export const document: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Normal
        thumbnail="https://source.unsplash.com/random"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        href="/"
        tag={{
          text: 'The Kingdom',
          url: '/',
        }}
        dateTime="2 giờ trước"
        url={{
          text: 'Tải xuống',
          iconName: 'downloadOrange',
          animation: 'download',
        }}
      />
    </div>
  </BrowserRouter>
);

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Normal
        thumbnail="https://source.unsplash.com/random"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        href="/"
        tag={{
          text: 'The Kingdom',
          url: '/',
        }}
        dateTime="2 giờ trước"
        url={{
          text: 'Xem thêm',
          iconName: 'arrowRightCopper',
          animation: 'arrow',
        }}
      />
    </div>
  </BrowserRouter>
);

export const division: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Division
        imgSrc="https://source.unsplash.com/random"
        title="The Florida"
        description="Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị .."
      />
    </div>
  </BrowserRouter>
);

export const feeback: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: '#999', marginTop: 100 }}>
      <Card.Feedback
        imgSrc="https://source.unsplash.com/random"
        job="DOANH NHÂN"
        name="Nguyễn Thanh Bình"
        comment="“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”"
      />
    </div>
  </BrowserRouter>
);

export const layer: Story = ({
  pd,
}) => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'white', padding: 20 }}>
      <Card.Layer
        thumbnail="https://source.unsplash.com/random"
        title="OCEAN GOLF"
        ratio="354x221"
        isBold
        modifiers={['filter', 'hover', 'r15', pd]}
        description="Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà."
      />
    </div>
  </BrowserRouter>
);

export const news: Story = () => (
  <BrowserRouter>
    <div style={{ background: '#999', padding: '20px 0' }}>
      <Container>
        <Card.News
          thumbnail="https://source.unsplash.com/random"
          dateTime="1 phút trước"
          tag={{
            text: 'The Kingdom',
            url: '/',
          }}
          button={{
            text: 'Xem thêm',
            url: '/',
          }}
          title="Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc sức khỏe"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. "
        />
      </Container>
    </div>
  </BrowserRouter>
);
