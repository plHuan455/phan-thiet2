import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import BannerSearchContainer from './bannerSearch';
import Consultancy from './consultancy';
import Events from './events';
import MenuTag from './menuTag';
import NewsDocument from './newsDocument';
import NewsImage from './newsImage';
import NewsPlayer from './newsPlayer';
import Section from './section';

import { FormConsultancy } from 'components/organisms/Consultancy';
import useCountDown from 'hooks/useCountDown';

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
const Screen: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const handleChangeTag = (value: number) => setActive(value);
  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: '2022-04-10T07:47:00.595' || new Date().toISOString() });

  const newsRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const newsImageRef = useRef<HTMLDivElement>(null);
  const newsVideoRef = useRef<HTMLDivElement>(null);
  const newsDocumentRef = useRef<HTMLDivElement>(null);
  const consultancyRef = useRef<HTMLDivElement>(null);

  const method = useForm<FormConsultancy>();

  useEffect(() => {
    switch (active) {
      case 0:
        window.scrollTo({
          top: newsRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 1:
        window.scrollTo({
          top: eventRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 2:
        window.scrollTo({
          top: newsImageRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 3:
        window.scrollTo({
          top: newsVideoRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 4:
        window.scrollTo({
          top: newsDocumentRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;
      case 5:
        window.scrollTo({
          top: consultancyRef?.current?.offsetTop,
          behavior: 'smooth',
        });

        break;
      // eslint-disable-next-line no-console
      default: console.log('null');
    }
  }, [active]);

  return (
    <>
      <BannerSearchContainer
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
        handleChangeTag={handleChangeTag}
        active={active}
      />
      <div style={{ height: '50vh', width: '100%', background: 'rgba(0,0,0,0.2)' }}>
        <Section
          ref={newsRef}
        >
          tin tuc
        </Section>
      </div>

      <Section
        ref={eventRef}
      >
        <Events
          title="SỰ KIỆN"
          button={{
            text: 'Xem tất cả',
            url: '/',
          }}
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
      <Section ref={newsImageRef}>
        <NewsImage dataList={dataCardImage} />
      </Section>
      <Section ref={newsVideoRef}>
        <NewsPlayer dataList={dataCardPlayers} />
      </Section>
      <Section ref={newsDocumentRef}>
        <NewsDocument dataList={[
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
      <div ref={consultancyRef}>
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
      </div>

    </>
  );
};

export default Screen;
