import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import PopupImageDetail from '../component/popupImageDetail';

import divisionJourneysData from 'assets/dataDummy/divisionJourneys';
import DivisionJourneys, { DivisionJourneysProps } from 'components/templates/DivisionJourneys';
import getUtilityCategoriesService, { getUtilityListService } from 'services/utilities';
import { baseURL } from 'utils/functions';

interface JourneysProps extends DivisionJourneysProps {}

const Journeys: React.FC<JourneysProps> = (props) => {
  const [open, setOpen] = useState<number | undefined>(undefined);

  const { data: utilityCategories } = useQuery(
    'getUtilityCategories', getUtilityCategoriesService,
  );

  const { data: utilitiesList, isLoading } = useQuery(
    ['getUtilitiesList'], () => getUtilityListService(),
    {
      enabled: !!utilityCategories?.length,
    },
  );

  const utilitiesData = useMemo(() => utilitiesList?.data?.map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    title: item.name,
    ratio: '354x221' as Ratio,
    description: item.description,
    handleClick: () => handleOpenPopup(item.slug),
    slug: item.slug,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  })), [utilitiesList]);

  const handleOpenPopup = (slug: string) => {
    utilitiesData?.forEach((item, index) => {
      if (item.slug === slug) {
        setOpen(index);
      }
    });
  };

  return (
    <section>
      <DivisionJourneys
        data={utilitiesData}
        srcBg={divisionJourneysData.srcBg}
        loading={isLoading}
        textNotFound="Không tìm thấy dữ liệu"
        {...props}
      />
      <PopupImageDetail
        isOpen={open !== undefined}
        handleClose={() => setOpen(undefined)}
        dataList={utilitiesData || []}
        slideActive={open || 0}
      />
    </section>
  );
};

export default Journeys;
