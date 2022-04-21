import { ImageListParams, ImageListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getImageListService = async (
  params: ImageListParams,
): Promise<APIPaginationResponse<ImageListTypes[]>> => {
  const response = await axiosInstance.get('images', { params });
  return response.data;
};

export default getImageListService;
