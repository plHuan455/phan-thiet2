import { RedirectsTypes, SystemsData } from './types';

import axiosInstance from 'services/common/instance';

const systemsGeneralService = async (): Promise<SystemsData> => {
  const res = await axiosInstance.get('systems/general');
  return res.data.data;
};

export const redirectService = async (
  params: {
    path: string
  },
): Promise<RedirectsTypes> => {
  const response = await axiosInstance.get('systems/redirects/show', { params });
  return response.data.data;
};

export default systemsGeneralService;
