/* eslint-disable react/button-has-type */
import React from 'react';

import Icon from '../Icon';

import Link from 'components/atoms/Link';
import mapModifiers from 'utils/functions';

type Gradients =
  | 'primary-blue'
  | 'primary-green'
  | 'outline-transparent'
  | 'outline-green';

export type Variants = ColorStyle | Gradients;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  size?: 'md' | 'lg';
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
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} target={target} className={mapModifiers('a-button', variant, size)}>
        <span className="a-button_text">
          {children}
        </span>
      </Link>
    );
  }
  return (
    <button type={type || 'button'} className={mapModifiers('a-button', variant, size, loading && 'loading')} {...props}>
      <span className="a-button_text">
        {children}
      </span>
      {loading && (
        <span className="a-button_loading">
          <Icon iconName="loadingWhite" />
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

export default React.memo(Button);
