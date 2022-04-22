import { useMemo } from 'react';
import { useQuery } from 'react-query';

import dummyFooter from 'assets/dataDummy/footer';
import dummyHeader from 'assets/dataDummy/header';
import { headquartersService } from 'services/headquarters';
import { useAppSelector } from 'store/hooks';
import { baseString, baseURL } from 'utils/functions';

const useLayout = () => {
  const {
    mainHeader: menuHeaderDefault,
    header2: menuMainDivision,
    mainFooter,
    footer2: menuTermFooter,
    division: menuSubDivision,
  } = useAppSelector((state) => state.menus);

  const {
    pageType,
    data: dataSystem,
  } = useAppSelector((state) => state.system);

  // TODO: check call api when change language
  const {
    data: addressData,
  } = useQuery(
    ['getHeadquartersCommon'],
    () => headquartersService({
      page: 1,
      limit: 3,
      is_view: 1,
    }),
  );

  const addressList = useMemo(() => {
    const addressGeneral = dataSystem?.address ? [{
      address: baseString(dataSystem?.address?.address),
      subTitle: dataSystem?.address?.description,
    }] : [];

    const addressHeadquarters = addressData?.data.map((x) => ({
      title: x.name,
      address: x.addressText,
      contact: {
        label: 'Liên hệ: ', // TODO: Translation later
        value: x.phone,
      },
    })) || [];
    return [...addressGeneral, ...addressHeadquarters];
  }, [addressData?.data, dataSystem?.address]);

  const socialList = useMemo(() => ({
    title: 'THAM KHẢO THÊM TẠI', // TODO: Translation later
    list: dataSystem?.socialMedia?.map((x) => ({
      icon: baseURL(x.icon),
      ...x.link,
    })) || [],
  }), [dataSystem?.socialMedia]);

  const data = useMemo(
    () => ({
      dataHeaderDefault: {
        ...dummyHeader,
        menuMainDivision,
        menuSubDivision,
        menu: menuHeaderDefault,
        mainLogo: {
          icon: baseURL(dataSystem?.logoHeader),
          url: '/',
          target: '_self',
        },
      },
      dataFooter: {
        ...dummyFooter,
        menuList: {
          title: mainFooter[0],
          list: mainFooter[0]?.subMenu || [],
        },
        divisionList: {
          title: mainFooter[1],
          list: mainFooter[1]?.subMenu || [],
        },
        serviceList: {
          title: mainFooter[2],
          list: mainFooter[2]?.subMenu || [],
        },
        subMenu: menuTermFooter,
        logo: baseURL(dataSystem?.logoFooter),
        addressList,
        socialList,
      },
      pageType,
    }),
    [menuMainDivision,
      menuSubDivision,
      menuHeaderDefault,
      mainFooter,
      menuTermFooter,
      pageType,
      dataSystem,
      addressList,
      socialList],
  );

  return data;
};

export default useLayout;
