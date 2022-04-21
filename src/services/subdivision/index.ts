import {
  SubDivisionDetailTypes, SubDivisionListTypes, SubDivisionParams, SubDivisionMapListTypes,
} from './types';

import axiosInstance from 'services/common/instance';

export const getSubDivisionListService = async (
  params?: SubDivisionParams,
): Promise<APIPaginationResponse<SubDivisionListTypes>> => {
  const response = await axiosInstance.get('subdivisions', { params });
  return response.data;
};

export const getSubDivisionDetailService = async (
  slug?: string,
): Promise<SubDivisionDetailTypes> => {
  const response = await axiosInstance.get(`subdivisions/${slug}`);
  return response.data.data;
};

export const getSubDivisionMapListService = async (
): Promise<SubDivisionMapListTypes> => {
  const response = await axiosInstance.get('subdivision-maps');
  return response.data.data;
};
