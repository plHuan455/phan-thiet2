import React from 'react';
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  href?: string;
  search?: string;
  useExternal?: boolean;
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  search,
  useExternal,
  ...props
}) => {
  if (!href) {
    return (
      <span
        {...props}
        className={props.className}
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
        className={props.className}
      >
        {children}
      </a>
    );
  }

  if (useExternal) {
    return (
      <a
        {...props}
        href={href}
        rel="noreferrer"
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
      className={props.className}
    >
      {children}
    </RouterLink>
  );
};

Link.defaultProps = {
  search: undefined,
  href: undefined,
  useExternal: undefined,
};

export default React.memo(Link);
