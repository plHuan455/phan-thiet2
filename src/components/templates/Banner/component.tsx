import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface OptionSuggestTypes {
  id: string;
  keyword: string;
}
export interface SearchProps {
  list?: OptionSuggestTypes[];
  loading?: boolean;
  value?: string;
  placeholder?: string;
  onSearch?: (val?: string) => void;
  onChange?: (val?: string) => void;
  onFocus?: () => void;
}

const Search: React.FC<SearchProps> = ({
  list = [],
  loading,
  value,
  placeholder,
  onSearch,
  onChange,
  onFocus,
}) => {
  const { t } = useTranslation();
  const [val, setVal] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const onKeyDown = useCallback(
    ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter' && onSearch) {
        onSearch(val);
        setIsFocus(false);
        refInput.current?.blur();
      }
    },
    [onSearch, val],
  );

  const handleSelected = (keyword: string) => () => {
    if (onSearch) {
      onSearch(keyword);
      setVal(keyword);
    }
  };

  useEffect(() => {
    if (value) {
      setVal(value);
    }
  }, [value]);

  return (
    <div className="t-banner_search">
      <div className="t-banner_search-input">
        <input
          ref={refInput}
          type="text"
          value={val}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          onFocus={() => {
            setIsFocus(true);
            if (onFocus) onFocus();
          }}
          onBlur={() => setIsFocus(false)}
        />
        <button
          type="button"
          onClick={() => onSearch && onSearch(val)}
        >
          <Icon iconName="searchWhite" size="14" />
        </button>
      </div>
      <div
        className={mapModifiers('t-banner_search-suggest', isFocus && 'open')}
      >
        <ul>
          {loading && (
            <li className="empty d-flex justify-content-center">
              <Icon iconName="loadingBlue" />
            </li>
          )}
          {list?.length > 0 && !loading && (
          <>
            {list?.map((item, index) => (
              <li
                onClick={handleSelected(item.keyword)}
                key={`t-banner_search-suggest-${index.toString()}`}
              >
                <Text
                  modifiers={['14x20', '400', 'raisinBlack']}
                  content={item.keyword}
                />
              </li>
            ))}
          </>
          )}
          {!list?.length && !loading && (
            <li className="empty">
              <Text
                modifiers={['14x20', '400', 'raisinBlack']}
                content={t('general.not_found_data')}
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Search);
