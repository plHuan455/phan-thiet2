import React from 'react';

import Container from 'common/Container';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

interface ListTypes {
  list: LinkTypes[];
  title?: string
}

interface FooterProps {
  logo: string,
  copyRight: ListTypes,
  addressList: {
    title: string,
    subTitle?: string,
    address?: string,
    contact?: {
      label?: string,
      value?: string,
    }
  }[],
  menuList: ListTypes,
  divisionList: {
    title?: string,
    list: LinkTypes[]
  },
  serviceList: ListTypes,
  socialList: ListTypes
}

interface MenuFooterProps {
  data: ListTypes
}

export const MenuFooter: React.FC<MenuFooterProps> = ({ data }) => (
  <div className="t-footer_menu">
    <Text modifiers={['700', '12x20', 'davyGrey']} content={data?.title} />
    <div className="t-footer_menu-list">
      {
      data?.list?.map((item, index) => (
        <div key={`t-footer_menu-${index.toString()}`} className="t-footer_menu-item">
          <Link href={item.url} target={item.target}>
            <div className="t-footer_menu-item-content">
              <div className="t-footer_menu-icon">
                <Icon iconName="chevronRight" size="24" />
              </div>
              <Text modifiers={['12x20', '400', 'davyGrey']} content={item.text} />
            </div>
          </Link>
        </div>
      ))
    }
    </div>
  </div>
);

const Footer: React.FC<FooterProps> = ({
  copyRight,
  logo,
  addressList,
  menuList,
  divisionList,
  serviceList,
  socialList,
}) => (
  <div className="t-footer">
    <div className="t-footer_content">
      <Container>
        <div className="t-footer_logo">
          <Image src={logo} alt="footer" ratio="logo-footer" size="cover" />
        </div>
        <div className="t-footer_content-wrap">
          <div className="t-footer_address">
            {
                addressList?.map((item, index) => (
                  <div key={`t-footer_address-${index.toString()}`} className="t-footer_address-item">
                    <div className="t-footer_address-title">
                      <Text modifiers={['12x20', '700', 'davyGrey']} content={item.title} />
                    </div>
                    {
                      item.subTitle && (
                        <div className="t-footer_address-subTitle">
                          <Text modifiers={['12x20', '400', 'davyGrey']} content={item.subTitle} />
                        </div>
                      )
                    }
                    <div className="t-footer_address-desc">
                      <Text modifiers={['12x20', '400', 'davyGrey']} content={item.address} />
                    </div>
                    <div className="t-footer_address-contact">
                      <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.label} />
                      <Text type="span" modifiers={['12x20', '400', 'davyGrey']} content={item.contact?.value} />
                    </div>
                  </div>
                ))
              }
          </div>
          <div className="t-footer_menuList">
            <MenuFooter data={menuList} />
          </div>
          <div className="t-footer_divisionList">
            <MenuFooter data={divisionList} />
          </div>
          <div className="t-footer_serviceList">
            <MenuFooter data={serviceList} />
          </div>
          <div className="t-footer_social">
            <Text modifiers={['700', '12x20', 'davyGrey']} content={socialList.title} />
            <div className="t-footer_social-list">
              {
                    socialList.list.map((item, index) => (
                      <div className="t-footer_social-item">
                        <Link key={`t-footer_social-${index.toString()}`} href={item.url} target={item.target}>
                          <Image src={item.icon} ratio="1x1" alt={item.text} />
                        </Link>
                      </div>
                    ))
                  }
            </div>
          </div>
        </div>
      </Container>
    </div>
    <div className="t-footer_copyRight">
      <Container>
        <div className="t-footer_copyRight-wrap">
          <div className="t-footer_copyRight-list">
            {
            copyRight?.list.map((item, index) => (
              <React.Fragment key={`t-footer_copyRight-${index.toString()}`}>
                {index !== 0 ? <div className="t-footer_copyRight-divider">|</div> : ''}
                <div className="t-footer_copyRight-item">
                  <Link href={item.url} target={item.target}>
                    <Text content={item.text} />
                  </Link>
                </div>
              </React.Fragment>
            ))
          }
          </div>
          <Text modifiers={['12x20', 'davyGrey', '400']} content={copyRight.title} />
        </div>
      </Container>
    </div>
  </div>
);

Footer.defaultProps = {
};

export default Footer;
