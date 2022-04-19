/* eslint-disable camelcase */
export interface VideoTypes {
  id: number;
  displayOrder?: number;
  thumbnail: string;
  name?: string;
  video?: string;
  videoType?: string;
  slug?: string;
  subdivision?: {
    name: string;
    slug: string;
    thumbnail: string;
    logo: string;
  },
  createdAt?: string;
}

export interface VideoParams {
  page?: number;
  limit?: number;
  keyword?: string;
  subdivision_id?: string;
}
