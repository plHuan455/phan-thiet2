import { ImageParams, ImageOnlyTypes, ImageTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getAllImagesService = async (
  params?: ImageParams,
): Promise<APIPaginationResponse<ImageOnlyTypes[]>> => {
  const response = await axiosInstance.get('images/all-images', { params });
  return response.data;
};

export const getImageListService = async (
  params: ImageParams,
): Promise<APIPaginationResponse<ImageTypes[]>> => {
  const response = await axiosInstance.get('images', { params });
  return response.data;
};

const imageService = {
  getAllImagesService,
  getImageListService,
};

export default imageService;
