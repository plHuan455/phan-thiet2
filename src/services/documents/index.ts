import { DocumentTypes, DocumentParams } from './types';

import axiosInstance from 'services/common/instance';

export const getDocumentsService = async (
  params?: DocumentParams,
): Promise<APIPaginationResponse<DocumentTypes[]>> => {
  const response = await axiosInstance.get('documents', { params });
  return response.data.data;
};

const documentService = {
  getDocumentsService,
};

export default documentService;
