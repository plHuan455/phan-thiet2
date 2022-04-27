import React, { KeyboardEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardDivisionProps } from 'components/organisms/Card/Division';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import Tabs, { Tab } from 'components/organisms/Tabs';

export interface SearchResultWrapProps {
  titleMain?: string;
}
export interface SearchTopProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleSubmit?: () => void;
  searchText?: {
    length: number;
    text: string;
    value: string;
  };
}

const SearchTop = React.forwardRef<
  HTMLInputElement,
  SearchTopProps
>(({
  handleSubmit,
  searchText,
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
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter' && handleSubmit) { handleSubmit(); }
          }}
        />
        <button className="t-searchResult_searchInput_btn" type="button" onClick={handleSubmit}>
          <Icon iconName="searchGray" size="14" />
        </button>
      </div>
    </div>
    {searchText && (
    <div className="t-searchResult_textResult u-mt-16">
      <Text modifiers={['14x20', '400', 'fontSvnGotham', 'black', 'center']}>
        {searchText.length}
        {' '}
        {searchText.text}
        {' '}
        <strong>{`"${searchText.value}"`}</strong>
      </Text>
    </div>
    )}
  </>
));

export interface SearchFilterProps {
  tab?: {
    list?: {
      label?: string;
      slug?: string;
    }[];
    active?: string;
    onSelect?: (slug?: string) => void;
  };
  filter?: {
    value?: OptionType;
    options: OptionType[];
    placeholder?: string;
    onFilter?: (item?: OptionType) => void;
  };
}

const SearchFilter:React.FC<SearchFilterProps> = ({
  tab,
  filter,
}) => (
  <div className="t-searchResult_wrapTabs u-mt-24 u-mt-md-32">
    <div className="t-searchResult_tab">
      <Tabs variableMutate={tab?.active}>
        {tab?.list?.map((item, index) => (
          <Tab
            key={`tab-${index.toString()}`}
            label={item.label}
            active={item.slug === tab?.active}
            handleClick={() => tab?.onSelect && tab?.onSelect(item.slug)}
          />
        ))}
      </Tabs>
    </div>
    <div className="t-searchResult_filter">
      <PullDown
        options={filter?.options || []}
        placeholder={filter?.placeholder}
        handleSelect={filter?.onFilter}
        value={filter?.value}
      />
    </div>
  </div>
);

export interface SearchContentProps {
  news?: CardNormalProps[];
  divisions?: CardDivisionProps[];
  hashShowMore?: boolean;
  loading?: boolean;
  handleShowMore?: () => void;
}

const SearchContent:React.FC<SearchContentProps> = ({
  news,
  divisions,
  hashShowMore,
  loading,
  handleShowMore,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="t-searchResult_list">
        <Animate type="fadeInUp">
          {news && news?.length > 0 && (
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
          {divisions && divisions?.length > 0 && (
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
          {loading && (
          <div className="d-flex justify-content-center u-mt-24 u-mb-24">
            <Icon iconName="loadingWhite" />
          </div>
          )}

          {hashShowMore && (
          <div className="t-searchResult_showMore">
            <Button
              variant="primary-green"
              size="lg"
              onClick={handleShowMore}
            >
              {t('button.more')}
            </Button>
          </div>
          )}
        </Animate>

      </div>

    </>
  );
};

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
