import { UtilityCategoriesTypes, UtilityListParams, UtilityListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getUtilityCategoriesService = async (): Promise<UtilityCategoriesTypes[]> => {
  const response = await axiosInstance.get('utility-categories');
  return response.data.data;
};

export const getUtilityListService = async (
  params?: UtilityListParams,
): Promise<APIPaginationResponse<UtilityListTypes[]>> => {
  const response = await axiosInstance.get('utilities', { params });
  return response.data;
};

export default getUtilityCategoriesService;
