import { EventListParams, EventListTypes } from './types';

import axiosInstance from 'services/common/instance';

const getEventListService = async (
  params?: EventListParams,
): Promise<APIPaginationResponse<EventListTypes[]>> => {
  const response = await axiosInstance.get('events', { params });
  return response.data;
};

export default getEventListService;
