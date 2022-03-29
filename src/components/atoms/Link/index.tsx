import React from 'react';
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href?: string;
  search?: string;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  search,
  ...props
}) => {
  if (!href) {
    return (
      <span
        {...props}
      >
        {children}
      </span>
    );
  }

  if (href.includes('http')) {
    return (
      <a
        {...props}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      {...props}
      to={{
        pathname: href,
        search,
      }}
      aria-label="label"
    >
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  search: undefined,
  href: undefined,
};

export default Link;
