import React from 'react';

import Icon from 'components/atoms/Icon';

export interface LoadMoreProps {
  loading?: boolean;
  children?: React.ReactNode;
}

const LoadMore = React.forwardRef<HTMLDivElement, LoadMoreProps>(({
  loading,
  children,
}, ref) => (
  <div className="o-wrapLoadMore" ref={ref}>
    {children}
    {loading && (
    <div className="o-wrapLoadMore_loading">
      <Icon iconName="loadingWhite" size="20" />
    </div>
    )}
  </div>
));

export default LoadMore;
