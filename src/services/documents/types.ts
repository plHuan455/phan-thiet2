import { OverviewDocumentType } from 'services/overviews/types';

/* eslint-disable camelcase */
export interface DocumentTypes extends OverviewDocumentType {}

export interface DocumentParams {
  page?: number;
  limit?: number;
  keyword?: string;
  subdivision_id?: string;
}
