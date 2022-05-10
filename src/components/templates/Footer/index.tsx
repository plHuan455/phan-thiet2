import React from 'react';

import Container from 'common/Container';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { MenuItem } from 'services/menus/types';

interface ListTypes {
  list: LinkTypes[];
  title?: string
}
interface MenuItemFooter {
  title?: MenuItem;
  list?: MenuItem[];
}
export interface FooterProps {
  logo?: string,
  subMenu?: MenuItem[],
  copyRightTitle?: string,
  addressList?: {
    title?: string,
    subTitle?: string,
    address?: string,
    contact?: {
      label?: string,
      value?: string,
    }
  }[],
  menuList?: MenuItemFooter,
  socialList?: ListTypes
}

export interface MenuFooterProps {
  data?: MenuItemFooter;
}

export const MenuFooter: React.FC<MenuFooterProps> = ({ data }) => (
  <div className={`t-footer_menu ${data?.title?.cssClass === 'service' ? 'empty' : ''}`}>
    <Text modifiers={['700', '12x20', 'davyGrey']} content={data?.title?.cssClass === 'service' ? '&nbsp;' : data?.title?.title} />
    <div className="t-footer_menu-list">
      {data?.list?.map((item, index) => (
        <div key={`t-footer_menu-${index.toString()}`} className="t-footer_menu-item">
          <Link href={item.reference?.slug || item?.link} target={item.target} className="a-link">
            <div className="t-footer_menu-item-content">
              <div className="t-footer_menu-icon">
                <Icon iconName="chevronRight" size="24" />
              </div>
              <Text modifiers={['12x20', '400', 'davyGrey']} content={item?.title} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const Footer: React.FC<FooterProps> = ({
  subMenu,
  copyRightTitle,
  logo,
  addressList,
  menuList,
  socialList,
}) => (
  <div className="t-footer">
    <div className="t-footer_content">
      <Container>
        <div className="t-footer_header">
          <div className="t-footer_logo">
            <Image src={logo} alt="footer" ratio="logo-footer" size="cover" />
          </div>
          <div className="t-footer_social">
            <Text modifiers={['700', '12x20', 'davyGrey']} content={socialList?.title} />
            <div className="t-footer_social-list">
              {socialList?.list.map((item, index) => (
                <div className="t-footer_social-item" key={`social-${index.toString()}`}>
                  <Link key={`t-footer_social-${index.toString()}`} href={item.url} target={item.target} className="a-link">
                    <Image src={item.icon} ratio="1x1" alt={item.text} size="contain" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="t-footer_body">
          <div className="t-footer_address">
            {addressList?.slice(0, 1).map((item, index) => (
              <div key={`t-footer_address-${index.toString()}`} className="t-footer_address-item">
                {item.title && (
                <div className="t-footer_address-title">
                  <Text modifiers={['12x20', '700', 'davyGrey']} content={item.title} />
                </div>
                )}
                {item.subTitle && (
                <div className="t-footer_address-subTitle">
                  <Text modifiers={['12x20', '400', 'davyGrey']} content={item.subTitle} />
                </div>
                )}
                <div className="t-footer_address-desc">
                  <Text modifiers={['12x20', '400', 'davyGrey']} content={item.address} />
                </div>
                <div className="t-footer_address-contact">
                  <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.label} />
                  <Link useExternal href={`tel:${item.contact?.value}`}>
                    <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.value} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="t-footer_exchanges">
            {addressList && addressList.length > 1 && addressList.slice(1).map((item, index) => (
              <div key={`t-footer_address-${index.toString()}`} className="t-footer_address-item">
                <div className="t-footer_address-title">
                  <Text modifiers={['12x20', '700', 'davyGrey']} content={item.title} />
                </div>
                <div className="t-footer_address-desc">
                  <Text modifiers={['12x20', '400', 'davyGrey']} content={item.address} />
                </div>
                <div className="t-footer_address-contact">
                  <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.label} />
                  <Link useExternal href={`tel:${item.contact?.value}`}>
                    <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.value} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="t-footer_menuList">
            <MenuFooter data={menuList} />
          </div>
        </div>
      </Container>
    </div>
    <div className="t-footer_copyRight">
      <Container>
        <div className="t-footer_copyRight-wrap">
          <div className="t-footer_copyRight-list">
            {
            subMenu?.map((item, index) => (
              <React.Fragment key={`t-footer_copyRight-${index.toString()}`}>
                {index !== 0 ? <div className="t-footer_copyRight-divider">|</div> : ''}
                <div className="t-footer_copyRight-item">
                  <Link href={item.reference?.slug || item.link} target={item.target} className="a-link">
                    <Text content={item.title} />
                  </Link>
                </div>
              </React.Fragment>
            ))
          }
          </div>
          <Text modifiers={['12x20', 'davyGrey', '400']} content={copyRightTitle} />
        </div>
      </Container>
    </div>
  </div>
);

Footer.defaultProps = {
};

export default React.memo(Footer);
