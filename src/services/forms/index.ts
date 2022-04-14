import { ContactFormType } from './types';

import axiosInstance from 'services/common/instance';

const contactFormService = async (): Promise<ContactFormType> => {
  const response = await axiosInstance.get('menus');
  return response.data.data;
};

const formServices = {
  contactFormService,
};

export default formServices;
