import { useRecoilState } from "recoil";
import styled from "styled-components";
import { darkModeState } from "../store";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  icon: string;
  buttonWidth: string;
}
const InteractiveButton = ({ onClick, text, icon, buttonWidth }: ButtonProps) => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <StyledButton
      onClick={onClick}
      $buttonWidth={buttonWidth}
    >
      <StyledButtonText $darkMode={darkMode} $buttonWidth={buttonWidth}>
        {text}
      </StyledButtonText>

      <StyledIconWrapper $darkMode={darkMode}>
        <img
          src={icon}
          alt="homepage"
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </StyledIconWrapper>
    </StyledButton>
  )
}

const StyledButtonText = styled.p<{ $darkMode: boolean, $buttonWidth: string }>`
  width: ${props => (props.$buttonWidth)};
  height: 55px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${props => (props.$darkMode ? 'var(--primary-color-dark)' : 'var(--primary-color-light)')};
  border-style: solid;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5rem;
  background:
    linear-gradient( to left, ${props => (props.$darkMode ? 'var(--primary-color-dark)' : 'var(--primary-color-light)')} 50%, transparent 50% );
  transition: all ease .3s;
  background-size: 200% 100%;
  background-position: left bottom;
  color: ${props => (props.$darkMode ? "white" : "#666666")};
  font-family: inherit;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  z-index: 0;

  &:hover {
    background-position: right bottom;
    color: white;
  }
`;

const StyledButton = styled.div<{ $buttonWidth: string }>`
  width: ${props => (props.$buttonWidth)};
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  align-items: center;

  &:hover ${StyledButtonText} {
    background-position: right bottom;
    color: white;
  }
`;

const StyledIconWrapper = styled.div<{ $darkMode: boolean }>`
  width: 55px;
  height: 55px;
  background-color: ${props => (props.$darkMode ? 'var(--primary-color-dark)' : 'var(--primary-color-light)')};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: static;
  z-index: 1;
  transition: all ease .3s;
`;

export default InteractiveButton;