import React from 'react';
import { useForm } from 'react-hook-form';

import ContactForm, { ContactFormType } from 'components/templates/ContactForm';

const Form: React.FC = () => {
  const method = useForm<ContactFormType>();
  return (
    <ContactForm
      method={method}
      handleSubmit={() => ''}
      form={{
        namePlaceholder: 'HỌ VÀ TÊN',
        addressPlaceholder: 'ĐỊA CHỈ',
        phonePlaceholder: 'ĐIỆN THOẠI *',
        emailPlaceholder: 'EMAIL *',
        contentPlaceholder: 'NỘI DUNG',
        btnText: 'Đăng ký nhận thông tin',
      }}
      titleForm="THÔNG TIN LIÊN HỆ"
      descriptionForm="Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại và tin tức mới nhất từ NovaWorld Phan Thiet"
    />
  );
};

export default Form;
