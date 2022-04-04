import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchResult, { SearchForm } from '.';

import { OptionType } from 'components/molecules/PullDown';
import { schemaSearchForm } from 'utils/schemas';

export default {
  title: 'Components/templates/SearchResult',
  component: SearchResult,
  argTypes: {},
} as Meta;

const dataTabList = [
  {
    id: 1,
    label: 'Tin tức',
  },
  {
    id: 2,
    label: 'Phân Khu',
  },
];

const OptionSort: OptionType[] = [
  {
    id: '1',
    value: '1',
    label: 'Mới nhất',
  },
  {
    id: '2',
    value: '2',
    label: 'Cũ nhất',
  },
];

export const Normal: Story = () => {
  const [activeIndex, setIndexActive] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [valueSelected, setValueSelected] = useState<OptionType>();

  const method = useForm<SearchForm>({
    resolver: yupResolver(schemaSearchForm),
    mode: 'onChange',
  });

  const handleSubmit = (data: SearchForm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Router>
      <SearchResult
        titleMain="Tìm kiếm"
        method={method}
        submitFormSearch={handleSubmit}
        searchText={searchText}
        dataTitleTab={dataTabList}
        indexTabActive={activeIndex}
        handleChangeTab={(idx) => setIndexActive(idx)}
        handleChangeSearch={(e) => setSearchText(e.target.value)}
        page={1}
        totalPage={10}
        optionSort={OptionSort}
        placeholderSearch="Nova world Phan Thiết"
        dataSearchResult={new Array(9).fill({
          thumbnail: 'https://source.unsplash.com/random',
          title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
          href: '/',
          tag: 'The Kingdom',
          dateTime: '2 giờ trước',
          url: {
            text: 'Xem thêm',
            iconName: 'arrowRightCopper',
            animation: 'arrow',
          },
        })}
        valueSelected={valueSelected}
        handleSort={(data) => setValueSelected(data)}
      />
    </Router>
  );
};
