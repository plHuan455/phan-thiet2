/* eslint-disable react/require-default-props */
import React, { useEffect, useRef, useState } from 'react';

import Icon from 'components/atoms/Icon';
import useClickOutside from 'hooks/useClickOutside';
import mapModifiers from 'utils/functions';

export interface OptionType {
  id?: string;
  label: string;
  value: string | number;
}

export interface PulldownProps {
  id?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  value?: OptionType;
  options: OptionType[];
  error?: string;
  disabled?: boolean;
  isClear?: boolean;
  empty?: string;
  variant?: 'normal' | 'highLight';
  size?: 'md' | 'lg';
  handleSelect?: (option?: OptionType) => void;
  handleClear?: () => void;
}

const renderLabel = (
  info: Pick<PulldownProps, 'label' | 'id' | 'required'>,
) => {
  const { label, id, required } = info;

  if (!label) return null;

  return (
    <label className="m-pulldown_label" htmlFor={id}>
      {label}
      {required && <span>*</span>}
    </label>
  );
};

const Pulldown: React.FC<PulldownProps> = ({
  id,
  label,
  required,
  placeholder,
  value,
  options,
  error,
  disabled,
  isClear,
  variant = 'normal',
  empty,
  handleSelect,
  handleClear,
}) => {
  const pulldownRef = useRef<HTMLDivElement>(null);
  const [optionData, setOptionData] = useState<OptionType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  useClickOutside(pulldownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  useEffect(() => {
    setOptionData(options);
  }, [options]);

  return (
    <div
      className={`${mapModifiers('m-pulldown', error && 'error', variant)}`}
      ref={pulldownRef}
    >
      {renderLabel({
        label,
        id,
        required,
      })}
      <div className="m-pulldown_header" onClick={toggling}>
        <div
          className={`m-pulldown_header_content${
            value ? '' : ' m-pulldown_placeholder'
          }`}
        >
          <span>{value ? value.label : placeholder}</span>
        </div>
        <div className="m-pulldown_fn">
          {isClear && value && (
          <div className="m-pulldown_clear" onClick={handleClear}>
            <Icon
              iconName={variant === 'highLight' ? 'closeOrange' : 'closeBlack'}
              size="16"
            />
          </div>
          )}
          <span className={isOpen ? 'm-pulldown_arrow opened' : 'm-pulldown_arrow'} />
        </div>
      </div>
      {isOpen && (
        <div className="m-pulldown_wrapper">
          <ul className="m-pulldown_list">
            {optionData.length ? (
              optionData.map((option, index) => (
                <li
                  key={`option-${index.toString()}`}
                  className={mapModifiers(
                    'm-pulldown_item',
                    value?.label === option.label && 'active',
                  )}
                  onClick={() => {
                    if (handleSelect) {
                      handleSelect(option);
                      setIsOpen(false);
                    }
                  }}
                >
                  <span>{option.label}</span>
                </li>
              ))
            ) : (
              // TODO: Add translation later
              <li className="m-pulldown_item none">{empty}</li>
            )}
          </ul>
        </div>
      )}
      {error && <span className="m-pulldown_error">{error}</span>}
    </div>
  );
};

Pulldown.defaultProps = {
};

export default React.memo(Pulldown);
