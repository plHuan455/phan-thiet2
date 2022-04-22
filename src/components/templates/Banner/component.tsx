import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import useScrollInfinite from 'hooks/useScrollInfinite';
import mapModifiers, { removeAccents } from 'utils/functions';

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
  onLoadMore?: () => void;
}

const Search: React.FC<SearchProps> = ({
  search,
  isSuggest,
  optionSuggests = [],
  onLoadMore,
}) => {
  const [val, setVal] = useState<string>('');
  const [options, setOptions] = useState<OptionSuggestTypes[]>(optionSuggests);
  const [isFocus, setIsFocus] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setVal(value);
    const cloneOptions = [...options];
    let newOptions;
    if (value) {
      newOptions = cloneOptions.filter(
        (item) => removeAccents(item.keyword)
          .toLocaleLowerCase()
          .includes(removeAccents(value.toLocaleLowerCase())),
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
    if (optionSuggests.length) {
      setOptions(optionSuggests);
    }
  }, [optionSuggests]);

  const { setNode } = useScrollInfinite(onLoadMore);

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
                ref={index + 1 === options.length ? (node) => setNode(node) : undefined}
                onClick={handleSelected(item.keyword)}
                key={`t-banner_search-suggest-${index.toString()}`}
              >
                <Text
                  modifiers={['14x20', '400', 'raisinBlack']}
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

export default React.memo(Search);
