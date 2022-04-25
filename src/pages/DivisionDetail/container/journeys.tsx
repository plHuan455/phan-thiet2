import React, { useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import PopupImageDetail from '../component/popupImageDetail';

import srcBg from 'assets/images/divisionJourneys/bg.jpg';
import DivisionJourneys from 'components/templates/DivisionJourneys';
import { SubdivisionJourneyTypes } from 'services/subdivision/types';
import { getUtilityListBySubDivisionService } from 'services/utilities';
import { UtilitiesItemType } from 'services/utilities/types';
import { baseURL } from 'utils/functions';

interface JourneysProps {
  id?: number;
  data?: SubdivisionJourneyTypes;
}

const fnCustomData = (list?:UtilitiesItemType[]) => list?.map((x) => ({
  thumbnail: baseURL(x.thumbnail),
  title: x.name,
  description: x.description,
})) || [];

const Journeys: React.FC<JourneysProps> = ({
  id,
  data,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [idActive, setIdActive] = useState<number>();
  const [slideActive, setSlideActive] = useState<number>();

  const { data: utilitiesData } = useQuery(
    ['getListBySubDivision', { id }],
    () => getUtilityListBySubDivisionService(`${id}`),
    {
      enabled: !!id,
    },
  );

  useEffect(() => {
    if (utilitiesData && utilitiesData.hasCategory && utilitiesData.categories) {
      setIdActive(utilitiesData.categories[0]?.id);
    }
  }, [utilitiesData]);

  const findUtilitiesActive = useMemo(
    () => utilitiesData?.categories?.find((x) => x.id === idActive),
    [idActive, utilitiesData?.categories],
  );

  const tabs = useMemo(() => utilitiesData?.categories?.map((x) => ({
    name: x.name,
    id: x.id,
  })), [utilitiesData?.categories]);

  const dataJourneys = useMemo(() => (
    !utilitiesData?.hasCategory
      ? fnCustomData(utilitiesData?.utilities)
      : fnCustomData(findUtilitiesActive?.utilities)
  ), [
    findUtilitiesActive?.utilities,
    utilitiesData?.hasCategory,
    utilitiesData?.utilities,
  ]);

  return (
    <section>
      <DivisionJourneys
        tabs={tabs}
        data={dataJourneys}
        srcBg={srcBg}
        title={data?.title}
        idActive={idActive}
        handleClick={(val) => setIdActive(val)}
        handleClickCard={(val) => {
          setOpen(true);
          setSlideActive(val);
        }}
        textNotFound="Không tìm thấy dữ liệu" // TODO: translation later
      />
      <PopupImageDetail
        isOpen={open}
        handleClose={() => setOpen(false)}
        dataList={dataJourneys}
        slideActive={slideActive || 0}
      />
    </section>
  );
};

Journeys.defaultProps = {
  id: undefined,
  data: undefined,
};

export default Journeys;
