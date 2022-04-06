import React from 'react';

import bg from 'assets/images/planningHighway/bg.jpg';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface PlanningHighwayProps {
}

export interface BoxProps {
  content?: string;
  variant?: 'blue' | 'yellow';
  arrow?: 'bottom-right' | 'top-left';
}

export const Box:React.FC<BoxProps> = ({
  content,
  variant,
  arrow,
}) => (
  <div className={mapModifiers('o-box', variant, arrow)}>
    <Text content={content} type="div" modifiers={['white', '16x28', '700']} />
  </div>
);

const PlanningHighway: React.FC<PlanningHighwayProps> = () => (
  <div className="t-planningHighway">
    <div className="t-planningHighway_map">
      <img className="t-planningHighway_bg" src={bg} loading="lazy" alt="bg" />
      <div className="t-planningHighway_svg">
        <svg width="100%" height="100%" viewBox="0 0 1366 767" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="vector vector-yellow-short" d="M244.779 443.535L216.033 383.238" stroke="#B29556" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
          <path className="vector vector-blue" d="M818.26 191.708C818.26 191.708 758.728 241.022 752.529 316.431" stroke="#1A4988" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
          <path className="vector vector-yellow-long" d="M0 461.319C314.803 327.653 578.407 230.757 645.008 217.786L747.825 325.084" stroke="#B29556" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16" />
        </svg>
      </div>
    </div>
  </div>
);

PlanningHighway.defaultProps = {
};

export default PlanningHighway;
