import React, { useState } from 'react';

// import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import mapModifiers from 'utils/functions';

interface VerticalJourneysProps {
  dataListVertical: {
    title: string;
    desc: string;
    btnText: string;
    slug: string;
    target?: string;
  }[],
}

export const VerticalJourneys: React.FC<VerticalJourneysProps> = ({
  dataListVertical,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const settingsVertical = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
  };

  return (
    <div className="t-verticalJourneys">
      {dataListVertical.length > 0 && (
        <Carousel settings={settingsVertical}>
          {dataListVertical.map((item, index) => (
            <div className={mapModifiers('t-verticalJourneys_item', index === indexActive && 'active')} key={`verticalJourneys-${index.toString()}`}>
              <div className="t-verticalJourneys_title" onClick={() => setIndexActive(index)}>
                <Text
                  modifiers={['16x28', '400', 'fontSvnGotham', 'uppercase', 'white']}
                  content={item.title}
                />
              </div>
              {/* {index === indexActive ? (
                <>
                  <div className="t-verticalJourneys_desc u-mt-22 u-mb-22">
                    <Text
                      modifiers={['14x20', '400', 'fontSvnGotham', 'white']}
                      content={item.desc}
                    />
                  </div>
                  <div className="t-verticalJourneys_btn">
                    <Button variant="outline-green" size="md" href={item.slug}>
                      {item.btnText}
                    </Button>
                  </div>
                </>
              ) : (<></>)} */}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

interface JourneysProps {
}

const Journeys: React.FC<JourneysProps> = ({ children }) => (
  <div>{children}</div>
);

Journeys.defaultProps = {
};

export default Journeys;
