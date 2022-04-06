import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Card from 'components/organisms/Card';
import { CardDivisionProps } from 'components/organisms/Card/Division';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import Tabs, { Tab } from 'components/organisms/Tabs';

export interface SearchResultWrapProps {
  titleMain?: string;
}
export interface SearchTopProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleSubmit?: () => void;
  searchText?: string;
  length?: number;
}

const SearchTop = React.forwardRef<
  HTMLInputElement,
  SearchTopProps
>(({
  handleSubmit,
  searchText,
  length,
  ...rest
}, ref) => (
  <>
    <div className="t-searchResult_searchInput">
      <div className="t-searchResult_searchInput_wrapper">
        <input
          {...rest}
          ref={ref}
          type="text"
          autoComplete="off"
        />
        <button className="t-searchResult_searchInput_btn" type="button" onClick={handleSubmit}>
          <Icon iconName="searchGray" size="14" />
        </button>
      </div>
    </div>
    {searchText && (
    <div className="t-searchResult_textResult u-mt-16">
      {/* TODO: Translation later */}
      <Text
        modifiers={['14x20', '400', 'fontSvnGotham', 'black', 'center']}
      >
        {length}
        {' '}
        kết quả tìm thấy cho
        {' '}
        <strong>{`"${searchText}"`}</strong>
      </Text>
    </div>
    )}
  </>
));

export interface SearchFilterProps {
  tabs?: {
    label?: string;
    slug?: string;
  }[];
  slugActive?: string;
  optionSort?: OptionType[];
  valueSort?: OptionType;
  handleSelectTab?: (slug?:string) => void;
  handleSort?: (item?: OptionType) => void;
}

const SearchFilter:React.FC<SearchFilterProps> = ({
  tabs,
  slugActive,
  optionSort,
  handleSelectTab,
  valueSort,
  handleSort,
}) => (
  <div className="t-searchResult_wrapTabs u-mt-24 u-mt-md-40">
    <div className="t-searchResult_tab">
      <Tabs variableMutate={slugActive}>
        {tabs?.map((item, index) => (
          <Tab
            key={`tab-${index.toString()}`}
            label={item.label}
            active={item.slug === slugActive}
            handleClick={() => handleSelectTab && handleSelectTab(item.slug)}
          />
        ))}
      </Tabs>
    </div>
    <div className="t-searchResult_filter">
      {/* TODO: Translation later */}
      <PullDown
        options={optionSort || []}
        placeholder="Kết quả mới nhất"
        handleSelect={handleSort}
        value={valueSort}
      />
    </div>
  </div>
);

export interface SearchContentProps {
  news?: CardNormalProps[];
  divisions?: CardDivisionProps[];
  hashShowMore?: boolean;
  handleShowMore?: () => void;
}

const SearchContent:React.FC<SearchContentProps> = ({
  news,
  divisions,
  hashShowMore,
  handleShowMore,
}) => (
  <>
    <div className="t-searchResult_list">
      {news && news.length > 0 && (
        <Row className="u-ml-negative-md-16 u-mr-negative-md-16 u-ml-negative-10 u-mr-negative-10">
          {news.map((item, index) => (
            <Col
              key={`searchResultItem-${index.toString()}`}
              className="u-mt-md-32 u-mt-20 u-pl-md-16 u-pr-md-16 u-pl-10 u-pr-10"
              xs={12}
              sm={6}
              lg={4}
            >
              <Card.Normal {...item} />
            </Col>
          ))}
        </Row>
      )}
      {divisions && divisions.length > 0 && (
        <Row className="u-ml-negative-md-16 u-mr-negative-md-16 u-ml-negative-10 u-mr-negative-10">
          {divisions.map((item, index) => (
            <Col
              key={`searchResultItem-${index.toString()}`}
              className="u-mt-md-32 u-mt-20 u-pl-md-16 u-pr-md-16 u-pl-10 u-pr-10"
              xs={12}
              sm={6}
              lg={4}
            >
              <Card.Division {...item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
    {hashShowMore && (
    <div className="t-searchResult_showMore">
      <Button
        variant="primary-green"
        size="lg"
        onClick={handleShowMore}
      >
        {/* TODO: Translation later */}
        Xem thêm
      </Button>
    </div>
    )}
  </>
);

const SearchResultWrap: React.FC<SearchResultWrapProps> = ({
  titleMain,
  children,
}) => (
  <div className="t-searchResult">
    <Container>
      <div className="t-searchResult_heading">
        <Heading type="h4" modifiers={['s015', '700', 'center', 'arsenic']}>
          {titleMain}
        </Heading>
      </div>
      {children}
    </Container>
  </div>
);

export default {
  Wrapper: SearchResultWrap,
  Summary: SearchTop,
  Filter: SearchFilter,
  Content: SearchContent,
};
