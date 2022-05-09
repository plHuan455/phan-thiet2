import React from 'react';

const Section = React.forwardRef<
  HTMLDivElement,
  React.InputHTMLAttributes<HTMLDivElement>
>(({ className, children }, ref) => (
  <section
    className={`${className || ''} u-pt-20 u-pb-20 u-pt-md-30 u-pb-md-30 u-pt-lg-40 u-pb-lg-40 position-relative`}
    ref={ref}
  >
    {children}
  </section>
));

export default Section;
