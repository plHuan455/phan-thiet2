import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import useNews from '../hook';

import Banner from './banner';
import Consultancy from './consultancy';
import Documents from './documents';
import Events from './events';
import Images from './images';
import MenuTag from './menus';
import Section from './section';
import Videos from './videos';

import { FormConsultancy } from 'components/organisms/Consultancy';
import NewsList from 'components/templates/NewsList';
import useCountDown from 'hooks/useCountDown';
import { schemasConsultancyForm } from 'utils/schemas';

const menuDummy = [
  {
    label: 'Tin tức',
    value: 'tin-tuc',
  },
  {
    label: 'Sự kiện',
    value: 'su-kien',
  },
  {
    label: 'Hình ảnh',
    value: 'hinh-anh',
  },
  {
    label: 'Video',
    value: 'video',
  },
  {
    label: 'Tài liệu khác',
    value: 'video',
  },
];

const dataCardPlayers = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
];

const dataCardImage = [
  {
    thumbnail: 'https://source.unsplash.com/random',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
  },
];

const dataEvent = new Array(7).fill({
  thumbnail: 'https://source.unsplash.com/random',
  tag: 'The Kingdom',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  endTime: '2022-04-10T07:47:00.595',
  href: '/',
  summary: [
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
  ],
});

const dataNews = new Array(3).fill({
  thumbnail: 'https://source.unsplash.com/random',
  dateTime: '1 phút trước',
  tag: 'The Kingdom',
  button: {
    text: 'Xem thêm',
    url: '/',
  },
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc sức khỏe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. ',
});

const Screen: React.FC = () => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });
  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: '2022-05-10T07:47:00.595' });

  const { ref, refIdx, setRef } = useNews();

  return (
    <>
      <Banner
        image={{
          src: 'https://source.unsplash.com/random',
        }}
        isLayer
        search={{
          placeholder: 'Tìm kiếm tin tức',
          // eslint-disable-next-line no-console
          onSearch: (search) => console.log('search', search),
        }}
        tag={{
          keyword: 'Từ khóa nổi bật:',
          list: [
            {
              text: 'Du lịch',
              href: 'du-lich',
            },
            {
              text: 'The King Dom',
              href: 'the-king-dom',
            },
            {
              text: 'Tour trọn gói',
              href: 'tour-tron-goi',
            },
          ],
        }}
      />
      <MenuTag
        dataList={menuDummy}
        handleChangeTag={setRef}
        active={refIdx}
      />

      <Section
        ref={ref.news}
      >
        <NewsList
          title="TIN TỨC"
          listNews={dataNews}
          button={{
            text: 'Xem thêm',
          }}
        />
      </Section>

      <Section
        ref={ref.events}
      >
        <Events
          title="SỰ KIỆN"
          countDown={{
            title: 'Một vòng trải nghiệm siêu thành phố biển',
            button: {
              text: 'Xem chi tiết',
            },
            address: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
            duration: '13:30 - 17:00',
            date: '30/04/2022',
            list: [
              {
                label: 'ngày',
                value: days,
              },
              {
                label: 'giờ',
                value: hours,
              },
              {
                label: 'phút',
                value: mins,
              },
              {
                label: 'giây',
                value: secs,
              },
            ],
          }}
          listEvents={dataEvent}
        />
      </Section>
      <Section ref={ref.images}>
        <Images dataList={dataCardImage} />
      </Section>
      <Section ref={ref.videos}>
        <Videos dataList={dataCardPlayers} />
      </Section>
      <Section ref={ref.documents}>
        <Documents dataList={[
          {
            thumbnail: 'https://source.unsplash.com/random',
            title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
            href: '/',
            tag: 'The Kingdom',
            dateTime: '2 giờ trước',
            url: {
              text: 'Tải xuống',
              iconName: 'downloadOrange',
              animation: 'download',
            },
          },
          {
            thumbnail: 'https://source.unsplash.com/random',
            title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
            href: '/',
            tag: 'The Kingdom',
            dateTime: '2 giờ trước',
            url: {
              text: 'Tải xuống',
              iconName: 'downloadOrange',
              animation: 'download',
            },
          },

          {
            thumbnail: 'https://source.unsplash.com/random',
            title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
            href: '/',
            tag: 'The Kingdom',
            dateTime: '2 giờ trước',
            url: {
              text: 'Tải xuống',
              iconName: 'downloadOrange',
              animation: 'download',
            },
          },

          {
            thumbnail: 'https://source.unsplash.com/random',
            title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
            href: '/',
            tag: 'The Kingdom',
            dateTime: '2 giờ trước',
            url: {
              text: 'Tải xuống',
              iconName: 'downloadOrange',
              animation: 'download',
            },
          },

        ]}
        />
      </Section>
      <section>
        <Consultancy
          title={{
            text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
            modifiers: ['700', 'gradientGreen', 's015'],
          }}
          form={{
            title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
            method,
            handleSubmit: (data) => console.log(data),
            variantButton: 'primary-green',
            consultancyInfo: {
              placeholderName: 'Họ và tên',
              placeholderPhone: 'Số điện thoại *',
              placeholderEmail: 'Email *',
              placeholderAddress: 'Địa chỉ',
              placeholderContent: 'Nội dung',
              checkbox: {
                label: 'Sản phẩm quan tâm: ',
                subLabel: '(Câu hỏi không bắt buộc)',
                list: [
                  {
                    label: 'Biệt thự',
                    value: '1',
                  },
                  {
                    label: 'Nhà phố',
                    value: '2',
                  },
                  {
                    label: 'Shophouse',
                    value: '3',
                  },
                ],
              },
              btnText: 'Đăng ký nhận thông tin',
            },
          }}
        />
      </section>

    </>
  );
};

export default Screen;
