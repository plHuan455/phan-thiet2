import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Nav from 'components/molecules/Nav';
import Pulldown, { OptionType } from 'components/molecules/PullDown';
import Search from 'components/templates/Banner/component';
import useDetectHeader from 'hooks/useDetectHeader';
import useWindowScroll from 'hooks/useWindowScroll';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

export interface HeaderProps {
  mainLogo?: LinkTypes;
  menu?: MenuItem[];
  language?: {
    langList: OptionType[];
    value?: OptionType;
    handleChangeLang?: (item?: OptionType) => void;
  }
  handleSearch?: (val: string | undefined) => void;
}

const Header: React.FC<HeaderProps> = ({
  mainLogo,
  menu,
  language,
  handleSearch,
}) => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [idExpand, setIdExpand] = useState<Record<'parent' | 'child', number | undefined>>();

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
    <button type="button" className="t-header_btn-search" onClick={() => setIsOpenSearch(true)}>
      <Icon iconName={iconName} size="20" />
    </button>
  ), []);

  useWindowScroll(() => {
    if (window.pageYOffset > 70 && Number(refPageYOffset.current || 0) < window.pageYOffset) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    refPageYOffset.current = window.pageYOffset;
  });

  const onSearch = (val: string | undefined) => {
    setIsOpenSearch(false);
    if (handleSearch) {
      handleSearch(val);
    }
  };

  return (
    <header id="app-header" className="t-header">
      <div className={mapModifiers('t-header_main', isScroll && 'isScroll')}>
        <Container>
          <div className={mapModifiers('t-header_layer-search', isOpenSearch && 'open')}>
            <button className="button-close" type="button" onClick={() => setIsOpenSearch(false)}>
              <Icon iconName="closeWhite" size="36" />
            </button>
            <div className="t-header_layer-search_content">
              <Heading type="h2" modifiers={['700', 'uppercase', 'center', 'white']}>
                Tìm kiếm
              </Heading>
              <Search search={{ placeholder: 'Tìm kiếm nội dung', onSearch }} />
            </div>
          </div>
          <div className="t-header_wrap">
            <div
              className="t-header_hamburger"
              onClick={() => setIsOpen(true)}
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="t-header_left">
              <Link href={mainLogo?.url} target={mainLogo?.target}>
                <Image src={mainLogo?.icon} ratio="184x59" alt="logo" />
              </Link>
            </div>
            <div className={mapModifiers('t-header_right', isOpen && 'open')}>
              <div className="t-header_right_header-mobile">
                <div className="t-header_close-mobile">
                  <div
                    onClick={() => setIsOpen(false)}
                    className="hamburger active"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="t-header_search-mobile">
                  {renderButtonSearch('searchOrange')}
                </div>
              </div>
              <div className="t-header_nav">
                <Nav
                  menu={menu}
                  idExpand={[idExpand?.child, idExpand?.parent]}
                  pathname={pathname}
                  handleCloseMenu={handleCloseMenu}
                  handleClickExpand={handleClickExpand}
                />
              </div>
              <div className="t-header_utility">
                <div className="t-header_language-desktop">
                  <div className="pulldown-lang">
                    {renderLang}
                  </div>
                </div>
                <div className="t-header_search">
                  {renderButtonSearch('searchWhite')}
                </div>
              </div>
            </div>
            <div className="t-header_language-mobile">
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

export default React.memo(Header);
