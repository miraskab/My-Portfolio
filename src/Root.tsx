import React, { useMemo } from 'react';
import Home from "./pages/Home/Home";
import Sidebar from './components/Sidebar/Sidebar';
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import { displayedPage, PageTypes } from "./store";
import { useRecoilState } from 'recoil';
import GlobalStyles from './components/GlobalStyles';

const Root: React.FC = () => {
  const [selectedPage] = useRecoilState(displayedPage);

  const Page = useMemo(() => {
    const PageMap: {
      [key in PageTypes]: React.FC;
    } = {
      [PageTypes.Home]: Home,
      [PageTypes.About]: About,
      [PageTypes.Portfolio]: Portfolio,
    };
    return PageMap[selectedPage.type];
  }, [selectedPage.type]);

  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Page key={`${selectedPage.type}`} />
    </>
  );
};

export default Root;
