import { ContactFormInput } from './types';

import axiosInstance from 'services/common/instance';

export const contactFormService = async (data: ContactFormInput): Promise<void> => {
  const response = await axiosInstance.post('contact', data);
  return response.data.data;
};

const formServices = {
  contactFormService,
};

export default formServices;
