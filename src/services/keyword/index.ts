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
  const formData = new FormData();
  formData.append('keyword', params?.keyword);
  formData.append('locale', params.locale);
  formData.append('grecaptcha_token', params?.grecaptcha_token);
  await axiosInstance.post('keywords', formData);
};

export default getKeywordService;
