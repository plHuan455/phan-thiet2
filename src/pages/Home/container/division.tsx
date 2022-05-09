import React, {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import srcBg from 'assets/images/journeys/bg.jpg';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import JourneysTemplate from 'components/templates/Journeys';
import PopupImage from 'components/templates/PopupImage';
import i18n from 'i18n';
import { getImageListService } from 'services/images';
import { getSubDivisionListService } from 'services/subdivision';
import CONSTANTS from 'utils/constants';
import {
  baseString, getBlockData, baseURL, redirectURL,
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
  const { language } = i18n;
  const { t } = useTranslation();
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);
  const journeysBlocks = getBlockData<JourneysProps>('experience_secondhome', blocks);

  const [state, dispatcher] = useReducer(reducer, {
    isOpen: false,
    images: [],
  });

  const [activeJourneys, setActiveJourneys] = useState(0);

  const { data: subDivisionList } = useQuery(['getSubDivisionListHome', [language]], () => getSubDivisionListService());

  const { data: imageList, isLoading } = useQuery(
    ['getImageJourneys', activeJourneys], () => getImageListService({
      subdivision_id: String(subDivisionList?.data[activeJourneys].id),
    }), {
      enabled: !!subDivisionList?.data[activeJourneys].id,
    },
  );

  const subDivisionData = useMemo(() => subDivisionList?.data?.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    href: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
    description: baseString(item?.description),
  })), [subDivisionList, language]);

  const journeysData = useMemo(() => subDivisionList?.data.map((item) => ({
    title: item.name,
    description: baseString(item?.description),
    textBtn: t('button.visiting_houses'),
    href: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
  })), [subDivisionList, language, t]);

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
      <section className="u-pt-lg-40 u-pt-md-30 u-pt-20 u-pb-20 u-pb-lg-40 u-pb-md-30 position-relative">
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
          titleField={t('general.house_models')}
          emptyStr={t('general.not_found_data')}
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
