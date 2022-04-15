import { TopicParams, TopicTypes } from './types';

import axiosInstance from 'services/common/instance';

const topicsListService = async (params?: TopicParams): Promise<TopicTypes[]> => {
  const response = await axiosInstance.get('topics', { params });
  return response.data.data;
};

export default topicsListService;
