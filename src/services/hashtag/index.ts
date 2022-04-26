import { GetHashtagParams, HashtagTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getAllHashtagListService = async (
  params?: GetHashtagParams,
): Promise<HashtagTypes[]> => {
  const response = await axiosInstance.get('hashtag', { params });
  return response.data.data;
};

export const remove = '';
