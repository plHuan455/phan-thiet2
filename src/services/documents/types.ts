/* eslint-disable camelcase */
export interface DocumentTypes {
  id: number;
  displayOrder: number;
  slug: string;
  link: string;
  publishedAt: string;
  tag?: string;
  thumbnail?: string;
}

export interface DocumentParams {
  page?: number;
  limit?: number;
  keyword?: string;
  subdivision_id?: string;
}
