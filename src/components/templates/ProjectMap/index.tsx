import React, { useRef } from 'react';

import imgMap from 'assets/images/image_map.png';
import markerImg from 'assets/images/projectMap/marker.png';
import Container from 'common/Container';
import Text from 'components/atoms/Text';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Title from 'components/molecules/Title';

interface DivisionTypes {
  imgSrc: string;
  title: string;
}

interface InfoTypes {
  label: string;
  value: string
}

interface ProjectMapProps {
  isHome?: boolean;
  title?: string;
  optionsDivision?: OptionType[];
  listDivision: DivisionTypes[];
  scale?: InfoTypes;
  investment?: InfoTypes;
  utility?: InfoTypes;
  handleSelected?: (value: OptionType | undefined) => void;
  valueDivision?: OptionType;
}

const ProjectMap: React.FC<ProjectMapProps> = ({
  isHome,
  title,
  optionsDivision,
  valueDivision,
  listDivision,
  scale,
  investment,
  utility,
  handleSelected,
}) => {
  const ref = useRef<SVGGElement>(null);

  return (
    <div className="t-projectMap">
      <Container>
        {
        !isHome && (
          <div className="t-projectMap_title">
            <Title type="h4" content={title} modifiers={['gradientGreen', '700', 'center']} />
            <div className="t-projectMap_title-pulldown">
              <PullDown
                variant="highLight"
                options={optionsDivision || []}
                handleSelect={handleSelected}
                value={valueDivision}
                // TODO: Translation
                placeholder="Chọn phân khu"
              />
            </div>
          </div>
        )
      }
        <div className="t-projectMap_map">
          <svg width="100%" height="100%" viewBox="0 0 1127 656" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <image id="image1" width="100%" height="100%" xlinkHref={imgMap} />
            <g mask="url(#maskLocationMap)" ref={ref}>
              <g
                className="1 anchor"
              >
                <rect x="144.28" y="97.14" width="48" height="66" fill="url(#patternMarker)" />
              </g>
            </g>
            <defs>
              <pattern id="patternMarker" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#imageMarker" transform="scale(0.0196078 0.0135135)" />
              </pattern>
              <pattern id="patternMarker2" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#imageMarker2" transform="scale(1)" />
              </pattern>
              <image id="imageMarker" width="24" height="33" xlinkHref={markerImg} />
            </defs>
          </svg>
          <div className="t-project_listDivision">
            {
            listDivision?.map((item, index) => (
              <div
                key={`t-projectMap_listDivision-${index.toString()}`}
                className="t-project_listDivision-item"
              >
                {item.title}
              </div>
            ))
          }
          </div>
          <div className="t-projectMap_info">
            <div className="t-projectMap_info-scale">
              <Text modifiers={['20x32', 'copper', '400']} content={scale?.label} />
              <Title type="h1" modifiers={['gradientGreen', '700']} content={scale?.value} />
            </div>
            <div className="t-projectMap_info-scale">
              <Text modifiers={['20x32', 'copper', '400']} content={investment?.label} />
              <Title type="h1" modifiers={['gradientGreen', '700']} content={investment?.value} />
            </div>
            <div className="t-projectMap_info-scale">
              <Text modifiers={['20x32', 'copper', '400']} content={utility?.label} />
              <Title type="h1" modifiers={['gradientGreen', '700']} content={utility?.value} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

ProjectMap.defaultProps = {
  title: '',
  isHome: false,
  valueDivision: undefined,
  handleSelected: undefined,
  utility: undefined,
  investment: undefined,
  optionsDivision: undefined,
  scale: undefined,
};

export default ProjectMap;
