import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import PopupRegister, { RegisterFormType } from './component';

import iconArrowTop from 'assets/icons/ic_arrow_top_white.svg';
import phone from 'assets/images/floatingButton/phone.svg';
import register from 'assets/images/floatingButton/register.svg';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { NotifyProps } from 'components/organisms/Notify';
import { useAsync } from 'hooks/useAsync';
import useWindowScroll from 'hooks/useWindowScroll';
import i18n from 'i18n';
import { consultancyFormService } from 'services/contact';
import { ConsultancyFormInput } from 'services/contact/types';
import { useAppSelector } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';
import mapModifiers, { getSearchParams } from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';
import initFacebookSdk from 'utils/sdkFacebook';

const FloatingButton: React.FC = () => {
  const dataSystem = useAppSelector((state) => state.system.data);
  const location = useLocation();
  const [isShow, setIsShow] = useState(false);
  const { language } = i18n;
  const isFirst = useRef(true);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const dispatch = useDispatch();

  const method = useForm<RegisterFormType>({
    resolver: yupResolver(schemasConsultancyForm(t)),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      content: '',
    },
  });

  const listFloatingButton = [
    {
      text: '0938 221 226',
      imgSrc: phone,
      href: 'tel:0938221226',
      useExternal: true,
    },
    {
      text: 'Đăng ký nhận tin',
      imgSrc: register,
      handleClick: () => setIsOpen(true),
    },
  ];

  useWindowScroll(() => {
    if (window.pageYOffset > 200) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useWindowScroll(() => {
    if (
      dataSystem?.messengerId
      && isFirst.current
      && window.pageYOffset > 100
    ) {
      initFacebookSdk(language, dataSystem.messengerId);
      isFirst.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const [consultancyExecute, consultancyState] = useAsync(async (params: RegisterFormType) => {
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
    let newData: ConsultancyFormInput = {
      name: params.name,
      email: params.email || '',
      phone: params.phone || '',
      content: params.content,
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
      setIsOpen(false);
      method.reset();
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

  return (
    <>
      <div className="floatingButton">
        <div id="fb-root" />
        <div id="fb-customer-chat" className="fb-customerchat" />
        {listFloatingButton?.map((item, index) => (
          <div
            key={`floatingButton-${index.toString()}`}
            className="floatingButton_wrapButton"
          >
            <Link href={item.href} useExternal={item.useExternal}>
              <div
                className={mapModifiers(
                  'floatingButton_button',
                  isShow && 'show',
                )}
                onClick={item.handleClick}
              >
                <img src={item.imgSrc} alt={item.text} />
              </div>
            </Link>
            {
              item.text && (
                <div className="floatingButton_tooltip">
                  <Link href={item.href} useExternal={item.useExternal}>
                    <Text modifiers={['11x18', 'copper', '400']}>{item.text}</Text>
                  </Link>
                </div>
              )
            }
          </div>
        ))}
        <div
          className={mapModifiers('floatingButton_scrollTop', isShow && 'show')}
          onClick={handleScrollTop}
        >
          <img src={iconArrowTop} alt="scrollTop" />
        </div>
      </div>
      <PopupRegister
        title="ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN"
        description="Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại và tin tức mới nhất từ NovaWorld Phan Thiet"
        form={{
          namePlaceholder: t('form.consultancy_name'),
          phonePlaceholder: t('form.consultancy_phone'),
          emailPlaceholder: t('form.consultancy_email'),
          contentPlaceholder: t('form.consultancy_content'),
          btnText: t('general.confirm'),
        }}
        method={method}
        loading={consultancyState.loading}
        handleSubmit={consultancyExecute}
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          method.reset();
        }}
      />
    </>
  );
};

FloatingButton.defaultProps = {
};

export default FloatingButton;
