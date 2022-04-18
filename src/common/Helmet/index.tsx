import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from 'store/hooks';

interface Props {
  seoData?: SEODataTypes;
  ogData?: OpenGraphDataTypes;
}

const HelmetContainer: React.FC<Props> = ({ ogData, seoData }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const og = useAppSelector((state) => state.system?.data?.og);
  const seo = useAppSelector((state) => state.system?.data?.seo);

  const custom = useMemo(() => ({
    title: seoData?.title || seo?.title,
    description: seoData?.description || seo?.description,
    keywords: seoData?.keywords || seo?.keywords,
    ogTitle: ogData?.ogTitle || og?.ogTitle || seoData?.title || seo?.title,
    ogDescription:
      ogData?.ogDescription || og?.ogDescription || seoData?.description || seo?.description,
    ogType: ogData?.ogType || og?.ogType,
    ogImage: ogData?.ogImage || og?.ogImage,
  }), [seo, og, seoData, ogData]);
  return (
    <Helmet>
      {custom?.title && <title>{custom.title}</title>}
      {custom?.description && <meta name="description" content={custom.description} />}
      {custom?.keywords && <meta name="keyword" content={custom.keywords} />}
      <meta property="og:url" content={window.location.href} />
      {custom.ogTitle && <meta property="og:title" content={custom.ogTitle} />}
      {custom.ogDescription && <meta property="og:description" content={custom.ogDescription} />}
      {custom.ogImage && <meta property="og:image" content={`${BASE_URL}${custom.ogImage}`} />}
      {custom.ogType && <meta property="og:type" content={custom.ogType} />}
      {custom.title && <meta name="twitter:title" content={custom.title} />}
      {custom.description && <meta name="twitter:description" content={custom.description} />}
    </Helmet>
  );
};

HelmetContainer.defaultProps = {
  ogData: undefined,
  seoData: undefined,
};

export default HelmetContainer;
