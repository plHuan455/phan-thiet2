import React from 'react';

import DivisionSummary from 'components/templates/DivisionSummary';

const dataDummy = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
];

const Summary: React.FC = () => (
  <section className="u-mt-md-96 u-mt-48 u-mb-md-157 u-mb-80" style={{ color: 'var(--theme)' }}>
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
