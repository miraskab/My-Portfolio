import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../store';
import useWindowWidth from '../../components/window-width-hook';
import HomeImg from './components/HomeImg';
import HomeBody from './components/HomeBody';

const Home = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();

  return (
    <StyledHome $darkMode={darkMode} $windoWidth={windowWidth}>
      <StyledBanner $darkMode={darkMode} $windoWidth={windowWidth}>
        <HomeImg isInverted={true} />
      </StyledBanner>
      <HomeImg isInverted={false} />
      <HomeBody />
    </StyledHome>
  );
};

const StyledHome = styled.div <{ $windoWidth: number; $darkMode?: boolean; }>`
  height: 100%;
  background-color: ${ props => (
    props.$darkMode
      ? "var(--background-color-dark)"
      : "var(--background-color-light)")};
  display: ${props => (props.$windoWidth <= 1000 ? 'flex' : 'grid')};
  flex-direction: column;
  justify-content: space-between;
  grid-template-columns: ${ props =>
    props.$windoWidth <= 1000 ? 'none' : '4fr 5fr 1fr'};
  font-family: "sans-serif";
  overflow-y: auto;
  text-align: ${props => (props.$windoWidth <= 1000 ? 'center' : 'left')};
  transition: background-color 0.6s ease;
`;

const StyledBanner = styled.div <{ $windoWidth: number; $darkMode: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: ${props => (props.$darkMode ? 'var(--primary-color-dark)' : 'var(--primary-color-light)')};
  transition: 1.0s ease;
  display: ${props => (props.$windoWidth > 1000 ? 'flex' : 'none')};
  clip-path: ${props => (props.$darkMode
    ? 'polygon(0 0, 7% 0, 27% 100%, 0% 100%)'
    : 'polygon(0 0, 15% 0, 35% 100%, 0% 100%)')};
    /* : 'polygon(0 0, 32% 0, 12% 100%, 0% 100%)')}; */
  z-index: 2;
`;

export default Home;