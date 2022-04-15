export interface OverviewNewsType {
  id: number;
  thumbnail: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
}

export interface OverviewVideoType {
  id: number;
  displayOrder: number;
  thumbnail: string;
  name: string;
  video: string;
  videoType: string;
  slug: string;
}

export interface OverviewImageType {
  path: string;
}

export interface OverviewDocumentType {
  id: number;
  displayOrder: number;
  slug: string;
  link: string;
  publishedAt: string;
}

export interface OverviewType {
  news?: OverviewNewsType[];
  videos?: OverviewVideoType[];
  images?: OverviewImageType[];
  documents?: OverviewDocumentType[];
}

export interface OverviewParams {
  keyword?: string;
}
