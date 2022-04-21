export interface SubDivisionParams {
  page?: number;
  limit?: number;
  keyword?: string;
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
}

interface Title {
  active: string;
  title: string;
  description?: string;
}

interface Content {
  content: Title & {
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
  video: Title & {
    link?: string;
  };
  journey: Title;
  library: Title;
  related: Title;
  utility: Title & {
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
  }
  location: Title;
  subscribe: Title;
  collection: Title;
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
