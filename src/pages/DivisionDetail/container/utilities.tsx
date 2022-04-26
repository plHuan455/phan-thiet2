import React, { useEffect, useMemo, useState } from 'react';

import DivisionUtilities from 'components/templates/DivisionUtilities';
import { SubdivisionUtilityTypes, SubdivisionUtilityMapTypes } from 'services/subdivision/types';
import { baseURL, imageLoader } from 'utils/functions';

interface UtilitiesProps {
  data?: SubdivisionUtilityTypes;
  map?: SubdivisionUtilityMapTypes;
}

const Utilities = React.forwardRef<HTMLDivElement, UtilitiesProps>(({ data, map }, ref) => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    (async () => {
      try {
        if (map?.image) {
          const image = await imageLoader(baseURL(map?.image));
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
  }, [map?.image]);

  const listLocations = useMemo(() => map?.items?.map((item, index) => ({
    x: Number(item.point.x),
    y: Number(item.point.y),
    id: index,
    imgSrc: baseURL(item.image),
    title: item.title,
    utilitiesIcon: {
      number: item.number,
      fillColor: item.color,
    },
  })), [map]);

  if (!data?.active) return null;

  // if (dimension.width <= 0 && dimension.height <= 0) return null;

  return (
    <section ref={ref} className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
      <DivisionUtilities
        background={baseURL(map?.image)}
        title={data?.title}
        listLocations={listLocations}
        heightImage={dimension.height}
        widthImage={dimension.width}
      />
    </section>
  );
});

Utilities.defaultProps = {
  data: undefined,
};

export default React.memo(Utilities);
