import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import Animate from 'components/organisms/Animate';
import { NotifyProps } from 'components/organisms/Notify';
import ContactForm, { ContactFormType } from 'components/templates/ContactForm';
import { useAsync } from 'hooks/useAsync';
import { contactFormService } from 'services/contact';
import { ContactFormInput } from 'services/contact/types';
import { useAppDispatch } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';
import { getBlockData, getSearchParams } from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';

export interface FormProps {
  title: string;
  description?: string;
}

const Form: React.FC<SectionBlocks> = ({ blocks }) => {
  const { t } = useTranslation();
  const location = useLocation();

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
        addressPlaceholder: t('form.address'),
        contentPlaceholder: t('form.content'),
        emailPlaceholder: t('form.email'),
        namePlaceholder: t('form.name'),
        phonePlaceholder: t('form.phone'),
        btnText: t('button.register'),
      },
      titleForm: blockPageContent?.title,
      descriptionForm: blockPageContent?.description,
    };
  }, [blocks, t]);

  const [contactExecute, contactState] = useAsync(
    async (params: ContactFormType) => {
      if (!executeRecaptcha) return;
      const grecaptchaToken = await executeRecaptcha('submit');
      const searchParmas = getSearchParams(location.search);
      const paramsUTM = [
        'utm_source',
        'utm_medium',
        'utm_term',
        'utm_campaign',
        'utm_content',
      ];

      let newData: ContactFormInput = {
        name: params.name,
        email: params.email,
        phone: params.phone,
        address: params.address,
        content: params.content,
        grecaptcha_token: grecaptchaToken,
      };
      Object.keys(searchParmas).forEach((item: string) => {
        if (paramsUTM.includes(item)) {
          newData = { ...newData, [item]: searchParmas[item] };
        }
      });

      await contactFormService(newData);
    },
    {
      onSuccess: () => {
        const notifyProps: NotifyProps = {
          isOpen: true,
          title: 'Đăng ký thành công',
          message:
            'Cảm ơn Quý Khách đã nhận thông tin dự án NovaWorld Phan Thiet. Novaland sẽ liên hệ trong thời gian sớm nhất.',
          btnText: 'Xác nhận',
        };
        dispatch(updateNotifyProps(notifyProps));
      },
      onFailed: (err) => {
        let message = 'Vui lòng thử lại';
        if (axios.isAxiosError(err) && err?.response?.status === 500) {
          message = 'Lỗi hệ thống';
        }
        const notifyProps: NotifyProps = {
          isOpen: true,
          title: 'Đăng ký thất bại',
          message,
          btnText: 'Xác nhận',
        };
        dispatch(updateNotifyProps(notifyProps));
      },
    },
  );
  const executeSubmit = async (data: ContactFormType) => {
    contactExecute(data);
  };

  return (
    <Animate type="fadeInUp">
      <ContactForm
        method={method}
        handleSubmit={executeSubmit}
        {...formBlock}
        loading={contactState.loading}
      />
    </Animate>
  );
};

export default Form;
