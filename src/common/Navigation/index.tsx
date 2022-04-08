import React, { useContext, useEffect } from 'react';

import { TemplateCode } from './constants';

import { LanguageContext } from 'common/Language';
import Error from 'pages/Error';

const RenderPage: React.FC<
  Record<'data', BasePageDataTypes<any> | undefined>
> = ({ data }) => {
  const context = useContext(LanguageContext);

  useEffect(() => {
    if (data?.pageData?.translations?.length && context?.translation?.setData) {
      context.translation.setData(data?.pageData?.translations);
    }
    return () => {
      if (context?.translation?.setData) {
        context.translation.setData([]);
      }
    };
  }, [data, context]);

  if (!data) return null;

  const Component = TemplateCode?.find((t) => t.code === data?.pageData?.templateCode)?.component;

  if (Component) {
    return React.createElement<BasePageDataTypes<any>>(Component, data);
  }

  return <Error status={404} />;
};

export default RenderPage;
