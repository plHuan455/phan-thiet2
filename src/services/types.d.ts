/* eslint-disable camelcase */
type Translation = {
  locale: string;
  title?: string;
  slug: string;
  description?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

type OpenGraphDataTypes = {
  ogTitle?: string;
  ogImage?: string;
  ogDescription?: string;
  ogType?: string;
};

type PageDataTypes = {
  id: number;
  templateCode: string;
  code: string;
  isHome: boolean;
  groupCode?: string;
  status: number;
  parentId?: string;
  bannerId?: number;
  createdAt: string;
  updatedAt: string;
  locale: string;
  title: string;
  slug: string;
  description: string;
  translations: Translation[]
} & OpenGraphDataTypes;

type BannersData = {
  link?: string;
  title: string;
  subTitle: string;
  imageMobile: string;
  imageTablet: string;
  imageDesktop: string;
}

type BannersDataTypes = {
  data: BannersData;
  type: string;
}

type SEODataTypes = {
  title?: string;
  description?: string;
  keywords?: string;
}

type BreadcrumbsDataTypes = {
  type: string;
  text: string;
  slug: string;
}

type BlockDataTypes<T> = {
  code: string;
  blocks: T;
  active: boolean;
}

type BasePageDataTypes<T> = {
  pageData: PageDataTypes;
  blocks: BlockDataTypes<T>[];
  banners: BannersDataTypes[];
  seoData: SEODataTypes;
  breadcrumbs: BreadcrumbsDataTypes[];
};

type LinkData = {
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
}

type MetaData = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
};

type APIPaginationResponse<T> = {
  data: T;
  meta: MetaData;
  links: LinkData;
};

type DataStaticTypes = {
  templateCode: string;
  slug: string;
  title: string;
}

type DataStaticErrorBlockTypes = {
  image?: string;
  errorDescription?: string;
  thanksDescription?: string;
  link1: LinkTypes;
  link2: LinkTypes;
}

type DataStaticErrorTypes = {
  templateCode: string;
  slug: string;
  title: string;
  blocks: BlockDataTypes<DataStaticErrorBlockTypes>[];
}

type LinkTypes = {
  text?: string;
  url?: string;
  target?: string;
  icon?: string;
}

type CommonItemProps = {
  id: number;
  displayOrder: number;
  slug: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
}

type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  // utm_term?: string;
  utm_campaign?: string;
  utm_content?: string;
}

type ErrorsResponse = {
  errors: {
    code: string;
    title: string;
  }[];
  message: string;
}

type LangPrefixTypes = 'EN' | 'VI';

type SortTypes = 'newest' | 'oldest';

type SectionBlocks = {
  blocks: BlockDataTypes<T>[];
}

type SectionBanners = {
  banners: BannersDataTypes[];
}
