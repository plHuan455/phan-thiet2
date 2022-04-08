import React from 'react';

import img from 'assets/images/feedbacks/img.png';
import img1 from 'assets/images/feedbacks/img1.png';
import img2 from 'assets/images/feedbacks/img2.png';
import leaf from 'assets/images/pages/home/feedbacks/leaf.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';

const listDummy = [
  {
    imgSrc: img,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
  {
    imgSrc: img1,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
  {
    imgSrc: img2,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện” Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
  {
    imgSrc: img,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
  {
    imgSrc: img1,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
  {
    imgSrc: img2,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện” Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
  },
];

const Feedbacks: React.FC = () => (
  <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
    <div className="s-feedbacks_leaf">
      <div className="s-feedbacks_leaf_layer">
        <Image src={leaf} alt="leaf" />
      </div>
    </div>
    <Container>
      <FlatMore
        title={{
          text: 'TRẢI NGHIỆM KHÁCH HÀNG',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015'],
        }}
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
        data={listDummy}
        render={(item) => (
          <Card.Feedback
            {...item}
          />
        )}
      />
    </Container>
  </section>
);

export default Feedbacks;
