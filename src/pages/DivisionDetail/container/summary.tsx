import React from 'react';

import DivisionSummary, { DivisionSummaryProps } from 'components/templates/DivisionSummary';

// const dataDummy = [
//   {
//     thumbnail: 'https://source.unsplash.com/random',
//     title: 'OCEAN GOLF',
//   },
//   {
//     thumbnail: 'https://source.unsplash.com/random',
//     title: 'OCEAN GOLF',
//   },
// ];

interface SummaryProps extends DivisionSummaryProps {}

const Summary: React.FC<SummaryProps> = (props) => (
  <section className="u-pt-md-77 u-pt-48 u-pb-md-77 u-pb-48" style={{ color: 'var(--theme)' }}>
    <DivisionSummary
      {...props}
    />
  </section>
);

export default Summary;
