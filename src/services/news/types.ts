/* eslint-disable camelcase */
export interface NewsListParams {
  page?: number;
  limit?: number;
  keyword?: string;
  category_slug?: string;
  subdivision_id?: string;
  form_date?: string;
  to_date?: string;
  except_ids?: string;
  sort?: string;
}

export interface NewsListTypes {
  id: number;
  displayOrder: number;
  thumbnail: string;
  tags: {
    name: string;
  }[];
  title: string;
  slug: string;
  description: string;
  content: string;
  locale: string;
  publishedAt: string;
  subdivision: {
    name: string;
    slug: string;
    thumbnail: string;
    logo: string;
  };
}
export interface NewsDetailTypes extends NewsListTypes {
  seoData: SEODataTypes;
  breadcrumbs: BreadcrumbsDataTypes[];
  openGraph: OpenGraphDataTypes;
  relatedNews: {
    id: number;
    thumbnail: string;
    title: string;
    slug: string;
    description: string;
    publishedAt: string;
  }[];
}
