/* eslint-disable camelcase */
export interface ImageTypes {
  id: number;
  displayOrder?: number;
  name?: string;
  thumbnailHome?: string;
  thumbnailSubdivision?: string;
  color?: string;
  images?: string;
  subdivision?: {
    id: number,
    displayOrder: number;
    thumbnail: string;
    slug: string;
    name: string;
    logo: string;
  };
}

export interface ImageOnlyTypes {
  id: number;
  path: string;
}

export interface ImageParams {
  page?: number;
  limit?: number;
  keyword?: string;
  subdivision_id?: number;
}
