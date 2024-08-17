import { useRecoilState } from "recoil";
import useWindowWidth from "./window-width-hook";
import { darkModeState } from "../store";
import styled from "styled-components";

interface BannerProps {
  backgroundText: string;
  foregroundTextPrimary: string;
  foregroundTextSecondary: string;
  backgroundFontSizes: string[];
  foregroundFontSizes: string[];
}

const Banner = ({ backgroundText, foregroundTextPrimary, foregroundTextSecondary, backgroundFontSizes, foregroundFontSizes } : BannerProps) => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <StyledContainer>
      <StyledBackgroundText $darkMode={darkMode} $windowWidth={windowWidth} $backgroundFontSizes={backgroundFontSizes}>
        <h1 style={{ fontWeight: "800" }}>{ backgroundText }</h1>
      </StyledBackgroundText>
      <StyledForegroundText $darkMode={darkMode} $windowWidth={windowWidth} $foregroundFontSizes={foregroundFontSizes}>
        <h1 style={{ fontWeight: "800" }}>{ foregroundTextSecondary } </h1>
        <h1
          style={{
            color: darkMode ? "var(--primary-color-dark)" : "var(--primary-color-light)",
            marginLeft: "1rem",
            fontWeight: "800",
          }}
        >
          { foregroundTextPrimary }
        </h1>
      </StyledForegroundText>
    </StyledContainer>
  )
}


const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  user-select: none;
`;

// 30 40 50
const StyledBackgroundText = styled.div<{ $darkMode: boolean, $windowWidth: number, $backgroundFontSizes: string[] }>`
  color: ${props => (props.$darkMode ? "#222222" : "#1E253012")};
  font-size: ${props =>
    props.$windowWidth <= 550
      ? props.$backgroundFontSizes[0]
      : props.$windowWidth <= 1000
      ? props.$backgroundFontSizes[1]
      : props.$backgroundFontSizes[2]};
  position: absolute;
  letter-spacing: 10px;
  line-height: 0.7;
  z-index: 1;
`;

// 18 23 28
const StyledForegroundText = styled.div<{  $darkMode: boolean, $windowWidth: number, $foregroundFontSizes: string[] }>`
  display: flex;
  font-size: ${props =>
    props.$windowWidth <= 550
      ? props.$foregroundFontSizes[0]
      : props.$windowWidth <= 1000
      ? props.$foregroundFontSizes[1]
      : props.$foregroundFontSizes[2]};
  font-weight: 700;
  color: ${props => (props.$darkMode ? "white" : "#666")};
  position: static;
  z-index: 2;
`;

export default Banner;