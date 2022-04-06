import React from 'react';

import dataDummy from 'assets/dataDummy/banner';
import BannerHome from 'components/templates/BannerHome';

const Banner: React.FC = () => (
  <BannerHome
    {...dataDummy}
  />
);

export default Banner;
