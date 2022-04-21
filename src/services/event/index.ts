import { EventDetailTypes, EventListParams, EventListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getEventListService = async (
  params?: EventListParams,
): Promise<APIPaginationResponse<EventListTypes[]>> => {
  const response = await axiosInstance.get('events', { params });
  return response.data;
};

export const getEventDetailService = async (
  slug?: string,
): Promise<EventDetailTypes> => {
  const response = await axiosInstance.get(`events/${slug}`);
  return response.data.data;
};

export default getEventListService;
