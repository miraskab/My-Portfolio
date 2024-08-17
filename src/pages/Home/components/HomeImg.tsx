import styled from "styled-components";
import profileImgPc from "../../../assets/photos/home-img.png";
import useWindowWidth from "../../../components/window-width-hook";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../../store";

interface HomeImgProps {
  isInverted: boolean;
}

const HomeImg: React.FC<HomeImgProps> = ({ isInverted }) => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();

  return (
    <StyledImgWrapper>
      <StyledImg
        src={profileImgPc}
        alt="portrait"
        $windowWidth={windowWidth}
        $darkMode={darkMode}
        $isInverted={isInverted}
      />
    </StyledImgWrapper>
  )
}

const StyledImgWrapper = styled.div`
  border-radius: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  z-index: 1;
`;

const StyledImg = styled.img<{ $windowWidth: number; $darkMode: boolean; $isInverted: boolean}>`
  filter: ${props => (props.$darkMode
  ? props.$isInverted ? "invert(0%) sepia(39%) saturate(832%) hue-rotate(45deg) brightness(125%) contrast(88%)" : "invert(14%) sepia(86%) saturate(4515%) hue-rotate(335deg) brightness(104%) contrast(115%)"
  : props.$isInverted ? "invert(100%) sepia(91%) saturate(0%) hue-rotate(202deg) brightness(98%) contrast(108%)" : "invert(78%) sepia(67%) saturate(3837%) hue-rotate(3deg) brightness(106%) contrast(104%)"
)};
  transition: filter 0.15s ;
  position: ${props => (props.$windowWidth >= 1000 ? "absolute" : "relative")};
  left: ${props => (props.$windowWidth >= 1000 ? "3rem" : "0")};
  margin-top: ${props => (props.$windowWidth <= 1000 ? "6rem" : "0")};
  border: none;
  height:
    ${props => (props.$windowWidth >= 1000
      ? "550px"
      : props.$windowWidth <= 550
        ? "242px"
        : "262px")};
  width:
    ${props => (props.$windowWidth >= 1000
      ? "450px"
      : props.$windowWidth <= 550
        ? "222px"
        : "262px")};
        
`;

export default HomeImg;