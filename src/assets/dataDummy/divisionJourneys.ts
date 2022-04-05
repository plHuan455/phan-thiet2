import srcBg from 'assets/images/divisionJourneys/bg.jpg';

const tabs = [
  {
    label: 'Nova World Center',
    slug: 'nova-world-center',
  },
  {
    label: 'Ocean Golf',
    slug: 'ocean-golf',
  },
  {
    label: 'Bikini Beach',
    slug: 'bikini-beach',
  },
  {
    label: 'Festival Street',
    slug: 'festival-street',
  },
  {
    label: 'Club House',
    slug: 'club-house',
  },
  {
    label: 'Saigon Casa',
    slug: 'saigon-casa',
  },
  {
    label: 'Sport Complex',
    slug: 'sport-complex',
  },
  {
    label: 'Đại lộ danh vọng',
    slug: 'dai-lo-danh-vong',
  },
  {
    label: 'Đường xuyên tâm',
    slug: 'duong-xuyen-tam',
  },
];

const title = 'HÀNH TRÌNH TRẢI NGHIỆM SIÊU THÀNH PHỐ BIỂN';

const data = new Array(10).fill({
  thumbnail: 'https://source.unsplash.com/random',
  title: 'OCEAN GOLF',
  ratio: '354x221',
  description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
});

export default {
  tabs,
  title,
  srcBg,
  data,
};
