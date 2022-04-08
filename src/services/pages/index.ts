import axiosInstance from 'services/common/instance';

export const pageService = async <T>(
  slug: string,
): Promise<BasePageDataTypes<T>> => {
  const res = await axiosInstance.get(`pages/${slug}`);
  return res.data.data;
};

export const staticHomeService = async <T>(): Promise<BasePageDataTypes<T>> => {
  const res = await axiosInstance.get('pages/static/home-page');
  return res.data.data;
};

export const staticAllService = async (): Promise<DataStaticTypes[]> => {
  const response = await axiosInstance.get('pages/static/all');
  return response.data.data;
};

export const staticErrorsService = async (): Promise<
  DataStaticErrorTypes[]
> => {
  const response = await axiosInstance.get('pages/static/errors');
  return response.data.data;
};

export const previewService = async <T extends any>(
  previewToken: string,
): Promise<T> => {
  const response = await axiosInstance.get(`preview/${previewToken}`);
  return response.data.data;
};
