import React from 'react';

import YouCanCareTemplate from 'components/templates/YouCanCare';

const dataDummy = new Array(10).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

const YouCanCare: React.FC = () => (
  <section className="u-mt-md-96 u-mt-48 u-mb-md-157 u-mb-80" style={{ color: 'var(--theme)' }}>
    <YouCanCareTemplate
      title="CÓ THỂ BẠN QUAN TÂM"
      link={{
        text: 'Xem tất cả',
        href: '/',
      }}
      dataList={dataDummy}
    />
  </section>
);

export default YouCanCare;
