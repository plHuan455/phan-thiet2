/* eslint-disable camelcase */
export interface KeywordListTypes {
  id: number;
  keyword: string;
  numberOfTimes: number;
  isPopular: boolean;
}

export interface KeywordListParams {
  is_popular?: number;
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface KeywordParams {
  grecaptcha_token: string;
  keyword: string;
  locale: string;
}
