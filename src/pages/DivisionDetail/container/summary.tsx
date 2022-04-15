import React from 'react';

import DivisionSummary from 'components/templates/DivisionSummary';

const dataDummy = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
  },
];

const Summary: React.FC = () => (
  <section className="u-pt-md-77 u-pt-48 u-pb-md-77 u-pb-48" style={{ color: 'var(--theme)' }}>
    <DivisionSummary
      title="NƠI ÔM TRỌN</br>
       CẢ THẾ GIỚI"
      description="Nơi tinh hoa năm Châu hôi tụ với những tiện ích hàng đầu,
       nơi các dãy biệt thự ôm trọn “thế giới”, The Kingdom là
       điểm giao huyết mạch, là trái tim của NovaWorld Phan Thiet."
      data={dataDummy}
    />
  </section>
);

export default Summary;
