interface Subdivision {
  name: string;
  logo: string;
  slug: string;
  thumbnail: string;
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
}

export interface OverviewDocumentType {
  id: number;
  displayOrder: number;
  slug: string;
  link: string;
  publishedAt: string;
  tag?: string;
  title?: string;
  subdivision?: Subdivision;
}

export interface OverviewType {
  news?: OverviewNewsType[];
  videos?: OverviewVideoType[];
  images?: OverviewImageType[];
  documents?: OverviewDocumentType[];
  events?: OverviewEventsType[];
}

export interface OverviewParams {
  keyword?: string;
}
