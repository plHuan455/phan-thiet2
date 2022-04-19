/* eslint-disable camelcase */
export interface ImageListParams {
  subdivision_id?: string;
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface ImageListTypes {
  id: number;
  displayOrder: number;
  name: string;
  locale: string;
  thumbnailHome: string;
  thumbnailSubdivision: string;
  color: string;
  images: {
    path: string;
  }[];
  subdivision: Subdivision;
}

interface Subdivision {
  id: number;
  displayOrder: number;
  thumbnail: string;
  slug: string;
  name: string;
  logo: string;
}
