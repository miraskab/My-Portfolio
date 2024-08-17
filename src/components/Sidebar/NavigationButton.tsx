import { useRecoilState } from "recoil";
import styled from "styled-components";
import useWindowWidth from "../window-width-hook";
import { darkModeState } from "../../store";


interface NavigationProps {
  sectionName: string;
  icon: string;
  isHighlighted: boolean;
  onClick: () => void;
}

const NavigationButton = ({ sectionName, icon, isHighlighted, onClick }: NavigationProps) => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();

  return (
    <StyledButton $windowWidth={windowWidth} $darkMode={darkMode} $isHighlighted={isHighlighted} onClick={onClick}>
      {windowWidth >= 1000 ?
        <PopUpTextBox>
          {sectionName}
        </PopUpTextBox>
        : <></>
      }
      
      <img
        src={icon}
        alt="icon"
        style={{ width: "18px", height: "18px", zIndex: "1"}}
      />
    </StyledButton>
  )
}

const PopUpTextBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  height: 50px;
  background-color: transparent;
  color: white;
  padding: 0 3rem 0 2rem;
  border-radius: 25px;
  white-space: nowrap;
  transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, border-radius 0.3s ease, clip-path 0.3s ease;
  opacity: 0;
  box-shadow: none;
  z-index: 0;
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  cursor: pointer;

`;

const StyledButton = styled.div<{ $windowWidth: number; $darkMode: boolean; $isHighlighted: boolean}>`
  margin-bottom: ${props => (props.$windowWidth <= 550 ? "0" : "80px")};
  background-color: ${props => (props.$isHighlighted
  ? props.$darkMode
    ? "var(--primary-color-dark)"
    : "var(--primary-color-light)"
  : props.$darkMode
    ? "#656565"
    : "#EEEEEE"
  )};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover ${PopUpTextBox} {
    transform: translateX(-50%);
    opacity: 1;
    background-color: ${props => (props.$darkMode
    ? "var(--primary-color-dark)"
    : "var(--primary-color-light)")};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  img {
    filter: brightness(
      ${props => (props.$isHighlighted
      ? 3
      : props.$darkMode
        ? 2
        : 1)}
    )
  }
  &:hover img {
    filter: brightness(3);
    transition: filter 0.3s ease;
  }
  &:hover {
    background-color: ${props => (props.$darkMode
    ? "var(--primary-color-dark)"
    : "var(--primary-color-light)")};
  }
`;


export default NavigationButton;