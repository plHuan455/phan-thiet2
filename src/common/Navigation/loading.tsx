import React from 'react';

import LogoNovaWorld from 'assets/images/logo.png';

const LoadingPage: React.FC = () => (
  <div className="c-loading">
    <div className="c-loading_thumbnail">
      <img src={LogoNovaWorld} alt="novaworld_phanthiet" />
    </div>
  </div>
);

export default LoadingPage;
