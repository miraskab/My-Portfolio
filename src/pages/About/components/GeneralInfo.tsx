import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { darkModeState, DarkModeWindowProps } from "../../../store";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import InteractiveButton from "../../../components/InteractiveButton";
import iconDownload from "../../../assets/icons/download.png";
import EducationInfo from "./EducationInfo";

const GeneralInfo = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <StyledContainer $windowWidth={windowWidth}>
      <Section $windowWidth={windowWidth}>
        <Title $darkMode={darkMode}>PERSONAL INFORMATION</Title>
        <PersonalInfo />
        <DownloadLink
          href="https://drive.google.com/file/d/1muvOBop8VYIPWl2UQ82tQ7aO5KhHu3Zc/view?usp=sharing"
          download="Miras_Resume_1_0.pdf"
          target="_blank"
        >
          <InteractiveButton
            icon={iconDownload}
            text="DOWNLOAD CV"
            buttonWidth="200px"
          />
        </DownloadLink>
      </Section>
      <Section $windowWidth={windowWidth}>
        <EducationInfo />
      </Section>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<DarkModeWindowProps>`
  display: flex;
  flex-direction: ${props => (props.$windowWidth < 1000 ? "column" : "row")};
  margin: ${props =>
    props.$windowWidth <= 550 ? "5% 5% 0 5%" : "4% 10% 0 10%"};
  max-width: 100%; 
  box-sizing: border-box; 
  align-items: flex-start; 
  padding: 0 1rem; 
`;

const Section = styled.div<DarkModeWindowProps>`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.$windowWidth < 1000 ? "center" : "flex-start")};
  margin-bottom: 20px; 
  box-sizing: border-box; 
`;

const Title = styled.h3<{ $darkMode: boolean }>`
  font-size: 24px;
  color: ${props => (props.$darkMode ? "white" : "#666")};
  margin-bottom: 10px;
`;

const DownloadLink = styled.a`
  width: 225px;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  text-decoration: none; 
`;

export default GeneralInfo;
