import { KeywordListParams, KeywordListTypes, KeywordParams } from './types';

import axiosInstance from 'services/common/instance';

const getKeywordService = async (
  params?: KeywordListParams,
): Promise<APIPaginationResponse<KeywordListTypes[]>> => {
  const response = await axiosInstance.get('keywords', { params });
  return response.data;
};

export const postKeywordService = async (
  params: KeywordParams,
): Promise<void> => {
  await axiosInstance.post('keywords', params);
};

export default getKeywordService;
