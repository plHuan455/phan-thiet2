import { yupResolver } from '@hookform/resolvers/yup';
import React, { useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';

import { NotifyProps } from 'components/organisms/Notify';
import ContactForm, { ContactFormType } from 'components/templates/ContactForm';
import { useAsync } from 'hooks/useAsync';
import { contactFormService } from 'services/forms';
import { useAppDispatch } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';
import { getBlockData } from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';

export interface FormProps {
  form?: {
    placeholderName?: string;
    placeholderAddress?: string;
    placeholderPhone?: string;
    placeholderEmail?: string;
    placeholderContent?: string;
    button?: string;
  };
  title: string;
  description?: string;
}

const Form: React.FC<SectionBlocks> = ({ blocks }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const dispatch = useAppDispatch();
  const method = useForm<ContactFormType>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });
  const formBlock = useMemo(() => {
    const blockPageContent = getBlockData<FormProps>('form_contact', blocks);
    return {
      form: {
        addressPlaceholder: blockPageContent?.form?.placeholderAddress,
        contentPlaceholder: blockPageContent?.form?.placeholderContent,
        emailPlaceholder: blockPageContent?.form?.placeholderEmail,
        namePlaceholder: blockPageContent?.form?.placeholderName,
        phonePlaceholder: blockPageContent?.form?.placeholderPhone,
        btnText: blockPageContent?.form?.button,
      },
      titleForm: blockPageContent?.title,
      descriptionForm: blockPageContent?.description,
    };
  }, [blocks]);

  const [contactExecute, contactState] = useAsync(async (params: ContactFormType) => {
    if (!executeRecaptcha) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    const newData = {
      name: params.name,
      email: params.email,
      phone: params.phone,
      address: params.address,
      content: params.content,
      grecaptcha_token: grecaptchaToken,
    };
    await contactFormService(newData);
  }, {
    onSuccess: () => {
      const notifyProps: NotifyProps = {
        isOpen: true,
        title: 'Đăng ký thành công',
        message: 'Cảm ơn Quý Khách đã nhận thông tin dự án NovaWorld Phan Thiet. Novaland sẽ liên hệ trong thời gian sớm nhất.',
        btnText: 'Xác nhận',
      };
      dispatch(updateNotifyProps(notifyProps));
    },
  });

  const executeSubmit = async (data: ContactFormType) => {
    contactExecute(data);
  };
  return (
    <ContactForm
      method={method}
      handleSubmit={executeSubmit}
      {...formBlock}
      loading={contactState.loading}
    />
  );
};

export default Form;
