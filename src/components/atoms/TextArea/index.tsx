import React from 'react';

import mapModifiers from 'utils/functions';

type Variant = 'default';
type Size = 'lg' | 'md';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  error?: string;
  variant?: Variant;
  sizeModify?: Size;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((
  {
    error,
    variant = 'default',
    sizeModify = 'lg',
    ...props
  },
  ref,
) => (
  <div className={mapModifiers('a-textarea', variant, sizeModify, error && 'error')}>
    <textarea
      {...props}
      className="a-textarea_input"
      ref={ref}
    />
    {error && (
      <span className="a-textarea_error">{error}</span>
    )}
  </div>
));

export default React.memo(TextArea);
