import React, { useEffect, useMemo, useState } from 'react';

import imgMap from 'assets/images/divisionUtilities/bg.png';
import DivisionUtilities from 'components/templates/DivisionUtilities';
import { SubDivisionDetailTypes } from 'services/subdivision/types';
import { baseURL, imageLoader } from 'utils/functions';

interface UtilitiesProps {
  data?: SubDivisionDetailTypes;
}

const Utilities: React.FC<UtilitiesProps> = ({ data }) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        if (data?.content.utility.map.image) {
          const image = await imageLoader(baseURL(data.content.utility.map.image));
          setDimension({
            width: image.width,
            height: image.height,
          });
          console.log(image);
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

  if (dimension.width <= 0 && dimension.height <= 0) return null;

  return (
    <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
      <DivisionUtilities
        background={baseURL(data?.content.utility.map.image) || imgMap}
        title={data?.content.utility.title}
        listLocations={listLocations}
        heightImage={dimension.height}
        widthImage={dimension.width}
      />
    </section>
  );
};

Utilities.defaultProps = {
  data: undefined,
};

export default Utilities;
