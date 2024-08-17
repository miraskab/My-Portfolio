import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { darkModeState } from "../../../store";
import styled from "styled-components";

const PersonalInfo = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  console.log(windowWidth)
  return (
    <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            First Name:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            Miras
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Last Name:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            Kabdygali
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Age:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            23 Years
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Nationality:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            Kazakh
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Freelancer:
          </StyledSpanSecondary>
          <span style={{ color: darkMode ? "#00ffc0" : "#3BC83B", fontWeight: "600" }}>
            Available
          </span>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Address:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            Almaty, Kazakhstan
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Phone:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            +77018800510
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Email:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            miras.kab@gmail.com
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Github:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            <a
              href="https://github.com/mkab2000"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: darkMode ? 'var(--primary-color-dark)' : 'var(--primary-color-light)' }}
            >
              My Git
            </a>
          </StyledSpanPrimary>
        </StyledListEntry>

        <StyledListEntry $windowWidth={windowWidth}>
          <StyledSpanSecondary $darkMode={darkMode}>
            Languages:
          </StyledSpanSecondary>
          <StyledSpanPrimary $darkMode={darkMode}>
            English, Kazakh, Russian
          </StyledSpanPrimary>
        </StyledListEntry>

      </ul>
    </div>
  )
}

const StyledListEntry = styled.li<{ $windowWidth: number}>`
  flex: 0 0 50%;
  max-width: 50%;
  padding-block: 20px;
  line-height: 1.2;
  text-align: left;
  display: flex;
  flex-direction: ${props => (props.$windowWidth <= 550 ? "column" : "row")};
  gap: ${props => (props.$windowWidth <= 550 ? "5px" : "0px")};

`;

const StyledSpanSecondary = styled.span<{ $darkMode: boolean }>`
  color: ${props => (props.$darkMode ? "#BBBBBB" : "#858585")};
  padding-right: 5px;
`;

const StyledSpanPrimary = styled.span<{ $darkMode: boolean }>`
  color: ${props => (props.$darkMode ? "white" : "#666666")};
  font-weight: 600;
`;

export default PersonalInfo;