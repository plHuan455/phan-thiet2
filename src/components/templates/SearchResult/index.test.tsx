import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchResult, { SearchForm } from '.';

import { schemaSearchForm } from 'utils/schemas';

describe('<SearchResult />', () => {
  test('renders without crashing', () => {
    const method = useForm<SearchForm>({
      resolver: yupResolver(schemaSearchForm),
      mode: 'onChange',
    });
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <SearchResult
          titleMain="Tìm kiếm"
          method={method}
          submitFormSearch={() => {}}
          searchText=""
          dataTitleTab={[]}
          indexTabActive={0}
          handleChangeTab={() => {}}
        />
      </Router>, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
