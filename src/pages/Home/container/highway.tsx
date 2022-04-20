import React from 'react';

import PlanningHighway from 'components/templates/PlanningHighway';
import { baseURL, getBlockData } from 'utils/functions';

interface ItemTypes {
  content: string;
  image: string;
}

interface TimeTypes {
  time: string;
  content: string;
}
interface HighwayProps {
  title: string;
  content: string;
  item1: ItemTypes;
  item2: ItemTypes;
  time1: TimeTypes;
  time2: TimeTypes;
  time3: TimeTypes;
  time4: TimeTypes;
}

const Highway: React.FC<SectionBlocks> = ({ blocks }) => {
  const highwayBlock = getBlockData<HighwayProps>(
    'map_location',
    blocks,
  );

  return (
    <section>
      {
        highwayBlock && (
          <PlanningHighway
            dataInfo={{
              san_bay_phan_thiet: {
                imgSrc: baseURL(highwayBlock.item1.image),
                content: highwayBlock.item1.content,
              },
              san_bay_long_thanh: {
                imgSrc: baseURL(highwayBlock.item2.image),
                content: highwayBlock.item2.content,
              },
              cao_toc: {
                content: highwayBlock.content,
              },
            }}
            dataScheduleBox={{
              titleScheduleBox: highwayBlock?.title,
              dataSchedule: [
                highwayBlock.time1,
                highwayBlock.time2,
                highwayBlock.time3,
                highwayBlock.time4,
              ],
            }}
          />
        )
      }
    </section>
  );
};

export default Highway;
