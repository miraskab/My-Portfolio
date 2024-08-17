import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { darkModeState, DarkModeWindowProps } from "../../../store";
import { showAboutSectionState } from "../stores/home-store";
import styled from "styled-components";
import rightArrow from "../../../assets/icons/right-arrow.png";
import InteractiveButton from "../../../components/InteractiveButton";


const HomeBody = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();

  const [showAboutSection, setShowAboutSection] = useRecoilState(showAboutSectionState);
  return (
    <StyledHomeBody $windowWidth={windowWidth}>
      <StyledHeaderText $windowWidth={windowWidth} $darkMode={darkMode} isMyName={true} >
        I am Miras
      </StyledHeaderText>
      <StyledHeaderText $windowWidth={windowWidth} $darkMode={darkMode} isMyName={false} >
        Web Developer
      </StyledHeaderText>
      <StyledBodyText $windowWidth={windowWidth} $darkMode={darkMode} >
        I am a proficient web developer specializing in front-end
        technologies. With expertise in HTML, CSS, and JavaScript, I am
        dedicated to crafting visually appealing and interactive user
        experiences. Passionate about staying abreast of the latest industry
        trends, I am committed to delivering high-quality and responsive
        websites.
      </StyledBodyText>
      <InteractiveButton
        onClick={ () => {
          setShowAboutSection(!showAboutSection)
        }}
        icon={rightArrow}
        text="MORE ABOUT ME"
        buttonWidth="225px"
      />
    </StyledHomeBody>
  )
}

const StyledHomeBody = styled.div<{ $windowWidth: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: ${props => (props.$windowWidth <= 1000 ? 0 : "3rem")};
  z-index: 3;
`;

const StyledHeaderText = styled.h1<{ $windowWidth: number, $darkMode: boolean, isMyName: boolean}>`
  font-size:
    ${props => (props.$windowWidth <= 1200
    ? props.$windowWidth <= 1000
      ? "29px"
      : "42px"
    : "51px")};
  color: ${props => (props.isMyName 
    ? props.$darkMode
      ? "var(--primary-color-dark)"
      : "var(--primary-color-light)"
    : props.$darkMode
      ? "white"
      : "#666666")};
  line-height:
    ${props => (props.$windowWidth <= 1200
    ? props.$windowWidth <= 1000
      ? "39px"
      : "52px"
    : "62px")};
  font-weight: 700;
  margin: 0;
  transition: 0.3s ease;
`;

const StyledBodyText = styled.p<DarkModeWindowProps>`
  margin: 15px 0 28px;
  font-size: ${props => (props.$windowWidth <= 1000 ? "14px" : "16px")};
  line-height: ${props => (props.$windowWidth <= 1000 ? "28px" : "30px")};
  color: ${props => (props.$darkMode ? "#F9F9F9" : "#6E6E6E")};
  font-family: sans-serif;
  max-width: ${props => (props.$windowWidth <= 1000 ? "550px" : "auto")};
  margin-left: 1rem;
  margin-right: 1rem;
`;


export default HomeBody;