import React from 'react';

const Section = React.forwardRef<
  HTMLDivElement,
  React.InputHTMLAttributes<HTMLDivElement>
>(({ className, children }, ref) => (
  <section
    className={`${className || ''} u-pt-40 u-pb-40 u-pt-md-80 u-pb-md-80 position-relative`}
    ref={ref}
  >
    {children}
  </section>
));

export default Section;
