import React, { useRef, useLayoutEffect } from 'react';

import mapModifiers, { handleScrollCenter } from 'utils/functions';

interface TabsProps {
  variableMutate?: number | string;
  classTabsActive?: string;
}

interface TabProps {
  active?: boolean;
  label?: string;
  handleClick?: () => void;
}

interface TabPanelProps {
  active?: boolean;
}

export const TabPanel: React.FC<TabPanelProps> = ({ active, children }) => (
  <div className={mapModifiers('o-tabs_panel', active && 'active')}>{children}</div>
);

export const Tab: React.FC<TabProps> = ({
  active, label, handleClick,
}) => (
  <div onClick={handleClick} className={mapModifiers('o-tabs_tab', active && 'active')}>
    <span className="o-tabs_label">{label}</span>
  </div>
);

const Tabs: React.FC<TabsProps> = ({
  children, variableMutate, classTabsActive,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    handleScrollCenter(ref, classTabsActive || '.o-tabs_tab-active');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableMutate]);

  return (
    <div className="o-tabs">
      <div ref={ref} className="o-tabs_labels">
        {children}
      </div>
    </div>
  );
};

TabPanel.defaultProps = {
  active: false,
};

Tab.defaultProps = {
  label: '',
  active: false,
  handleClick: undefined,
};

Tabs.defaultProps = {
  variableMutate: undefined,
  classTabsActive: undefined,
};

export default Tabs;
