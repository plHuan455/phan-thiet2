import { OverviewType, OverviewParams } from './types';

import axiosInstance from 'services/common/instance';

export const getOverviewListService = async (
  params?: OverviewParams,
): Promise<OverviewType> => {
  const response = await axiosInstance.get('systems/overview-search', { params });
  return response.data.data;
};

const overViewService = {
  getOverviewListService,
};

export default overViewService;
