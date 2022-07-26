import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import HeaderSub from './HeaderSub';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Nav from 'components/molecules/Nav';
import Pulldown, { OptionType } from 'components/molecules/PullDown';
import Search from 'components/templates/Banner/component';
import useDetectHeader from 'hooks/useDetectHeader';
import useKeywords from 'hooks/useKeywords';
import useWindowScroll from 'hooks/useWindowScroll';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

export interface HeaderDivisionProps {
  mainLogo?: LinkTypes;
  menuSubDivision?: MenuItem[];
  logoDivision?: LinkTypes;
  menuMainDivision?: MenuItem[];
  language?: {
    langList: OptionType[];
    value: OptionType;
    handleChangeLang?: (item?: OptionType) => void;
  };
  handleSearch?: (val: string | undefined) => void;
}

const HeaderDivision: React.FC<HeaderDivisionProps> = ({
  mainLogo,
  menuSubDivision,
  menuMainDivision,
  language,
  logoDivision,
  handleSearch,
}) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [idExpand, setIdExpand] = useState<Record<'parent' | 'child', number | undefined>>();
  const [searchVal, setSearchVal] = useState<string | undefined>();
  const [isFocusInput, setIsFocusInput] = useState(false);

  const refPageYOffset = useRef<number>();

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClickExpand = useCallback(
    (item: MenuItem) => {
      if (window.innerWidth > 991) return;
      if (item.id === idExpand?.child) {
        setIdExpand({ child: undefined, parent: idExpand?.parent });
        return;
      }
      if (item.id === idExpand?.parent) {
        setIdExpand(undefined);
        return;
      }
      setIdExpand({ child: item.id, parent: item.parentId });
    },
    [idExpand?.child, idExpand?.parent],
  );

  useDetectHeader(isOpen, handleCloseMenu);

  const renderLang = useMemo(() => (
    <Pulldown
      variant="normal"
      value={language?.value}
      options={language?.langList || []}
      handleSelect={language?.handleChangeLang}
    />
  ), [language]);

  const renderButtonSearch = useCallback((iconName:IconName) => (
    <button type="button" className="t-headerDivision_btn-search" onClick={() => setIsOpenSearch(true)}>
      <Icon iconName={iconName} size="20" />
    </button>
  ), []);

  useWindowScroll(() => {
    if (window.innerWidth <= 992) {
      if (window.pageYOffset > 70 && Number(refPageYOffset.current || 0) < window.pageYOffset) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      refPageYOffset.current = window.pageYOffset;
    }

    if (window.innerWidth > 992) {
      if (window.pageYOffset > 41) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }
  });

  const onSearch = (val: string | undefined) => {
    setIsOpenSearch(false);
    onSubmit(val);
    if (handleSearch) {
      handleSearch(val);
    }
  };

  const { options, isLoading, onSubmit } = useKeywords({
    searchValue: searchVal,
    isFocus: isFocusInput,
  });

  return (
    <header className="t-headerDivision">
      <div className="t-headerDivision_subHeader">
        <HeaderSub
          logo={mainLogo}
          menu={menuSubDivision && menuSubDivision[0]?.subMenu}
          isScroll={isScroll}
        />
      </div>
      <div className={mapModifiers('t-headerDivision_main', isScroll && 'isScroll')}>
        <Container>
          <div className={mapModifiers('t-headerDivision_layer-search', isOpenSearch && 'open')}>
            <button className="button-close" type="button" onClick={() => setIsOpenSearch(false)}>
              <Icon iconName="closeWhite" size="36" />
            </button>
            <div className="t-headerDivision_layer-search_content">
              <Heading type="h2" modifiers={['700', 'uppercase', 'center', 'white']}>
                {t('form.search')}
              </Heading>
              <Search
                list={options}
                loading={isLoading}
                onChange={(keyword) => setSearchVal(keyword)}
                placeholder={t('form.search_content')}
                onSearch={onSearch}
                onFocus={() => setIsFocusInput(true)}
              />
            </div>
          </div>
          <div className="t-headerDivision_wrap">
            <div
              className="t-headerDivision_hamburger"
              onClick={() => setIsOpen(true)}
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="t-headerDivision_left">
              {mainLogo && (
                <div className="t-headerDivision_left_logoMain">
                  <Link href={mainLogo?.url} target={mainLogo?.target}>
                    <Image src={mainLogo?.icon} ratio="184x59" />
                  </Link>
                </div>
              )}
              {logoDivision && (
                <div className="t-headerDivision_left_logoSub">
                  <Link href={logoDivision?.url} target={logoDivision?.target}>
                    <img src={logoDivision?.icon} alt="logo-division" />
                  </Link>
                </div>
              )}
            </div>
            <div className={mapModifiers('t-headerDivision_right', isOpen && 'open')}>
              <div className="t-headerDivision_right_header-mobile">
                <div className="t-headerDivision_close-mobile">
                  <div
                    onClick={() => setIsOpen(false)}
                    className="hamburger active"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="t-headerDivision_search-mobile">
                  {renderButtonSearch('searchOrange')}
                </div>
              </div>
              <div className="t-headerDivision_nav">
                {logoDivision && (
                  <div className="t-headerDivision_nav_logoSub">
                    <Link href={logoDivision?.url} target={logoDivision?.target}>
                      <img src={logoDivision?.icon} alt="logo-division" />
                    </Link>
                  </div>
                )}
                <Nav
                  menu={menuMainDivision}
                  idExpand={[idExpand?.child, idExpand?.parent]}
                  pathname={pathname}
                  handleCloseMenu={handleCloseMenu}
                  handleClickExpand={handleClickExpand}
                  variant="subdivisions"
                />
                <div className="t-headerDivision_nav_menu">
                  <Nav
                    menu={menuSubDivision}
                    pathname={pathname}
                    handleCloseMenu={handleCloseMenu}
                    handleClickExpand={handleClickExpand}
                    idExpand={[idExpand?.child, idExpand?.parent]}
                  />
                </div>
              </div>
              <div className="t-headerDivision_utility">
                <div className="t-headerDivision_language-desktop">
                  <div className="pulldown-lang">
                    {renderLang}
                  </div>
                </div>
                <div className="t-headerDivision_search">
                  {renderButtonSearch('searchWhite')}
                </div>
              </div>
            </div>
            <div className="t-headerDivision_language-mobile">
              <div className="pulldown-lang">
                {renderLang}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default HeaderDivision;
