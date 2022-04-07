import React from 'react';

export interface SectionProps extends React.InputHTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}
const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children }, ref) => (
    <div
      className={`${className || ''} u-pt-40 u-pb-40 u-pt-md-80 u-pb-md-80`}
      ref={ref}
    >
      {children}
    </div>
  ),
);

export default Section;
