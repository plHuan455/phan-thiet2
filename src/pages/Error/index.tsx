import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { errorTemplateCode } from 'common/Navigation/constants';
import ErrorTemplate, {
  ErrorProps as ErrorTemplateProps,
} from 'components/templates/Error';
import i18n from 'i18n';
import { staticErrorsService } from 'services/pages';
import { getBlockData, baseURL } from 'utils/functions';

interface ErrorProps {
  status?: number;
}

const Error: React.FC<ErrorProps> = ({ status = 404 }) => {
  const { language } = i18n;
  const { data: staticErrors } = useQuery(['getError', [language]], staticErrorsService);

  const blockData = useMemo((): ErrorTemplateProps => {
    const blocks = staticErrors?.find(
      (e) => e.templateCode === errorTemplateCode(status),
    )?.blocks;
    const data = getBlockData<DataStaticErrorBlockTypes>(
      'introduction',
      blocks,
    );
    return {
      imgSrc: baseURL(data?.image),
      title: data?.errorDescription,
      description: data?.thanksDescription,
      contact: data?.link1,
      back: data?.link2,
    };
  }, [status, staticErrors]);

  return <ErrorTemplate {...blockData} />;
};

Error.defaultProps = {
  status: undefined,
};

export default Error;
