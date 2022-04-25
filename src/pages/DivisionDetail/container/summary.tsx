import React, { useMemo } from 'react';

import Animate from 'components/organisms/Animate';
import DivisionSummary from 'components/templates/DivisionSummary';
import { SubdivisionContentTypes } from 'services/subdivision/types';
import { baseURL } from 'utils/functions';

interface SummaryProps {
  data?: SubdivisionContentTypes;
}

const Summary: React.FC<SummaryProps> = ({
  data,
}) => {
  const summaryData = useMemo(() => [
    data?.items?.item1,
    data?.items?.item2,
  ].map((item) => ({
    thumbnail: baseURL(item?.image),
    title: item?.title,
  })), [data]);

  if (!data?.active) return null;

  return (
    <Animate type="fadeInUp">
      <section className="u-pt-md-77 u-pt-48 u-pb-md-77 u-pb-48" style={{ color: 'var(--theme)' }}>
        <DivisionSummary
          title={data?.title}
          description={data?.description}
          data={summaryData}
        />
      </section>
    </Animate>
  );
};

Summary.defaultProps = {
  data: undefined,
};

export default Summary;
