import React from 'react';

import ErrorTemplate from 'components/templates/Error';

const Error: React.FC = () => (
  <ErrorTemplate
    type={404}
    title="Rất tiếc, chúng tôi không tìm thấy trang này"
    description="Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ."
    back={
    {
      text: 'Trang chủ',
      url: '/',
      target: '_self',
    }
  }
    contact={
    {
      text: 'Liên hệ',
      url: '/',
      target: '_self',
    }
  }
  />
);

export default Error;
