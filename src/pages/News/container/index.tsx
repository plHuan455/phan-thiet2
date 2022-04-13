import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import useNews from '../hook';

import Banner from './banner';
import Consultancy from './consultancy';
import Documents from './documents';
import Events from './events';
import Images from './images';
import MenuTag from './menus';
import News from './news';
import Section from './section';
import Videos from './videos';

import { FormConsultancy } from 'components/organisms/Consultancy';
import { schemasConsultancyForm } from 'utils/schemas';

const Screen: React.FC = () => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  const { ref } = useNews();

  return (
    <>
      <Banner />
      <MenuTag />
      <Section ref={ref.news}>
        <News />
      </Section>
      <Section ref={ref.events}>
        <Events />
      </Section>
      <Section ref={ref.images}>
        <Images />
      </Section>
      <Section ref={ref.videos}>
        <Videos />
      </Section>
      <Section ref={ref.documents}>
        <Documents />
      </Section>
      <section>
        <Consultancy method={method} />
      </section>
    </>
  );
};

export default Screen;
