import {
  UtilityCategoriesTypes,
  UtilityListBySubDivisionParams,
  UtilityListBySubDivisionTypes,
  UtilityListParams,
  UtilityListTypes,
} from './types';

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

export const getUtilityListBySubDivisionService = async (
  id: string,
  params?: UtilityListBySubDivisionParams,
): Promise<UtilityListBySubDivisionTypes> => {
  const response = await axiosInstance.get(`utilities/list-by-subdivision/${id}`, { params });
  return response.data.data;
};

export default getUtilityCategoriesService;
