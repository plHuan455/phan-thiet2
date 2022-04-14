import { SystemsData } from './types';

import axiosInstance from 'services/common/instance';

const getSystemsService = async (): Promise<SystemsData> => {
  const res = await axiosInstance.get('systems/general');
  return res.data.data;
};

export default getSystemsService;
