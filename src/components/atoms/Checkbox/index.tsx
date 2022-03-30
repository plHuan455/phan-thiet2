/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef } from 'react';

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, ...props }, ref) => (
    <div className="a-checkbox">
      <label className="a-checkbox_label">
        <input ref={ref} type="checkbox" {...props} />
        <span className="a-checkbox_checkMark" />
        <span className="a-checkbox_text">{label}</span>
      </label>
    </div>
  ),
);

export default React.memo(Checkbox);
