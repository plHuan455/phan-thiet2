import React, { useEffect, useMemo, useState } from 'react';

import imgMap from 'assets/images/divisionUtilities/bg.png';
import Animate from 'components/organisms/Animate';
import DivisionUtilities from 'components/templates/DivisionUtilities';
import { SubdivisionUtilityTypes } from 'services/subdivision/types';
import { baseURL, imageLoader } from 'utils/functions';

interface UtilitiesProps {
  data?: SubdivisionUtilityTypes;
}

const Utilities: React.FC<UtilitiesProps> = ({ data }) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        if (data?.map.image) {
          const image = await imageLoader(baseURL(data.map.image));
          setDimension({
            width: image.width,
            height: image.height,
          });
        }
        return null;
      } catch (error) {
        return error;
      }
    })();
  }, [data?.map.image]);

  const listLocations = useMemo(() => data?.map.items?.map((item, index) => ({
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

  if (!data?.active) return null;

  // if (dimension.width <= 0 && dimension.height <= 0) return null;

  return (
    <Animate type="fadeInUp">
      <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
        <DivisionUtilities
          background={baseURL(data?.map.image) || imgMap}
          title={data?.title}
          listLocations={listLocations}
          heightImage={dimension.height}
          widthImage={dimension.width}
        />
      </section>
    </Animate>
  );
};

Utilities.defaultProps = {
  data: undefined,
};

export default React.memo(Utilities);
