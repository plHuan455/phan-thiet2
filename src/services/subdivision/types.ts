export interface SubDivisionParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

export interface SubDivisionListTypes {
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
  id: number
  displayOrder: number
  thumbnail: string
  slug: string
  name: string
  logo: string
  content: Content
  openGraph: OpenGraphDataTypes
  seoData: SEODataTypes
}
