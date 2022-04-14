import { SubDivisionListTypes, SubDivisionParams } from './types';

import axiosInstance from 'services/common/instance';

const getSubDivisionListService = async (
  params?: SubDivisionParams,
): Promise<APIPaginationResponse<SubDivisionListTypes[]>> => {
  const response = await axiosInstance.get('subdivisions', { params });
  return response.data;
};

export default getSubDivisionListService;
