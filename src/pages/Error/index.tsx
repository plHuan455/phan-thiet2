import React, { useMemo } from 'react';

import { errorTemplateCode } from 'common/Navigation/constants';
import ErrorTemplate, { ErrorProps as ErrorTemplateProps } from 'components/templates/Error';
import { useAppSelector } from 'store/hooks';
import { getBlockData, baseURL } from 'utils/functions';

interface ErrorProps {
  status?: number;
}

const Error: React.FC<ErrorProps> = ({
  status,
}) => {
  const staticErrors = useAppSelector((state) => state.static.errors);

  const blockData = useMemo((): ErrorTemplateProps => {
    const blocks = staticErrors?.find((e) => e.templateCode === errorTemplateCode(status))?.blocks;
    const data = getBlockData<DataStaticErrorBlockTypes>('introduction', blocks);

    return ({
      imgSrc: baseURL(data?.image),
      title: data?.errorDescription,
      description: data?.thanksDescription,
      contact: data?.link1,
      back: data?.link2,
    });
  }, [status, staticErrors]);

  return (
    <ErrorTemplate {...blockData} />
  );
};

Error.defaultProps = {
  status: undefined,
};

export default Error;
