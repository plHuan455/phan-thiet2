import {
  ContactFormInput, ConsultancyFormInput, Topic, TopicRequestParams,
} from './types';

import axiosInstance from 'services/common/instance';

export const contactFormService = async (data: ContactFormInput): Promise<void> => {
  const response = await axiosInstance.post('contact', data);
  return response.data.data;
};

export const consultancyFormService = async (data: ConsultancyFormInput): Promise<void> => {
  const response = await axiosInstance.post('project-receiver-registers', data);
  return response.data.data;
};

export const getTopicList = async (params?: TopicRequestParams):
Promise<Topic[]> => {
  const response = await axiosInstance.get('topics', { params });
  return response.data.data;
};

const formServices = {
  contactFormService,
  consultancyFormService,
  getTopicList,
};

export default formServices;
