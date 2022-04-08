import React from 'react';

import useAnimation from './animation';

import ballonRight from 'assets/images/error/ballon_right.png';
import ballonLeft from 'assets/images/error/balloon_left.png';
import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface ErrorProps {
  imgSrc?: string;
  title?: string;
  description?: string;
  back?: LinkTypes;
  contact?: LinkTypes;
}

const Error: React.FC<ErrorProps> = ({
  imgSrc,
  title,
  description,
  back,
  contact,
}) => {
  const { animated, ballonAnimate, errorAnimate } = useAnimation();
  return (
    <div className="t-error">
      <Container>
        {/* TODO: Add animation later */}
        <div className="t-error_content d-flex flex-column align-items-center justify-content-center u-pt-md-147 u-pb-md-80 u-pt-80 u-pb-64">
          <animated.div className="t-error_layerLeft" style={ballonAnimate}>
            <Image src={ballonLeft} alt="ballon_left" />
          </animated.div>
          <animated.div className="t-error_layerRight">
            {/* TODO: Add animation later */}
            <Image src={ballonRight} alt="ballon_right" />
          </animated.div>
          <div className="t-error_thumbnail">
            <animated.div style={errorAnimate}>
              <Image ratio="1x1" src={imgSrc} size="cover" alt="" />
            </animated.div>
          </div>
          <div className="t-error_wapper u-pt-19">

            <Heading
              type="h4"
              modifiers={['raisinBlack', '700', 'center']}
              content={title}
            />

            <div className="u-mt-20">
              <Text
                modifiers={['davyGrey', '16x28', '400', 'center']}
                content={description}
              />
            </div>
            <div className="t-error_group d-flex align-items-center justify-content-center u-mt-40">
              <div className="t-error_back">
                <Button
                  size="md"
                  variant="primary-green"
                  href={back?.url}
                  target={back?.target}
                >
                  <span>{back?.text}</span>
                </Button>
              </div>
              <div className="t-error_contact u-ml-12">
                <Button
                  size="md"
                  variant="outline-green"
                  href={contact?.url}
                  target={contact?.target}
                >
                  {contact?.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

Error.defaultProps = {};

export default Error;
