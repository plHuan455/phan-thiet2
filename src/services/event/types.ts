export interface EventListParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface EventListTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  title: string;
  slug: string;
  locale: string;
  address: string;
  description: string;
  startDate: string;
  subdivision: Subdivision;
  startTime: string;
  endTime: string;
}

interface Subdivision {
  name: string;
  slug: string;
  thumbnail: string;
  logo: string;
}

export interface EventDetailTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  title: string;
  slug: string;
  locale: string;
  address: string;
  description: string;
  startDate: string;
  subdivision: Subdivision;
  tags: any[];
  startTime: string;
  endTime: string;
  relatedEvents: any[];
}
