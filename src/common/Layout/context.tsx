import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { FooterProps } from 'components/templates/Footer';
import { HeaderProps } from 'components/templates/Header';
import { HeaderDivisionProps } from 'components/templates/HeaderDivision';
import { headquartersService } from 'services/headquarters';
import { useAppSelector } from 'store/hooks';
import { baseString, baseURL } from 'utils/functions';

type PageType = 'default' | 'subdivisions';

export interface LayoutContextResponse {
  pageType?: PageType;
  setPageType?: (type: PageType) => void;
  logoSubdivisions?: string;
  setLogoSubdivisions?: (val: string) => void;
  header?: HeaderProps;
  headerSubdivisions?: HeaderDivisionProps;
  footer?: FooterProps;
  onSearch?: (val?: string) => void;
}

export const LayoutContext = createContext<LayoutContextResponse>({
  pageType: 'default',
  setPageType: undefined,
  logoSubdivisions: undefined,
  setLogoSubdivisions: undefined,
  header: undefined,
  headerSubdivisions: undefined,
  footer: undefined,
  onSearch: undefined,
});

const LayoutProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const dataSystems = useAppSelector((state) => state.system.data);
  const staticAll = useAppSelector((state) => state.static.static);

  const {
    mainHeader: menuHeader,
    division: menuSubDivision,
    header2: menuMainDivision,
    footer2: menuTermFooter,
    mainFooter,
  } = useAppSelector((state) => state.menus);

  const [pageType, setPageType] = useState<PageType>('default');
  const [logoSubdivisions, setLogoSubdivision] = useState<string>();

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
    const addressGeneral = dataSystems?.address ? [{
      address: baseString(dataSystems?.address?.address),
      subTitle: dataSystems?.address?.description,
    }] : [];

    const addressHeadquarters = addressData?.data.map((x) => ({
      title: x.name,
      address: x.addressText,
      subTitle: '',
      contact: {
        label: 'Liên hệ: ', // TODO: Translation later
        value: x.phone,
      },
    })) || [];
    return [...addressGeneral, ...addressHeadquarters];
  }, [addressData?.data, dataSystems?.address]);

  const socialList = useMemo(() => ({
    title: 'THAM KHẢO THÊM TẠI', // TODO: Translation later
    list: dataSystems?.socialMedia?.map((x) => ({
      icon: baseURL(x.icon),
      ...x.link,
    })) || [],
  }), [dataSystems?.socialMedia]);

  const header = useMemo((): HeaderProps => ({
    menu: menuHeader,
    mainLogo: {
      icon: baseURL(dataSystems?.logoHeader),
      url: '/',
      target: '_self',
    },
  }), [dataSystems, menuHeader]);

  const headerSubdivisions = useMemo((): HeaderDivisionProps => ({
    mainLogo: {
      icon: baseURL(dataSystems?.logoHeader),
      url: '/',
      target: '_self',
    },
    menuSubDivision,
    menuMainDivision,
    logoDivision: {
      icon: logoSubdivisions,
    },
  }), [dataSystems, menuSubDivision, menuMainDivision, logoSubdivisions]);

  const footer = useMemo((): FooterProps => ({
    logo: baseURL(dataSystems?.logoFooter) || '',
    subMenu: menuTermFooter,
    copyRightTitle: '@2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các quyền bảo hộ.',
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
    addressList,
    socialList,
  }), [mainFooter, dataSystems, menuTermFooter, addressList, socialList]);

  const onSearch = useCallback((val: string | undefined) => {
    if (!staticAll?.length) return;
    const slugSearch = staticAll?.find((e) => e.templateCode === 'SEARCH')?.slug;
    if (!slugSearch) return;
    navigate(`/${slugSearch}?keyword=${val}&sort=newest`);
  }, [staticAll, navigate]);

  const context: LayoutContextResponse = {
    pageType,
    setPageType: (type) => setPageType(type),
    logoSubdivisions,
    setLogoSubdivisions: (val) => setLogoSubdivision(val),
    header,
    headerSubdivisions,
    footer,
    onSearch,
  };

  return (
    <LayoutContext.Provider value={context}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;