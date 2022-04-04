import React, { useMemo } from 'react';

import error404 from 'assets/images/error/404.png';
import ballonRight from 'assets/images/error/ballon_right.png';
import ballonLeft from 'assets/images/error/balloon_left.png';
import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

interface ErrorType {
  imgSrc: string;
}

interface ErrorProps {
  type: number;
  imgSrc?: string;
  title?: string;
  description?: string;
  back?: LinkTypes;
  contact?: LinkTypes
}

const Error: React.FC<ErrorProps> = ({
  type,
  imgSrc,
  title,
  description,
  back,
  contact,
}) => {
  const error: ErrorType = useMemo(() => {
    switch (type) {
      case 404:
        return {
          imgSrc: error404,
        };

      case 500:
        return {
          imgSrc: error404,
        };
      case 503:
        return {
          imgSrc: error404,
        };

      default:
        return {
          imgSrc: error404,
        };
    }
  }, [type]);

  return (
    <div className="t-error">
      <div className="t-error_layerLeft">
        <Image src={ballonLeft} alt="ballon_left" />
      </div>
      <div className="t-error_layerRight">
        <Image src={ballonRight} alt="ballon_right" />
      </div>
      <Container>
        <div className="t-error_content d-flex flex-column align-items-center justify-content-center u-pt-80 u-pb-80">
          <div className="t-error_thumbnail ">
            <Image ratio="1x1" src={imgSrc || error.imgSrc} size="cover" alt="" />
          </div>
          <div className="t-error_wapper u-pt-19">
            <Heading type="h4" modifiers={['raisinBlack', '700', 'center']} content={title} />
            <div className="u-mt-20">
              <Text modifiers={['davyGrey', '16x28', '400', 'center']} content={description} />
            </div>
            <div className="t-error_group d-flex align-items-center justify-content-center u-mt-40">
              <div className="t-error_back">
                <Button size="md" variant="primary-green" href={back?.url} target={back?.target}>{back?.text}</Button>
              </div>
              <div className="t-error_contact u-ml-12">
                <Button size="md" variant="outline-green" href={contact?.url} target={contact?.target}>{contact?.text}</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

Error.defaultProps = {
  imgSrc: undefined,
  title: undefined,
  description: undefined,
  back: undefined,
  contact: undefined,
};

export default Error;
