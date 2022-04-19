import { ImageParams, ImageOnlyTypes } from './types';

import axiosInstance from 'services/common/instance';

export const getAllImagesService = async (params?: ImageParams): Promise<ImageOnlyTypes[]> => {
  const response = await axiosInstance.get('images/all-images', { params });
  return response.data.data;
};

const imageService = {
  getAllImagesService,
};

export default imageService;
