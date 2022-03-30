import React from 'react';

import mapModifiers from 'utils/functions';

type Variant = 'default';
type Size = 'lg' | 'md';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  variant?: Variant;
  sizeModify?: Size;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((
  {
    error,
    variant = 'default',
    sizeModify = 'lg',
    ...props
  },
  ref,
) => (
  <div className={mapModifiers('a-input', variant, sizeModify, error && 'error')}>
    <input
      {...props}
      className="a-input_input"
      ref={ref}
    />
    {error && (
      <span className="a-input_error">{error}</span>
    )}
  </div>
));

export default React.memo(Input);
