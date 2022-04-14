import { TopicParams, TopicTypes } from './types';

import axiosInstance from 'services/common/instance';

const getTopicsListService = async (params?: TopicParams): Promise<TopicTypes[]> => {
  const response = await axiosInstance.get('topics', { params });
  return response.data.data;
};

export default getTopicsListService;
