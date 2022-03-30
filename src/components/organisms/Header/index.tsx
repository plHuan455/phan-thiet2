import React from 'react';

import logo from 'assets/images/logo.svg';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Nav from 'components/molecules/Nav';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => (
  <header className="o-header">
    <div className="o-header_wrap">
      <div className="o-header_left">
        <Link href="/">
          <Image src={logo} ratio="184x59" />
        </Link>
      </div>
      <div className="o-header_right">
        <div className="o-header_nav">
          <Nav />
        </div>
        <div className="o-header_utility">
          <div className="o-header_lang">
            Language
          </div>
          <div className="o-header_search">
            search
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.defaultProps = {
};

export default Header;
