import srcBanner from 'assets/images/bannerHome/banner_home.jpg';
import imgCard from 'assets/images/bannerHome/card_1.png';
import fly from 'assets/images/bannerHome/fly.png';
import imgSub from 'assets/images/bannerHome/sub_1.png';

const list = [
  {
    srcImgMain: imgCard,
    srcImgSub: imgSub,
    title: 'DU LỊCH VÀ <br/> NGHỈ DƯỠNG',
  },
  {
    srcImgMain: imgCard,
    srcImgSub: imgSub,
    title: 'VUI CHƠI <br/> & GIẢI TRÍ',
  },
  {
    srcImgMain: imgCard,
    srcImgSub: imgSub,
    title: 'DU LỊCH <br/> MICE',
    srcLayer: fly,
  },
  {
    srcImgMain: imgCard,
    srcImgSub: imgSub,
    title: 'WELLNESS <br/> CHĂM SÓC <br/>SỨC KHỎE',
  },
];

const description = 'Novaworld Phan Thiet - Siêu đô thị biển, du lịch nghỉ dưỡng, giải trí & chăm sóc sức khỏe. <br/> Kiến tạo điểm đến xứng tầm vị thế.';

export default {
  list,
  description,
  banner: {
    src: srcBanner,
  },
};
