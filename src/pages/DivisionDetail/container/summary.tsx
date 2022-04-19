import React, { useMemo } from 'react';

import DivisionSummary from 'components/templates/DivisionSummary';
import { SubDivisionDetailTypes } from 'services/subdivision/types';
import { baseURL } from 'utils/functions';

interface SummaryProps {
  data?: SubDivisionDetailTypes;
}

const Summary: React.FC<SummaryProps> = ({
  data,
}) => {
  const summaryData = useMemo(() => [
    data?.content?.items?.item1,
    data?.content?.items?.item2,
  ].map((item) => ({
    thumbnail: baseURL(item?.image),
    title: item?.title,
  })), [data]);

  return (
    <section className="u-pt-md-77 u-pt-48 u-pb-md-77 u-pb-48" style={{ color: 'var(--theme)' }}>
      <DivisionSummary
        title={data?.content.title}
        description={data?.content.description}
        data={summaryData}
      />
    </section>
  );
};

Summary.defaultProps = {
  data: undefined,
};

export default Summary;
