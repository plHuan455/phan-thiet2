import React, {
  useCallback, useMemo, useReducer, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import srcBg from 'assets/images/journeys/bg.jpg';
import JourneysTemplate from 'components/templates/Journeys';
import PopupImage from 'components/templates/PopupImage';
import i18n from 'i18n';
import { getImageListService } from 'services/images';
import { getSubDivisionListService } from 'services/subdivision';
import CONSTANTS from 'utils/constants';
import {
  baseString, getBlockData, baseURL, redirectURL,
} from 'utils/functions';

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

const Journeys: React.FC<SectionBlocks> = ({ blocks }) => {
  const { language } = i18n;
  const { t } = useTranslation();
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

export default Journeys;
