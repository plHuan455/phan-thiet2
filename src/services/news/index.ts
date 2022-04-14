import { NewsListParams, NewsListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getNewsListService = async (
  params?: NewsListParams,
): Promise<APIPaginationResponse<NewsListTypes[]>> => {
  const response = await axiosInstance.get('news', { params });
  return response.data;
};

export default getNewsListService;
