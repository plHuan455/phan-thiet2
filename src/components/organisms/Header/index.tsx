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
import { Search } from 'components/templates/Banner';
import useDetectHeader from 'hooks/useDetectHeader';
import useWindowScroll from 'hooks/useWindowScroll';
import { MenuItem } from 'services/menus/types';
import mapModifiers from 'utils/functions';

export interface HeaderProps {
  logoUrl?: LinkTypes;
  logo?: string;
  menu?: MenuItem[];
  language?: {
    langList: OptionType[];
    value: OptionType;
    handleChangeLang?: (item?: OptionType) => void;
  }
}

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  logo,
  menu,
  language,
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
    <button type="button" className="o-header_btn-search" onClick={() => setIsOpenSearch(true)}>
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

  return (
    <header className="o-header">
      <div className={mapModifiers('o-header_main', isScroll && 'isScroll')}>
        <Container>
          <div className={mapModifiers('o-header_layer-search', isOpenSearch && 'open')}>
            <button className="button-close" type="button" onClick={() => setIsOpenSearch(false)}>
              <Icon iconName="closeWhite" size="36" />
            </button>
            <div className="o-header_layer-search_content">
              <Heading type="h2" modifiers={['700', 'uppercase', 'center', 'white']}>
                Tìm kiếm
              </Heading>
              <Search search={{ placeholder: 'Tìm kiếm nội dung' }} />
            </div>
          </div>
          <div className="o-header_wrap">
            <div
              className="o-header_hamburger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className={`hamburger ${isOpen ? 'active' : ''}`}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="o-header_left">
              <Link href={logoUrl?.url} target={logoUrl?.target}>
                <Image src={logo} ratio="184x59" />
              </Link>
            </div>
            <div className={mapModifiers('o-header_right', isOpen && 'open')}>
              <div className="o-header_search-mobile">
                {renderButtonSearch('searchOrange')}
              </div>
              <div className="o-header_nav">
                <Nav
                  menu={menu}
                  idExpand={[idExpand?.child, idExpand?.parent]}
                  pathname={pathname}
                  handleCloseMenu={handleCloseMenu}
                  handleClickExpand={handleClickExpand}
                />
              </div>
              <div className="o-header_utility">
                <div className="o-header_language-desktop">
                  <div className="pulldown-lang">
                    {renderLang}
                  </div>
                </div>
                <div className="o-header_search">
                  {renderButtonSearch('searchWhite')}
                </div>
              </div>
            </div>
            <div className="o-header_language-mobile">
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

export default Header;
