import { HeadquatersData, HeadquatersParams } from './types';

import axiosInstance from 'services/common/instance';

export const headquartersService = async (
  params?: HeadquatersParams,
): Promise<APIPaginationResponse<HeadquatersData[]>> => {
  const res = await axiosInstance.get('headquarters', { params });
  return res.data;
};

export default undefined;
