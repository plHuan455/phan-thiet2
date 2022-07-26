/* eslint-disable camelcase */
interface Subdivision {
  name: string;
  logo: string;
  slug: string;
  thumbnail: string;
  id: number;
  displayOder: number;
}

export interface OverviewNewsType {
  id: number;
  thumbnail: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  subdivision: Subdivision;
}

export interface OverviewEventsType {
  id: number;
  address: string;
  description: string;
  displayOrder: number;
  endTime: string;
  locale: string;
  slug: string;
  startDate: string;
  startTime: string;
  subdivision?: Subdivision;
  thumbnail: string;
  title: string;
}

export interface OverviewVideoType {
  id: number;
  displayOrder: number;
  thumbnail: string;
  name: string;
  video: string;
  videoType: string;
  slug: string;
  tag?: string;
  publishedAt?: string;
  subdivision?: Subdivision;
}

export interface OverviewImageType {
  path: string;
  subdivision: Subdivision;
}

export interface OverviewDocumentType {
  id: number;
  displayOrder: number;
  slug: string;
  link: string;
  publishedAt: string;
  tag?: string;
  subdivision?: Subdivision;
  name: string;
}

export type PaginationOverview<T> = {
  currentPage: number;
  data: T[];
  firstPageUrl: string;
  from?: number;
  lastPage: number;
  lastPageUrl?: string;
  nextPageUrl?: string;
  path: string;
  perPage: number;
  prevPageUrl?: string;
  to?: number;
  total: number;
}

export interface OverviewType {
  news: PaginationOverview<OverviewNewsType>;
  videos: PaginationOverview<OverviewVideoType>;
  images: PaginationOverview<OverviewImageType>;
  documents: PaginationOverview<OverviewDocumentType>;
  events: PaginationOverview<OverviewEventsType>;
}

export interface OverviewParams {
  keyword?: string;
  limit?: number;
  page?: number;
  type?: 'news' | 'video' | 'image' | 'document' | 'event';
}
