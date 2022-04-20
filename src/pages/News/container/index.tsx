/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useRef, useState } from 'react';
import { useQuery } from 'react-query';

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

import HelmetContainer from 'common/Helmet';
import { LanguageContext, LanguageContextResponse } from 'common/Language';
import useWindowScroll from 'hooks/useWindowScroll';
import { getOverviewListService } from 'services/overviews';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  pageData,
  seoData,
}) => {
  const langContext = useContext(LanguageContext);
  const { language } = langContext as LanguageContextResponse;
  const { ref } = useNews();
  const { data } = useQuery(['getOverviewList', [language.isChange]], () => getOverviewListService());

  // const lastScrollTopRef = useRef(0);
  // const contentPanelRef = useRef<HTMLDivElement>(null);
  // const menuPanelRef = useRef<HTMLDivElement>(null);
  // const backdropRef = useRef<HTMLDivElement>(null);

  // const [refIdxActive, setRefIdxActive] = useState<number>();
  // const newsRef = useRef<HTMLDivElement>(null);
  // const eventRef = useRef<HTMLDivElement>(null);
  // const imagesRef = useRef<HTMLDivElement>(null);
  // const videosRef = useRef<HTMLDivElement>(null);
  // const documentsRef = useRef<HTMLDivElement>(null);
  // const indexClicked = useRef<number | undefined>();

  // useWindowScroll(() => {
  //   const menuPanel = menuPanelRef.current;
  //   const contentPanel = contentPanelRef.current;
  //   const backdrop = backdropRef.current;
  //   const newsEl = newsRef.current;
  //   const eventsEl = eventRef.current;
  //   const imagesEl = imagesRef.current;
  //   const videosEl = videosRef.current;
  //   const documentEl = documentsRef.current;
  //   const appHeader = document.getElementById('app-header');
  //   if (
  //     menuPanel
  //     && contentPanel
  //     && appHeader
  //     && backdrop
  //     && newsEl
  //     && eventsEl
  //     && imagesEl
  //     && videosEl
  //     && documentEl
  //   ) {
  //     const tabMenuTop = appHeader.offsetHeight;
  //     const st = window.pageYOffset || document.documentElement.scrollTop;
  //     const isOverDownContent: boolean = st > contentPanel.offsetTop;
  //     const isOverUpContent: boolean = st < contentPanel.offsetTop - tabMenuTop;
  //     const isScrollDown: boolean = st > lastScrollTopRef.current;
  //     const documentTop = documentEl.getBoundingClientRect().top;
  //     const sectionEls = [newsEl, eventsEl, imagesEl, videosEl, documentEl];
  //     const windowBoundTop = window.screen.availHeight / 3;
  //     if (menuPanel.style.position === 'fixed') {
  //       menuPanel.style.top = `${tabMenuTop}px`;
  //     }
  //     if (isOverDownContent && isScrollDown) {
  //       menuPanel.style.position = 'fixed';
  //       contentPanel.style.paddingTop = `${menuPanel.offsetHeight}px`;
  //       backdrop.style.top = '0px';
  //     }
  //     if (isOverUpContent && !isScrollDown) {
  //       menuPanel.style.position = '';
  //       contentPanel.style.paddingTop = '';
  //     }
  //     if (documentTop > 0 && !isScrollDown) {
  //       menuPanel.style.opacity = '1';
  //       backdrop.style.top = '0px';
  //       if (st > contentPanel.offsetTop) {
  //         backdrop.style.top = '0px';
  //       }
  //     }
  //     if (documentTop < 0 && isScrollDown) {
  //       menuPanel.style.opacity = '0';
  //       menuPanel.style.top = '-100px';
  //       backdrop.style.top = '-100px';
  //     }
  //     if (st < contentPanel.offsetTop) {
  //       backdrop.style.top = '-100px';
  //     }
  //     let activeIdx = 0;
  //     sectionEls.forEach((el, elIdx) => {
  //       const elTop = el.getBoundingClientRect().top;
  //       if (elTop <= windowBoundTop) {
  //         activeIdx = elIdx;
  //       }
  //     });
  //     if (typeof indexClicked.current !== 'number' || indexClicked.current === activeIdx) {
  //       setRefIdxActive(activeIdx);
  //       indexClicked.current = undefined;
  //     }

  //     lastScrollTopRef.current = st <= 0 ? 0 : st;
  //   }
  // });

  // const handleMenuTabChange = (nextIndex: number) => {
  //   indexClicked.current = nextIndex;
  //   if (nextIndex !== undefined) {
  //     let currentTop: number | undefined = 0;
  //     switch (nextIndex) {
  //       case 0:
  //         currentTop = newsRef.current?.offsetTop;
  //         break;
  //       case 1:
  //         currentTop = eventRef.current?.offsetTop;
  //         break;
  //       case 2:
  //         currentTop = imagesRef.current?.offsetTop;
  //         break;
  //       case 3:
  //         currentTop = videosRef.current?.offsetTop;
  //         break;
  //       case 4:
  //         currentTop = documentsRef.current?.offsetTop;
  //         break;
  //       default:
  //         currentTop = newsRef.current?.offsetTop;
  //         break;
  //     }
  //     if (currentTop) {
  //       window.scrollTo({
  //         top: currentTop + window.screen.availHeight / 3,
  //         behavior: 'smooth',
  //       });
  //     }
  //   }
  //   setRefIdxActive(nextIndex);
  // };

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <div ref={ref.content} className="s-content-panel">
        <div ref={ref.backdrop} className="s-menu-backdrop" />
        <div ref={ref.menu} className="s-menu-panel">
          <MenuTag />
        </div>
        <Section ref={ref.news}>
          <News news={data?.news} blocks={blocks} />
        </Section>
        <Section ref={ref.events}>
          <Events events={data?.events} blocks={blocks} />
        </Section>
        <Section ref={ref.images}>
          <Images images={data?.images} blocks={blocks} />
        </Section>
        <Section ref={ref.videos}>
          <Videos videos={data?.videos} blocks={blocks} />
        </Section>
        <Section ref={ref.documents}>
          <Documents documents={data?.documents} blocks={blocks} />
        </Section>
      </div>
      <section>
        <Consultancy blocks={blocks} />
      </section>
    </>
  );
};

export default Screen;
