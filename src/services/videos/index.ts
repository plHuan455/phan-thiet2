import { VideoTypes, VideoParams } from './types';

import axiosInstance from 'services/common/instance';

export const getVideosService = async (
  params?: VideoParams,
): Promise<APIPaginationResponse<VideoTypes[]>> => {
  const response = await axiosInstance.get('videos', { params });
  return response.data;
};

const videoService = {
  getVideosService,
};

export default videoService;
