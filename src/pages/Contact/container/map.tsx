import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useInfiniteQuery } from 'react-query';

import dummyContact from 'assets/dataDummy/contact';
import Animate from 'components/organisms/Animate';
import ContactMap from 'components/templates/ContactMap';
import { AddressItemProps } from 'components/templates/ContactMap/component';
import i18n from 'i18n';
import { headquartersService } from 'services/headquarters';
import { getBlockData } from 'utils/functions';

interface MapProps {
  title: string;
}

interface ActiveProps extends AddressItemProps {
  idx?: number;
}

const Map: React.FC<SectionBlocks> = ({ blocks }) => {
  const { language } = i18n;

  const [activeHeadquarter, setActiveHeadquarter] = useState<ActiveProps>({
    idx: -1,
    position: { lat: 0, lng: 0 },
  });

  const mapBlock = useMemo(() => {
    const blockPageContent = getBlockData<MapProps>(
      'contact_headquarter',
      blocks,
    );
    return {
      title: blockPageContent?.title,
    };
  }, [blocks]);

  const {
    data: headquartersData,
    hasNextPage: hasNextHeadquarter,
    isFetchingNextPage,
    fetchNextPage: fetchNextHeadquarter,
  } = useInfiniteQuery(
    ['getHeadquartersData', [language]],
    ({ pageParam = 1 }) => headquartersService({
      page: pageParam,
      limit: 3,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const headquartersList = useMemo(
    (): AddressItemProps[] => (headquartersData?.pages || []).reduce(
      (prev: AddressItemProps[], curr) => [
        ...prev,
        ...curr.data.map((item) => ({
          label: item.name,
          address: item.addressText,
          phone: item.phone,
          // TODO: translate later
          textContact: 'Liên hệ',
          position: {
            lat: (item.addressLat && parseFloat(item.addressLat)) || 0,
            lng: (item.addressLong && parseFloat(item.addressLong)) || 0,
          },
        })),
      ],
      [],
    ),
    [headquartersData],
  );

  useEffect(() => {
    if (!headquartersList.length || activeHeadquarter?.idx !== -1) return;
    setActiveHeadquarter({ ...headquartersList[0], idx: 0 });
  }, [activeHeadquarter, headquartersList]);

  const onClickHeadquarter = useCallback(
    (item: AddressItemProps, idx: number) => {
      setActiveHeadquarter({ ...item, idx });
    },
    [],
  );

  return (
    <Animate type="fadeInUp">
      <ContactMap
        list={headquartersList}
        title={mapBlock.title}
        loading={isFetchingNextPage}
        // TODO: add form general later
        mapApiKey={dummyContact.mapApiKey}
        defaultPosition={activeHeadquarter?.position}
        headQuarterIdx={activeHeadquarter?.idx}
        onLoadMore={() => hasNextHeadquarter && fetchNextHeadquarter()}
        onClick={onClickHeadquarter}
      />
    </Animate>
  );
};

export default Map;
