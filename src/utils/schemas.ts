import * as yup from 'yup';

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

export const schemasConsultancyForm = yup.object({
  phone: yup
    .string()
    .required('Yêu cầu nhập số điện thoại')
    .matches(phoneRegExp, 'Không hợp lệ'),
  email: yup
    .string()
    .required('Yêu cầu nhập email')
    .email('Không hợp lệ'),
});

export const schemaSearchForm = yup.object({
  search: yup.string(),
});
