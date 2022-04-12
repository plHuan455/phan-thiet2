import React from 'react';

const Home = React.lazy(() => import('pages/Home'));
const Contact = React.lazy(() => import('pages/Contact'));
const Policy = React.lazy(() => import('pages/Policy'));

export type TemplateCodeTypes = {
  code: string;
  component: React.FC<BasePageDataTypes<any>>
}

export const errorTemplateCode = (status?: number) => {
  switch (status) {
    case 400:
      return 'ERROR_400';

    case 403:
      return 'ERROR_403';

    case 404:
      return 'ERROR_404';

    default:
      return 'ERROR_500';
  }
};

export const TemplateCode: TemplateCodeTypes[] = [
  {
    code: 'home',
    component: Home,
  },
  {
    code: 'CONTACT',
    component: Contact,
  },
  {
    code: 'policy',
    component: Policy,
  },

];
