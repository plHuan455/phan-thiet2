import React, { useMemo } from 'react';

import srcBanner from 'assets/images/bannerHome/banner_home.jpg';
import BannerHome from 'components/templates/BannerHome';
import { baseURL, getBlockData } from 'utils/functions';

export interface BannerBlocks extends SectionBlocks {
  banners: BannersDataTypes[];
}

interface BannerItemProps {
  icon?: string;
  text?: string;
  image?: string;
}
interface BannerProps {
  item1?: BannerItemProps;
  item2?: BannerItemProps;
  item3?: BannerItemProps;
  item4?: BannerItemProps;
  content?: string;
}

const Banner: React.FC<BannerBlocks> = ({
  // banners ,
  blocks,
}) => {
  const bannerBlocks = getBlockData<BannerProps>('utilities', blocks);
  const utilitiesBlockContent = useMemo(() => {
    const data = [
      bannerBlocks?.item1,
      bannerBlocks?.item2,
      bannerBlocks?.item3,
      bannerBlocks?.item4,
    ];
    return (
      data
      && data.map((val) => ({
        srcImgMain: baseURL(val?.image),
        srcImgSub: baseURL(val?.icon),
        title: val?.text,
      }))
    );
  }, [bannerBlocks]);

  return (
    <BannerHome
      description={bannerBlocks?.content}
      list={utilitiesBlockContent}
      banner={{
        src: srcBanner,
      }}
    />
  );
};

export default Banner;
