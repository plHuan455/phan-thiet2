import React, { useCallback, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import PopupInfo from './popupInfo';

import bg from 'assets/images/planningHighway/bg.jpg';
import imagePlane from 'assets/images/planningHighway/image_plane.png';
import locationPoint from 'assets/images/planningHighway/location_point.png';
import planeLg from 'assets/images/planningHighway/plane_lg.png';
import planeSm from 'assets/images/planningHighway/plane_sm.png';
import project from 'assets/images/planningHighway/project.png';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import useScrollAnimate from 'hooks/useScrollAnimation';
import mapModifiers from 'utils/functions';

type InfoItemType = {
  imgSrc?: string;
  content?: string;
}

type KeyInfoItem = 'san_bay_phan_thiet' | 'san_bay_long_thanh' | 'cao_toc';

interface PlanningHighwayProps {
  dataScheduleBox?: ScheduleBoxProps;
  dataInfo?: Record<KeyInfoItem, InfoItemType>;
}

export interface BoxProps {
  content?: string;
  variant?: 'blue' | 'yellow';
  arrow?: 'blue-bottom-right' | 'blue-top-left' | 'yellow-bottom-right';
  isShowPlane?: boolean;
  animationPlane?: string;
}

export const Box:React.FC<BoxProps> = ({
  content,
  variant,
  arrow,
  isShowPlane,
  animationPlane,
}) => (
  <div className={mapModifiers('o-box', variant, arrow)}>
    {isShowPlane && (
      <div className={`o-box_plane ${animationPlane}`}>
        <Image src={imagePlane} ratio="182x70" alt="plane" />
      </div>
    )}
    <div className="o-box_content">
      <Text content={content} type="div" modifiers={['white', '700']} />
    </div>
  </div>
);

export interface ScheduleBoxProps {
  titleScheduleBox?: string;
  dataSchedule?: {
    time: string;
    content: string;
  }[];
  animationActive?: boolean;
}

export const ScheduleBox: React.FC<ScheduleBoxProps> = ({
  titleScheduleBox,
  dataSchedule,
  animationActive,
}) => (
  <div className={`o-scheduleBox ${animationActive ? 'customAnimate-scheduleBox' : 'preanimate'}`}>
    <div className="o-scheduleBox_title u-pt-10 u-pb-10">
      <Heading
        type="h5"
        modifiers={['uppercase', 's015', '700', 'fontOswald', 'white', 'center']}
        content={titleScheduleBox}
      />
    </div>
    {dataSchedule && dataSchedule.length > 0 && (
      <div className="o-scheduleBox_wrapper">
        <Row
          className="u-ml-negative-8 u-mr-negative-8 u-mt-negative-10 u-mb-negative-10"
        >
          {dataSchedule.map((item, index) => (
            <Col
              className={`o-scheduleBox_item u-pl-8 u-pr-8 u-pt-10 u-pb-10 ${animationActive && `customAnimate-scheduleBoxItem-${index.toString()}`}`}
              xs={index % 2 === 0 ? 4 : 8}
            >
              <div className="o-scheduleBox_item_layer u-mr-9" />
              <div className="o-scheduleBox_item_content">
                <Text
                  modifiers={['20x32', '700', 'fontSvnGotham', 's015', 'bananaMania']}
                  content={item.time}
                />
                <div className="u-mt-4">
                  <Text
                    modifiers={['12x18', '400', 'fontSvnGotham', 'white']}
                    content={item.content}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )}
  </div>
);

const PlanningHighway: React.FC<PlanningHighwayProps> = ({
  dataScheduleBox,
  dataInfo,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  const fnGetClassAnimate = useCallback((_class:string) => (animate ? _class : 'preanimate'), [animate]);
  const [info, setInfo] = useState<InfoItemType>();

  return (
    <div className="t-planningHighway" ref={ref}>
      <div className="t-planningHighway_map">

        <img
          className="t-planningHighway_bg"
          src={bg}
          loading="lazy"
          alt="bg"
        />
        <img
          className={`t-planningHighway_project ${fnGetClassAnimate('customAnimate-zoomInProject')}`}
          src={project}
          loading="lazy"
          alt="bg"
          onClick={() => setInfo(dataInfo?.cao_toc)}
        />
        <img
          className={`t-planningHighway_locationPoint ${fnGetClassAnimate('customAnimate-zoomInLocationPoint')}`}
          src={locationPoint}
          loading="lazy"
          alt="location"
        />
        <img
          className={`t-planningHighway_planeLarge ${fnGetClassAnimate('customAnimate-zoomInCasePlaneLarge')}`}
          src={planeLg}
          loading="lazy"
          alt="plane"
          onClick={() => setInfo(dataInfo?.san_bay_long_thanh)}
        />
        <img
          className={`t-planningHighway_planeSmall ${fnGetClassAnimate('customAnimate-zoomInCasePlaneSmall')}`}
          src={planeSm}
          loading="lazy"
          alt="plane"
          onClick={() => setInfo(dataInfo?.san_bay_phan_thiet)}
        />

        <div className="t-planningHighway_svg">
          <svg width="100%" height="100%" viewBox="0 0 1366 767" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="vector vector-yellow-short" d="M244.779 443.535L216.033 383.238" stroke="#B29556" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
            <path className="vector vector-blue" d="M818.26 191.708C818.26 191.708 758.728 241.022 752.529 316.431" stroke="#1A4988" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
            <path className="vector vector-yellow-long" d="M0 461.319C314.803 327.653 578.407 230.757 645.008 217.786L747.825 325.084" stroke="#B29556" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
          </svg>
        </div>

        {dataInfo?.cao_toc && (
        <div className={`t-planningHighway_expected ${fnGetClassAnimate('customAnimate-expected')}`}>
          <Box
            content={dataInfo?.cao_toc?.content}
            variant="yellow"
            arrow="yellow-bottom-right"
          />
        </div>
        )}

        {dataInfo?.san_bay_long_thanh && (
        <div className="t-planningHighway_airport">
          <div className={`${fnGetClassAnimate('customAnimate-airport')}`}>
            <Box
              content={dataInfo?.san_bay_long_thanh?.content}
              variant="blue"
              arrow="blue-top-left"
              isShowPlane
              animationPlane={`${fnGetClassAnimate('customAnimate-plane')}`}
            />
          </div>
          <div className={`t-planningHighway_airport_thumbnail ${fnGetClassAnimate('customAnimate-airportThumbnail')}`}>
            <Image src={dataInfo?.san_bay_long_thanh?.imgSrc} ratio="262x147" alt="thumbnail" />
          </div>
        </div>
        )}

        {dataInfo?.san_bay_phan_thiet && (
        <div className="t-planningHighway_airportOther">
          <div className={`${fnGetClassAnimate('customAnimate-airportOther')}`}>
            <Box
              content={dataInfo?.san_bay_phan_thiet?.content}
              variant="blue"
              arrow="blue-bottom-right"
            />
          </div>
          <div className={`t-planningHighway_airportOther_thumbnail ${fnGetClassAnimate('customAnimate-airportOtherThumbnail')}`}>
            <Image src={dataInfo?.san_bay_phan_thiet?.imgSrc} ratio="166x110" alt="plane" />
          </div>
        </div>
        )}

      </div>
      <div className="t-planningHighway_scheduleBox">
        <ScheduleBox
          {...dataScheduleBox}
          animationActive={animate}
        />
      </div>
      <PopupInfo
        isOpen={!!info}
        imgSrc={info?.imgSrc}
        content={info?.content}
        handleClose={() => setInfo(undefined)}
      />
    </div>
  );
};

PlanningHighway.defaultProps = {
  dataScheduleBox: undefined,
  dataInfo: undefined,
};

export default PlanningHighway;
