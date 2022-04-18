import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
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

  const topicsList = useMemo(() => {
    const { data } = topicSelector;
    if (!data?.length) return [];

    return data?.map((e) => ({
      label: e.name,
      value: e.id.toString(),
    }));
  }, [topicSelector]);

  // const consultancyInfoTemp = useMemo<ConsultancyInfoTypes | undefined>(() => {
  //   const { data } = topicSelector;
  //   const checkboxList: CheckboxTypes[] = data.map(
  //     (item) => ({ label: item.name, value: item.id.toString() }),
  //   );
  //   const checkboxTemp = form.consultancyInfo && form.consultancyInfo.checkbox ? {
  //     ...form.consultancyInfo.checkbox,
  //     list: checkboxList || undefined,
  //   } : undefined;
  //   const result = form.consultancyInfo ? {
  //     ...form.consultancyInfo,
  //     checkbox: checkboxTemp,
  //   } : undefined;
  //   return result;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [topicSelector]);

  return (
    <ConsultancyTemplate
      title={title}
      layer={layer}
      form={{
        title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
        method,
        loading: consultancyState.loading,
        handleSubmit: consultancyExecute,
        variantButton,
        consultancyInfo: {
          placeholderName: 'Họ và tên',
          placeholderPhone: 'Số điện thoại *',
          placeholderEmail: 'Email *',
          placeholderAddress: 'Địa chỉ',
          placeholderContent: 'Nội dung',
          checkbox: {
            label: 'Sản phẩm quan tâm: ',
            subLabel: '(Câu hỏi không bắt buộc)',
            list: topicsList,
          },
          btnText: 'Đăng ký nhận thông tin',
        },
      }}
    />
  );
};

Consultancy.defaultProps = {
  variantButton: 'primary-green',
};

export default Consultancy;
