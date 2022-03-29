/* eslint-disable react/button-has-type */
import React from 'react';

import Link from 'components/atoms/Link';
import mapModifiers from 'utils/functions';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-blue' | 'primary-green' | 'outline-green';
  size?: 'lg';
  href?: string;
  target?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  href,
  target,
  type,
  children,
  loading,
}) => {
  if (href) {
    <Link href={href} target={target} className={mapModifiers('a-button', variant, size)}>
      <span className="a-button_text">
        {children}
      </span>
    </Link>;
  }
  return (
    <button type={type || 'button'} className={mapModifiers('a-button', variant, size, loading && 'loading')}>
      <span className="a-button_text">
        {children}
      </span>
      {loading && (
      <span className="a-button_loading">
        loading
      </span>
      )}
    </button>
  );
};

Button.defaultProps = {
  variant: 'primary-blue',
  size: 'lg',
  href: undefined,
  target: undefined,
  loading: undefined,
};

export default Button;
