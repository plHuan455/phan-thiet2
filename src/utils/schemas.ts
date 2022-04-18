import * as yup from 'yup';

export const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export const schemasConsultancyForm = yup.object({
  phone: yup
    .string()
    .required('Vui lòng nhập số điện thoại !!')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ !!'),
  email: yup
    .string()
    .required('Vui lòng nhập email !!')
    .email('Email Không hợp lệ !!'),
});
