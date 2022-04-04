import React, { ChangeEvent, KeyboardEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller, FormProvider, UseFormReturn } from 'react-hook-form';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
// import Input from 'components/atoms/Input';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import Tabs, { Tab } from 'components/organisms/Tabs';

export interface SearchForm {
  search: string;
}

export interface SearchResultProps {
  titleMain: string;
  method: UseFormReturn<SearchForm>;
  submitFormSearch: (data: SearchForm) => void;
  searchText: string;
  indexTabActive: number;
  handleChangeTab: (idx: number) => void;
  dataSearchResult?: CardNormalProps[];
  totalPage?: number;
  page?: number;
  isLoading?: boolean;
  handleShowMore?: () => void;
  optionSort?: OptionType[];
  handleSort?: (option?: OptionType) => void;
  isLoadingShowMore?: boolean;
  placeholderSearch?: string;
  handleChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressEnterSearch?: (e: KeyboardEvent<HTMLInputElement>) => void;
  dataTitleTab: {
    id: number;
    label: string;
  }[],
  valueSelected?: OptionType,
}

const SearchResult: React.FC<SearchResultProps> = ({
  titleMain,
  method,
  submitFormSearch,
  searchText,
  indexTabActive,
  handleChangeTab,
  dataSearchResult,
  totalPage,
  page = 0,
  isLoading,
  handleShowMore,
  optionSort,
  handleSort,
  isLoadingShowMore,
  placeholderSearch,
  dataTitleTab,
  valueSelected,
}) => (
  <div className="t-searchResult">
    <div className="t-searchResult_bgLeft">
      <Image src={bgLeft} ratio="1x1" size="contain" />
    </div>
    <div className="t-searchResult_bgRight">
      <Image src={bgRight} ratio="1x1" />
    </div>
    <Container>
      <div className="t-searchResult_heading">
        <Heading type="h4" modifiers={['s015', '700', 'center', 'arsenic', 'fontOswald']}>
          {titleMain}
        </Heading>
      </div>
      <div className="t-searchResult_searchInput">
        <FormProvider {...method}>
          <form onSubmit={method.handleSubmit(submitFormSearch)} noValidate>
            <Controller
              name="search"
              render={({ field, fieldState: { error } }) => (
                <>
                  <div className="t-searchResult_searchInput_wrapper">
                    <div className="t-searchResult_searchInput_wrapper_general">
                      <input
                        {...field}
                        type="text"
                        placeholder={placeholderSearch}
                        onChange={field.onChange}
                        autoComplete="off"
                      />
                      {field.value && (
                        <div onClick={() => method.setValue('search', '')}>
                          <Icon iconName="closeBlack" size="16" />
                        </div>
                      )}
                    </div>
                    <button className="t-searchResult_searchInput_btn" type="submit">
                      <Icon iconName="searchGray" size="14" />
                    </button>
                  </div>
                  <span className="t-searchResult_searchInput_error">{error}</span>
                </>
              )}
            />
          </form>
        </FormProvider>
      </div>
      {searchText && (
        <div className="t-searchResult_amount">
          <Text
            modifiers={['14x20', '400', 'fontSvnGotham', 'black']}
            content={`${dataSearchResult?.length} ` || ''}
          />
          <Text
            modifiers={['14x20', '400', 'fontSvnGotham', 'black']}
            content="kết quả tìm thấy cho"
          />
          <Text type="span" modifiers={['black', '700', '14x20', 'fontSvnGotham']}>
            {' '}
            {searchText}
          </Text>
        </div>
      )}
      <div className="t-searchResult_wrapTabs">
        <div className="t-searchResult_tab">
          <Tabs variableMutate={indexTabActive}>
            {dataTitleTab.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexTabActive}
                handleClick={() => handleChangeTab(index)}
              />
            ))}
          </Tabs>
        </div>
        <div className="t-searchResult_filter">
          {optionSort && (
            <PullDown
              options={optionSort}
              placeholder="Kết quả mới nhất"
              handleSelect={handleSort}
              value={valueSelected}
            />
          )}
        </div>
      </div>
      <div className="t-searchResult_list">
        {dataSearchResult && dataSearchResult.length > 0 && (
          <Row className="u-ml-negative-md-16 u-mr-negative-md-16 u-ml-negative-10 u-mr-negative-10">
            {dataSearchResult.map((item, index) => (
              <Col
                key={`searchResultItem-${index.toString()}`}
                className="u-mt-md-32 u-mt-20 u-pl-md-16 u-pr-md-16 u-pl-10 u-pr-10"
                xs={12}
                md={6}
                lg={4}
              >
                <Card.Normal {...item} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      <div className="t-searchResult_showMore">
        {!isLoading && totalPage && totalPage > 1 && (
          <div className="t-recruitmentList_more">
            <Button
              variant="primary-green"
              size="lg"
              onClick={handleShowMore}
              loading={isLoadingShowMore}
            >
              {totalPage > page ? 'Xem thêm' : 'Thu gọn'}
            </Button>
          </div>
        )}
      </div>
    </Container>
  </div>
);

export default SearchResult;
