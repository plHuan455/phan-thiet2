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
  content: {
    active: string;
    description: string;
    title: string;
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
  video: {
    active: string;
    link: string;
  };
  journey: {
    active: string;
    title: string;
  }
  library: {
    active: string;
    title: string;
  }
  related: {
    active: string;
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
    active: string;
    title: string;
  }
  location: {
    active: string;
    title: string;
    description: string;
  };
  subscribe: {
    active: string;
    title: string;
  }
  collection: {
    title: string;
    active: string;
    description: string;
  }
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
  type: string;
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
