import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';

import { FormConsultancy, CheckboxTypes, ConsultancyInfoTypes } from 'components/organisms/Consultancy';
import { NotifyProps } from 'components/organisms/Notify';
import ConsultancyTemplate, { ConsultancyPropsInput } from 'components/templates/Consultancy';
import { useAsync } from 'hooks/useAsync';
import { consultancyFormService } from 'services/contact';
import { ConsultancyFormInput } from 'services/contact/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';
import { ContactState } from 'store/topics';
import { schemasConsultancyForm } from 'utils/schemas';

const Consultancy: React.FC<ConsultancyPropsInput> = ({
  title,
  layer,
  form,
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const topicSelector: ContactState = useAppSelector((state) => state.topic as ContactState);
  const dispatch = useAppDispatch();
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  const [consultancyExecute, consultancyState] = useAsync(async (params: FormConsultancy) => {
    if (!executeRecaptcha) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    const topicIds: string = params.products?.reduce((prev, curr) => `${prev === '' ? '' : `${prev},`}${curr}`, '');
    const newData: ConsultancyFormInput = {
      name: params.name,
      email: params.email,
      phone: params.phone,
      address: params.address,
      content: params.content,
      topic_ids: topicIds,
      grecaptcha_token: grecaptchaToken,
    };
    await consultancyFormService(newData);
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
  });

  const consultancyInfoTemp = useMemo<ConsultancyInfoTypes | undefined>(() => {
    const { data } = topicSelector;
    const checkboxList: CheckboxTypes[] = data.map(
      (item) => ({ label: item.name, value: item.id.toString() }),
    );
    const checkboxTemp = form.consultancyInfo && form.consultancyInfo.checkbox ? {
      ...form.consultancyInfo.checkbox,
      list: checkboxList || undefined,
    } : undefined;
    const result = form.consultancyInfo ? {
      ...form.consultancyInfo,
      checkbox: checkboxTemp,
    } : undefined;
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicSelector]);

  const handleSubmit = async (data: FormConsultancy) => {
    consultancyExecute(data);
  };

  return (
    <ConsultancyTemplate
      title={title}
      layer={layer}
      form={{
        ...form,
        method,
        loading: consultancyState.loading,
        handleSubmit,
        consultancyInfo: consultancyInfoTemp,
      }}
    />
  );
};

Consultancy.defaultProps = {};

export default Consultancy;
