/* eslint-disable camelcase */
export interface SubDivisionParams {
  page?: number;
  limit?: number;
  keyword?: string;
  sort?: string;
  except_ids?: string;
}

interface SubdivisionCommonTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  slug: string;
  name: string;
  logo: string;
  content: Content;
  type: string;
  locale: string;
  color: string;
  description?: string;
}

interface Title {
  active: boolean;
  title: string;
  description?: string;
}

export type SubdivisionContentTypes = Title & {
  items: {
    item1: {
      image: string;
      title: string;
    },
    item2: {
      image: string;
      title: string;
    }
  }
}

export type SubdivisionVideoTypes = Title & {
  link?: string;
};

export type SubdivisionJourneyTypes = Title;
export type SubdivisionLibraryTypes = Title;
export type SubdivisionRelatedTypes = Title;
export type SubdivisionLocationTypes = Title & {
  titleSection?: string;
};
export type SubdivisionSubscribeTypes = Title;
export type SubdivisionCollectionTypes = Title;

export type SubdivisionUtilityTypes = Title & {
  map: {
    image: string;
    items: {
      color: string;
      image: string;
      point: {
        x: string;
        y: string;
      };
      title: string;
      number: string;
    }[];
  };
};

interface Content {
  content: SubdivisionContentTypes;
  video: SubdivisionVideoTypes;
  journey: SubdivisionJourneyTypes;
  library: SubdivisionLibraryTypes;
  related: SubdivisionRelatedTypes;
  utility: SubdivisionUtilityTypes;
  location: SubdivisionLocationTypes;
  subscribe: SubdivisionSubscribeTypes;
  collection: SubdivisionCollectionTypes;
}

export type SubDivisionListTypes = SubdivisionCommonTypes[];

export type SubDivisionDetailTypes = SubdivisionCommonTypes & {
  openGraph: OpenGraphDataTypes;
  seoData: SEODataTypes;
}

export interface SubDivisionMapListTypes {
  image: string;
  items: Item[];
}

export interface Item {
  point: Point;
  subdivisionId: string;
  subdivision: Subdivision;
}

export interface Point {
  x: string;
  y: string;
}

export interface Subdivision {
  name: string;
  thumbnail: string;
  slug: string;
  pinned: boolean;
}
