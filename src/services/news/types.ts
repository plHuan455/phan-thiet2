/* eslint-disable camelcase */
export interface NewsListParams {
  page?: number
  limit?: number
  keyword?: string
  category_slug?: string
  form_date?: string
  to_date?: string
  except_ids?: string
}

export interface NewsListTypes {
  id: number
  displayOrder: number
  thumbnail: string
  tags: any[]
  title: string
  slug: string
  description: string
  content: string
  locale: string
  publishedAt: string
}
export interface NewsDetailTypes extends NewsListTypes {
  seoData: SEODataTypes;
  breadcrumbs: BreadcrumbsDataTypes[];
  openGraph: OpenGraphDataTypes;
}
