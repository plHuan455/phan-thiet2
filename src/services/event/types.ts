export type EventListParams = {
  page?: number;
  limit?: number;
  keyword?: string;
}

export type EventItemCommonTypes = {
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

export type EventListTypes = EventItemCommonTypes[];

type Subdivision = {
  name: string;
  slug: string;
  thumbnail: string;
  logo: string;
}

type Tag = {
  name: string;
}

export type EventDetailTypes ={
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
  tags: Tag[];
  startTime: string;
  endTime: string;
  relatedEvents: EventItemCommonTypes[];
}
