import { useRecoilState } from "recoil";
import styled from "styled-components";
import useWindowWidth from "../../components/window-width-hook";
import { darkModeState, DarkModeWindowProps } from "../../store";
import Banner from "../../components/Banner";
import GeneralInfo from "./components/GeneralInfo";
import SkillCharts from "./components/SkillCharts";

const About = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <StyledAboutWrapper $darkMode={darkMode} $windowWidth={windowWidth}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        <Banner
          backgroundText="RESUME"
          foregroundTextPrimary="ME"
          foregroundTextSecondary="ABOUT"
          backgroundFontSizes={["30px", "40px", "50px"]}
          foregroundFontSizes={["18px", "23px", "28px"]}
        />
        <GeneralInfo />
        <SkillCharts />
      </div>
    </StyledAboutWrapper>
  );
}

const StyledAboutWrapper = styled.div<DarkModeWindowProps>`
  height: 100%;
  background-color: ${props => (props.$darkMode ? 'var(--background-color-dark)' : 'var(--background-color-light)')};
  display: flex;
  font-family: sans-serif;
  flex-direction: column;
  overflow-y: auto;
  text-align: ${props =>
  props.$windowWidth <= 1000 ? 'center !important' : 'left !important'};
  transition: background-color 0.6s ease;
`;

export default About;