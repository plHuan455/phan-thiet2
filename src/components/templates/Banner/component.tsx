import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface OptionSuggestTypes {
  id: string;
  keyword: string;
}
export interface SearchProps {
  isSuggest?: boolean;
  optionSuggests?: OptionSuggestTypes[];
  search?: {
    placeholder?: string;
    onSearch?: (val?: string) => void;
  };
}

const Search: React.FC<SearchProps> = ({
  search,
  isSuggest,
  optionSuggests = [],
}) => {
  const [val, setVal] = useState<string>('');
  const [options, setOptions] = useState<OptionSuggestTypes[]>([]);
  const [isFocus, setIsFocus] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVal(value);
    const cloneOptions = [...options];
    let newOptions;
    if (value) {
      newOptions = cloneOptions.filter(
        (item) => item.keyword
          .toLocaleLowerCase()
          .indexOf(value.toLocaleLowerCase()) !== -1,
      );
    } else {
      newOptions = optionSuggests;
    }
    setOptions(newOptions);
  };

  const onKeyDown = useCallback(
    ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter' && search?.onSearch) {
        search?.onSearch(val);
        setIsFocus(false);
        refInput.current?.blur();
      }
    },
    [search, val],
  );

  const handleSelected = (keyword: string) => () => {
    if (search?.onSearch) {
      search.onSearch(keyword);
      setVal(keyword);
    }
  };

  useEffect(() => {
    if (optionSuggests) {
      setOptions(optionSuggests);
    }
  }, [optionSuggests]);

  return (
    <div className="t-banner_search">
      <div className="t-banner_search-input">
        <input
          ref={refInput}
          type="text"
          value={val}
          placeholder={search?.placeholder}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <button
          type="button"
          onClick={() => search?.onSearch && search?.onSearch(val)}
        >
          <Icon iconName="searchWhite" size="14" />
        </button>
      </div>
      {isSuggest && (
        <div
          className={mapModifiers('t-banner_search-suggest', isFocus && 'open')}
        >
          <ul>
            {options?.map((item, index) => (
              <li
                onClick={handleSelected(item.keyword)}
                key={`t-banner_search-suggest-${index.toString()}`}
              >
                <Text
                  modifiers={['16x28', '400', 'raisinBlack']}
                  content={item.keyword}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
