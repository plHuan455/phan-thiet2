import React, {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import { useQuery } from 'react-query';

import srcBg from 'assets/images/journeys/bg.jpg';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import JourneysTemplate from 'components/templates/Journeys';
import PopupImage from 'components/templates/PopupImage';
import { getImageListService } from 'services/images';
import { getSubDivisionListService } from 'services/subdivision';
import CONSTANTS from 'utils/constants';
import {
  baseString, getBlockData, baseURL,
} from 'utils/functions';

interface DivisionProps{
  titleSection: string;
  link?: LinkTypes;
}

interface JourneysProps{
  titleSection: string,
}

interface ImageState {
  isOpen?: boolean;
  images?: {
    path: string;
  }[];
}

interface ActionWithPayload {
  type: string;
  payload: ImageState;
}

const reducer = (state: ImageState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'update_image':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Division: React.FC<SectionBlocks> = ({ blocks }) => {
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);
  const journeysBlocks = getBlockData<JourneysProps>('experience_secondhome', blocks);

  const [state, dispatcher] = useReducer(reducer, {
    isOpen: false,
    images: [],
  });

  const [activeJourneys, setActiveJourneys] = useState(0);

  const { data: subDivisionList } = useQuery(['getSubDivisionListHome'], () => getSubDivisionListService());

  const { data: imageList, isLoading } = useQuery(
    ['getImageJourneys', activeJourneys], () => getImageListService({
      subdivision_id: String(subDivisionList?.data[activeJourneys].id),
    }),
  );

  const subDivisionData = useMemo(() => subDivisionList?.data?.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    // TODO: Add locale later
    href: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
    description: baseString(item?.description),
  })), [subDivisionList]);

  const journeysData = useMemo(() => subDivisionList?.data.map((item) => ({
    title: item.name,
    description: baseString(item?.description),
    // TODO: Add Translations Later
    textBtn: 'Tham quan các mẫu nhà',
    //  TODO: Add locale later
    href: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
  })), [subDivisionList]);

  const listCardJourneys = useMemo(() => imageList?.data.map((item) => ({
    thumbnail: baseURL(item.thumbnailHome),
    title: item.name,
  })), [imageList]);

  const handleClickTimeLine = useCallback((idx: number) => {
    setActiveJourneys(idx);
  }, []);

  const handleClickCard = useCallback((idx?: number) => {
    const item = imageList?.data?.find((_, i) => i === idx)?.images?.map((e) => ({
      path: baseURL(e?.path),
    }));
    if (item) {
      dispatcher({
        type: 'update_image',
        payload: {
          images: item || [],
          isOpen: true,
        },
      });
    }
  }, [imageList]);

  return (
    <>
      <section className="u-pt-md-83 u-pb-80 u-pt-48 u-pb-48 position-relative">
        <Container>
          <FlatMore
            title={{
              text: baseString(divisionBlocks?.titleSection),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015'],
            }}
            link={{
              text: divisionBlocks?.link?.text,
              href: divisionBlocks?.link?.url,
              target: divisionBlocks?.link?.target,
            }}
            data={subDivisionData}
            render={(item) => (
              <Card.Division
                {...item}
              />
            )}
          />
        </Container>
      </section>
      <section>
        <JourneysTemplate
          title={journeysBlocks?.titleSection}
          titleField="Các mẫu nhà"
          emptyStr="Chưa có dữ liệu"
          dataTimeLine={journeysData}
          listCard={listCardJourneys}
          srcBg={srcBg}
          handleClickTimeLine={handleClickTimeLine}
          loading={isLoading}
          handleClickCard={handleClickCard}
        />
      </section>
      <PopupImage
        isOpen={state.isOpen || false}
        handleClose={() => dispatcher({
          type: 'update_image',
          payload: {
            isOpen: false,
            images: [],
          },
        })}
        currentImgIdx={0}
        dataImageList={
          state?.images?.map((item) => item.path) || []
        }
      />
    </>
  );
};

export default Division;
