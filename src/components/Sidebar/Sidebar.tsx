import { useRecoilState } from "recoil";
import { darkModeState, PageTypes, displayedPage, DarkModeWindowProps } from "../../store";
import useWindowWidth from "../window-width-hook";
import styled from "styled-components";
import iconSun from "../../assets/icons/sun.png";
import iconMoon from "../../assets/icons/moon.png";
import iconHouse from "../../assets/icons/house.png"
import iconPerson from "../../assets/icons/person.png"
import iconBriefcase from "../../assets/icons/briefcase.png"
import NavigationButton from "./NavigationButton";


const Sidebar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const [selectedPage, setSelectedPage] = useRecoilState(displayedPage)
  const windowWidth = useWindowWidth();
  return (
    <StyledSidebarWrapper>
      <StyledButtonWrapper>
        <StyledButton
          onClick={() => {
            setDarkMode(!darkMode);
          }}
          $windowWidth={windowWidth}
          $darkMode={darkMode}
        >
          <img
            src={darkMode ? iconSun : iconMoon}
            alt="light-mode"
            style={{ width: "30px", height: "30px" }}
          />
        </StyledButton>
      </StyledButtonWrapper>
      <StyledConditionalDiv $darkMode={darkMode} $windowWidth={windowWidth}>
        <NavigationButton
            sectionName="Home"
            icon={iconHouse}
            isHighlighted={selectedPage.type === PageTypes.Home}
            onClick={() =>
              setSelectedPage({
                type: PageTypes.Home,
              })
            }
          />
          <NavigationButton
            sectionName="About"
            icon={iconPerson}
            isHighlighted={selectedPage.type === PageTypes.About}
            onClick={() =>
              setSelectedPage({
                type: PageTypes.About,
              })
            }
          />
          <NavigationButton
            sectionName="Portfolio"
            icon={iconBriefcase}
            isHighlighted={selectedPage.type === PageTypes.Portfolio}
            onClick={() =>
              setSelectedPage({
                type: PageTypes.Portfolio,
              })
            }
          />
        
      </StyledConditionalDiv>
    </StyledSidebarWrapper>
  );
}

const StyledSidebarWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 10%);
  margin-right: 1rem;
  user-select: none;
  /* position: relative; */
`;

const StyledButtonWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 5;
  margin: 1rem 2rem 1rem 1rem;
`;

const StyledButton = styled.button<DarkModeWindowProps>`
  margin-right: ${props => (props.$windowWidth <= 1000 ? "1rem" : "0")};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: ${props => (props.$darkMode ? "#656565" : "#EEEEEE")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const StyledConditionalDiv = styled.div<DarkModeWindowProps>`
  ${props => props.$windowWidth > 1000 ? `
    position: fixed;
    right: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  ` : `
    display: flex;
    bottom: 0;
    left: 0;
    right: auto;
    position: absolute;
    width: 100%;
    justify-content: space-around;
    background: ${props.$darkMode ? "#2B2A2A" : "#FFFFFF"};
    height: 60px;
    align-items: center;
    box-shadow: ${props.$darkMode ? "none" : "0 0 47px #dedede"};
    z-index: 5  ;
  `}
`;

export default Sidebar;