import React from 'react';
import { CustomArrowProps } from 'react-slick';

const Prev: React.FC <CustomArrowProps> = ({ className, onClick }) => (
  <div className={`a-arrow a-arrow_prev ${className}`} onClick={onClick}>
    <div className="a-arrow_wrapper">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.04 8.60336L4.18645 7.7498H5.39355L12.3748 7.7498C12.4424 7.7498 12.4998 7.69241 12.4998 7.6248C12.4998 7.5572 12.4424 7.4998 12.3748 7.4998L5.39355 7.4998H4.18645L5.04 6.64625L8.09 3.59625C8.13849 3.54776 8.13849 3.4706 8.09 3.42211C8.04151 3.37362 7.96435 3.37362 7.91586 3.42211L3.79711 7.54086C3.74862 7.58935 3.74862 7.66651 3.79711 7.715L3.45077 8.06134L3.79711 7.715L7.91586 11.8338L7.56952 12.1801L7.91586 11.8338C7.96435 11.8822 8.04151 11.8822 8.09 11.8338C8.13849 11.7853 8.13849 11.7018 8.09 11.6534L5.04 8.60336Z" />
      </svg>
    </div>
  </div>
);

const Next: React.FC<CustomArrowProps> = ({ className, onClick }) => (
  <div className={`a-arrow a-arrow_next ${className}`} onClick={onClick}>
    <div className="a-arrow_wrapper">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.9598 8.60336L11.8133 7.7498H10.6062L3.62495 7.7498C3.55734 7.7498 3.49995 7.69241 3.49995 7.6248C3.49995 7.5572 3.55734 7.4998 3.62495 7.4998L10.6062 7.4998H11.8133L10.9598 6.64625L7.90975 3.59625C7.86127 3.54776 7.86127 3.4706 7.90975 3.42211C7.95824 3.37362 8.03541 3.37362 8.0839 3.42211L12.2026 7.54086C12.2511 7.58935 12.2511 7.66651 12.2026 7.715L12.549 8.06134L12.2026 7.715L8.0839 11.8338L8.43024 12.1801L8.0839 11.8338C8.03541 11.8822 7.95824 11.8822 7.90975 11.8338C7.86127 11.7853 7.86127 11.7018 7.90975 11.6534L10.9598 8.60336Z" />
      </svg>
    </div>
  </div>
);

const Arrow = {
  Prev,
  Next,
};

export default Arrow;
