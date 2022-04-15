import { SystemsData } from './types';

import axiosInstance from 'services/common/instance';

const systemsGeneralService = async (): Promise<SystemsData> => {
  const res = await axiosInstance.get('systems/general');
  return res.data.data;
};

export default systemsGeneralService;
