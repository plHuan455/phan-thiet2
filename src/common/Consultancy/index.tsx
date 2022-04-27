import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { Variants } from 'components/atoms/Button';
import { FormConsultancy } from 'components/organisms/Consultancy';
import { NotifyProps } from 'components/organisms/Notify';
import ConsultancyTemplate, { ConsultancyProps } from 'components/templates/Consultancy';
import { useAsync } from 'hooks/useAsync';
import { consultancyFormService } from 'services/contact';
import { ConsultancyFormInput } from 'services/contact/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';
import { getSearchParams } from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';

interface ConsultancyCommonProps extends Omit<ConsultancyProps, 'form'> {
  variantButton?: Variants
}

const Consultancy: React.FC<ConsultancyCommonProps> = ({
  title,
  layer,
  variantButton,
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const topicSelector = useAppSelector((state) => state.topic);
  const dispatch = useAppDispatch();
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  const [consultancyExecute, consultancyState] = useAsync(async (params: FormConsultancy) => {
    if (!executeRecaptcha) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    const topicIds: string = params.products?.reduce((prev, curr) => `${prev === '' ? '' : `${prev},`}${curr}`, '');
    const searchParmas = getSearchParams(location.search);
    const paramsUTM = [
      'utm_source',
      'utm_medium',
      'utm_term',
      'utm_campaign',
      'utm_content',
    ];
    let newData: ConsultancyFormInput = {
      name: params.name,
      email: params.email,
      phone: params.phone,
      address: params.address,
      content: params.content,
      topic_ids: topicIds,
      grecaptcha_token: grecaptchaToken,
    };
    Object.keys(searchParmas).forEach((item: string) => {
      if (paramsUTM.includes(item)) {
        newData = { ...newData, [item]: searchParmas[item] };
      }
    });
    await consultancyFormService(newData);
  }, {
    onSuccess: () => {
      const notifyProps: NotifyProps = {
        isOpen: true,
        title: t('general.success'),
        message: t('general.message_success'),
        btnText: t('general.confirm'),
      };
      dispatch(updateNotifyProps(notifyProps));
    },
    onFailed: (err) => {
      let message = t('general.try_again');
      if (axios.isAxiosError(err) && err?.response?.status === 500) {
        message = t('general.system_error');
      }
      const notifyProps: NotifyProps = {
        isOpen: true,
        title: t('general.fail'),
        message,
        btnText: t('general.confirm'),
      };
      dispatch(updateNotifyProps(notifyProps));
    },
  });

  const topicsList = useMemo(() => {
    const { data } = topicSelector;
    if (!data?.length) return [];

    return data?.map((e) => ({
      label: e.name,
      value: e.id.toString(),
    }));
  }, [topicSelector]);

  return (
    <ConsultancyTemplate
      title={title}
      layer={layer}
      form={{
        title: t('form.consultancy_title'),
        method,
        loading: consultancyState.loading,
        handleSubmit: consultancyExecute,
        variantButton,
        consultancyInfo: {
          placeholderName: t('form.consultancy_name'),
          placeholderPhone: t('form.consultancy_phone'),
          placeholderEmail: t('form.consultancy_email'),
          placeholderAddress: t('form.consultancy_address'),
          placeholderContent: t('form.consultancy_content'),
          checkbox: {
            label: t('form.consultancy_interest'),
            subLabel: t('form.consultancy_option'),
            list: topicsList,
          },
          btnText: t('button.register'),
        },
      }}
    />
  );
};

Consultancy.defaultProps = {
  variantButton: 'primary-green',
};

export default Consultancy;
