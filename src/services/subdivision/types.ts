export interface SubDivisionParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface SubDivisionListTypes {
  title: any;
  addressLat: number;
  addressLong: number;
  id: number;
  displayOrder: number;
  thumbnail: string;
  logo: string;
  name: string;
  slug: string;
  locale: string;
  content: Content;
}

interface Content {
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
  title: string;
  video: string;
  journey: {
    title: string;
  }
  library: {
    title: string;
  }
  related: {
    title: string;
  }
  utility: {
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
    },
    title: string;
  }
  location: Location;
  subscribe: {
    title: string;
  }
  collection: {
    title: string;
    description: string;
  }
  description: string;
}

export interface SubDivisionDetailTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  slug: string;
  name: string;
  logo: string;
  content: Content;
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
