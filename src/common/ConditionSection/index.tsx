import React from 'react';

import { getBlockActive } from 'utils/functions';

interface ConditionSectionProps {
  code: string;
  blocks: BlockDataTypes<any>[];
}

const ConditionSection:React.FC<ConditionSectionProps> = ({
  code,
  children,
  blocks,
}) => {
  if (getBlockActive(code, blocks)) {
    return (
      <>
        {children}
      </>
    );
  }
  return null;
};

export default ConditionSection;
