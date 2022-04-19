import React, { useEffect, useMemo, useState } from 'react';

import imgMap from 'assets/images/divisionUtilities/bg.png';
import DivisionUtilities from 'components/templates/DivisionUtilities';
import { SubDivisionDetailTypes } from 'services/subdivision/types';
import { baseURL, imageLoader } from 'utils/functions';

interface UtilitiesProps {
  data?: SubDivisionDetailTypes;
}

const Utilities: React.FC<UtilitiesProps> = ({ data }) => {
  const [demension, setDemension] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    (async () => {
      try {
        if (data?.content.utility.map.image) {
          const image = await imageLoader(baseURL(data.content.utility.map.image));
          setDemension({
            width: image.width,
            height: image.height,
          });
        }
        return null;
      } catch (error) {
        return error;
      }
    })();
  }, [data]);

  const listLocations = useMemo(() => data?.content.utility.map.items?.map((item, index) => ({
    x: Number(item.point.x),
    y: Number(item.point.y),
    id: index,
    imgSrc: baseURL(item.image),
    title: item.title,
    utilitiesIcon: {
      number: item.number,
      fillColor: item.color,
    },
  })), [data]);

  return (
    <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
      <DivisionUtilities
        background={baseURL(data?.content.utility.map.image) || imgMap}
        title={data?.content.utility.title}
        listLocations={listLocations}
        heightImage={demension.height}
        widthImage={demension.width}
      />
    </section>
  );
};

Utilities.defaultProps = {
  data: undefined,
};

export default Utilities;
