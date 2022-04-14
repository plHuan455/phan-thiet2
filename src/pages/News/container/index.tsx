import React from 'react';

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

const Screen: React.FC = () => {
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
        <Consultancy />
      </section>
    </>
  );
};

export default Screen;
