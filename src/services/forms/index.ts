import { ContactFormInput, ConsultancyFormInput } from './types';

import axiosInstance from 'services/common/instance';

export const contactFormService = async (data: ContactFormInput): Promise<void> => {
  const response = await axiosInstance.post('contact', data);
  return response.data.data;
};

export const consultancyFormService = async (data: ConsultancyFormInput): Promise<void> => {
  const response = await axiosInstance.post('consultancy', data);
  return response.data.data;
};

const formServices = {
  contactFormService,
  consultancyFormService,
};

export default formServices;
