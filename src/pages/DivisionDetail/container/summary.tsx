import React, { useMemo } from 'react';

import DivisionSummary from 'components/templates/DivisionSummary';
import { SubdivisionContentTypes } from 'services/subdivision/types';
import { baseURL } from 'utils/functions';

interface SummaryProps {
  data?: SubdivisionContentTypes;
}

const Summary = React.forwardRef<HTMLDivElement, SummaryProps>(({
  data,
}, ref) => {
  const summaryData = useMemo(() => [
    data?.items?.item1,
    data?.items?.item2,
  ].map((item) => ({
    thumbnail: baseURL(item?.image),
    title: item?.title,
  })), [data]);

  if (!data?.active) return null;

  return (
    <section ref={ref} className="u-pt-lg-40 u-pt-md-30 u-pt-20 u-pb-lg-40 u-pb-md-30 u-pb-20 position-relative" style={{ color: 'var(--theme)' }}>
      <DivisionSummary
        title={data?.title}
        description={data?.description}
        data={summaryData}
      />
    </section>
  );
});

Summary.defaultProps = {
  data: undefined,
};

export default Summary;
