import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';

import { handleScrollXCenter, handleScrollYCenter } from './functions';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import useWindowResize from 'hooks/useWindowResize';
import mapModifiers from 'utils/functions';

export interface TimeLineItemType {
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  textBtn?: string;
}
export interface TimeLineCardProps extends TimeLineItemType {
  active?: boolean;
  handleClick?: () => void;
}

export const TimeLineCard:React.FC<TimeLineCardProps> = ({
  handleClick,
  active,
  title,
  description,
  href,
  target,
  textBtn,
}) => (
  <div className={`t-timelineCard ${active ? 'active' : ''}`}>
    <div
      onClick={handleClick}
      className={`t-timelineCard_circle ${active ? 'active' : ''}`}
    />
    <div className="t-timelineCard_content">
      <div
        onClick={handleClick}
        className="t-timelineCard_title"
      >
        <Text
          modifiers={['16x28', '400', 'fontSvnGotham', 'uppercase', 'white']}
          content={title}
        />
      </div>
      {active && (
      <div className="t-timelineCard_description u-mt-16 u-mt-md-22">
        <Text
          modifiers={['14x20', '400', 'white']}
          content={description}
        />
      </div>
      )}
      {active && (
      <div className="u-mt-16 u-mt-md-22">
        <Link className="t-timelineCard_btn" href={href} target={target}>
          {textBtn}
        </Link>
      </div>
      )}
    </div>
  </div>
);

export interface VerticalJourneysProps {
  dataTimeLine?: TimeLineItemType[];
  handleClickTimeLine?: (i: number) => void;
}

export const VerticalJourneys: React.FC<VerticalJourneysProps> = ({
  dataTimeLine,
  handleClickTimeLine,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const refTimeLine = useRef<HTMLDivElement|null>(null);
  const refIndexActive = useRef<number>(0);
  const refTimeout = useRef<NodeJS.Timeout>();

  const handleScrollCenter = useCallback((index:number) => {
    if (window.innerWidth > 767) {
      handleScrollYCenter(refTimeLine, '.t-verticalJourneys_timelineItem', index);
    } else {
      handleScrollXCenter(refTimeLine, '.t-verticalJourneys_timelineItem', index);
    }
  }, []);

  const handleClick = useCallback((i:number) => {
    refIndexActive.current = i;
    setIndexActive(i);
    handleScrollCenter(i);
    if (handleClickTimeLine) {
      handleClickTimeLine(i);
    }
  }, [handleClickTimeLine, handleScrollCenter]);

  useWindowResize(() => {
    if (refTimeout.current) clearTimeout(refTimeout.current);
    refTimeout.current = setTimeout(() => {
      handleScrollCenter(refIndexActive.current);
    }, 500);
  });

  useEffect(() => () => refTimeout.current && clearTimeout(refTimeout.current), []);

  return (
    <>
      <div className="t-verticalJourneys_arrowMobile">
        <button
          onClick={() => handleClick(indexActive - 1)}
          className={indexActive === 0 ? 'disabled' : undefined}
          type="button"
        >
          <Icon iconName="arrowLeftWhite" />
        </button>
        <button
          onClick={() => handleClick(indexActive + 1)}
          className={(dataTimeLine && indexActive === dataTimeLine.length - 1) ? 'disabled' : undefined}
          type="button"
        >
          <Icon iconName="arrowRightWhite" />
        </button>
      </div>
      <div className="t-verticalJourneys">
        <div
          ref={refTimeLine}
          className="t-verticalJourneys_timelineList"
        >
          {dataTimeLine?.map((item, index) => (
            <div
              key={`item-${index.toString()}`}
              className={`t-verticalJourneys_timelineItem ${indexActive === index ? 'active' : ''}`}
            >
              <TimeLineCard
                active={indexActive === index}
                handleClick={() => handleClick(index)}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export interface JourneysListProps {
  listCard?: CardLayerProps[];
  titleField?: string;
  emptyStr?: string;
  loading?: boolean;
  handleClick?: (idx?: number) => void;
}

export const JourneysList:React.FC<JourneysListProps> = ({
  listCard,
  titleField,
  emptyStr,
  loading,
  handleClick,
}) => {
  const settings = useMemo(() => ({
    infinite: listCard && listCard?.length > 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow customArrow="circleWhite" />,
    nextArrow: <NextArrow customArrow="circleWhite" />,
    dots: false,
    arrows: true,
    customPaging() {
      return (
        <span className="o-carousel_dot circle" />
      );
    },
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          infinite: listCard && listCard?.length > 2,
          centerMode: true,
          className: 'center',
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '70',
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: listCard && listCard?.length > 1,
          centerMode: true,
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40',
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          infinite: listCard && listCard?.length > 1,
          centerMode: true,
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30',
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          infinite: true,
          centerMode: true,
          className: 'center',
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60',
          dots: true,
          arrows: false,
        },
      },
    ],
  }), [listCard]);

  return (
    <div className={mapModifiers('t-journeysList', !listCard?.length && 'empty')}>
      <div className="u-mb-16">
        <Text modifiers={['20x32', 'white', 's015']} content={titleField} />
      </div>
      <div>
        <FlatList
          settings={{ lazyLoad: 'ondemand', ...settings }}
          data={listCard}
          render={(item, idx) => (
            <Card.Layer
              {...item}
              ratio="258x334"
              modifiers={['r15', 'pd-6x20']}
              handleClick={() => handleClick && handleClick(idx)}
            />
          )}
        />
        {loading && (
        <div className="d-flex justify-content-center d-md-block u-mt-16">
          <Icon iconName="loadingWhite" />
        </div>
        )}
        {!listCard?.length && !loading && (
        <div className="t-journeysList_empty">
          <Text modifiers={['14x20', 'white', 's015']}>
            {emptyStr}
          </Text>
        </div>
        )}
      </div>
    </div>
  );
};

export interface JourneysProps extends VerticalJourneysProps, JourneysListProps {
  srcBg?: string;
  title?: string;
  emptyStr?: string;
  handleClickCard?: (idx?: number) => void;
}

const Journeys: React.FC<JourneysProps> = ({
  dataTimeLine,
  srcBg,
  title,
  listCard,
  titleField,
  emptyStr,
  handleClickTimeLine,
  handleClickCard,
  loading,
}) => (
  <div className="t-journeys">
    <img
      loading="lazy"
      className="t-journeys_bg"
      src={srcBg}
      alt="background"
    />
    <div className="t-journeys_wrapContent">
      <Container modifiers={['journeys']}>
        <Heading content={title} type="h2" modifiers={['s015', 'white']} />
        <div className="t-journeys_content">
          <Animate type="fadeInUp" extendClassName="t-journeys_left">
            <VerticalJourneys
              dataTimeLine={dataTimeLine}
              handleClickTimeLine={handleClickTimeLine}
            />
          </Animate>
          <div className={mapModifiers('t-journeys_right', !listCard?.length && 'empty')}>
            <Animate type="slideInRight" extendClassName="t-journeys_right_list">
              <JourneysList
                listCard={listCard}
                titleField={titleField}
                loading={loading}
                emptyStr={emptyStr}
                handleClick={handleClickCard}
              />
            </Animate>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default Journeys;
