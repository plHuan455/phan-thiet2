import { TFunction } from 'react-i18next';
import * as yup from 'yup';

export const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const schemasConsultancyForm = (t: TFunction<'translation', undefined>) => yup.object({
  phone: yup
    .string()
    .required(t('validation.phone_required'))
    .matches(phoneRegExp, t('validation.phone_invalid')),
  email: yup
    .string()
    .required(t('validation.email_required'))
    .email(t('validation.email_invalid')),
});
