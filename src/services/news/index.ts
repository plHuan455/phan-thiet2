import { NewsDetailTypes, NewsListParams, NewsListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getNewsListService = async (
  params?: NewsListParams,
): Promise<APIPaginationResponse<NewsListTypes[]>> => {
  const response = await axiosInstance.get('news', { params });
  return response.data;
};

export const getNewsDetailService = async (
  slug?: string,
): Promise<NewsDetailTypes> => {
  const res = await axiosInstance.get(`news/${slug}`);
  return res.data.data;
};

export default getNewsListService;
