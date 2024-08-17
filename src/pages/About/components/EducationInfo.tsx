import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { darkModeState } from "../../../store";
import styled from "styled-components";
import iconBriefcase from "../../../assets/icons/briefcase.png";

const EducationInfo = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  return (
    <div style={{ flex: "0 0 50%" }}>
      {windowWidth <= 1000 && (
        <StyledDivider/>
      )}
      <h3
        style={{
          color: darkMode ? "white" : "#666",
          fontSize: "24px",
        }}
      >
        EXPERIENCE & EDUCATION
      </h3>

      <StyledEducationContainer>
        <StyledList>
          <StyledListItem>
            <StyledIconContainer $darkMode={darkMode}>
              <img
                style={{ width: "20px", height: "20px", filter: "brightness(3)" }}
                src={iconBriefcase}
                alt="job"
              />
            </StyledIconContainer>
            <StyledDateWrapper $darkMode={darkMode}>
              2023 August - 2024 February
            </StyledDateWrapper>
            <StyledEducationContent $darkMode={darkMode}>
              Front End Developer
              <span>- Glassdome</span>
              <p>
                Developing <strong>new user-facing features</strong>,
                determining the <strong>structure and design</strong>{" "}
                of web pages/components, building <strong>reusable code</strong>,
                and collaborating with <strong>REST APIs</strong> and{" "}
                <strong>data engineering</strong>. Utilizing
                technologies such as <strong>React-Redux</strong>,{" "}
                <strong>Tanstack Query</strong>, <strong>Core UI</strong>,{" "}
                <strong>Typescript</strong>, <strong>BlueprintJS</strong>,
                and other libraries and frameworks.
              </p>
            </StyledEducationContent>
          </StyledListItem>

          <StyledListItem>
            <StyledIconContainer $darkMode={darkMode}>
              <img
                style={{ width: "20px", height: "20px", filter: "brightness(3)" }}
                src={iconBriefcase}
                alt="job"
              />
            </StyledIconContainer>
            <StyledDateWrapper $darkMode = {darkMode}>
              2023
            </StyledDateWrapper>
            <StyledEducationContent $darkMode = {darkMode}>
              Bachelor Degree
              <span>
                - KAIST
              </span>
              <p>
                Achieved a Bachelor's Degree of Science with a Major in
                Computer Science from KAIST, one of the
                premier universities in South Korea. Completed
                coursework in relevant subjects, such as Machine Learning, Linear Algebra,
                Programming Language, Introduction to Software Engineering,
                and a range of courses directly related to the field of web
                development.
              </p>
            </StyledEducationContent>
          </StyledListItem>

          <StyledListItem>
            <StyledIconContainer $darkMode = {darkMode}>
              <img
                style={{ width: "20px", height: "20px", filter: "brightness(3)" }}
                src={iconBriefcase}
                alt="job"
              />
            </StyledIconContainer>
            <StyledDateWrapper $darkMode = {darkMode}>
              2023
            </StyledDateWrapper>
            <StyledEducationContent $darkMode = {darkMode}>
              Certificates
              <span>
                - Coursera & freeCodeCamp
              </span>
              <p>
                Successfully completed the courses{" "}
                <span style={{ fontWeight: "bold" }}>
                  Responseive Web Design,
                </span>{" "}
                <span style={{ fontWeight: "bold" }}>
                  Javascript Algorithms and Data Structures,
                </span>{" "}
                and{" "}
                <span style={{ fontWeight: "bold" }}>
                  Front End Development Libraries,
                </span>{" "}
                acquiring relevant certificates.
              </p>
            </StyledEducationContent>
          </StyledListItem>
          
        </StyledList>
      </StyledEducationContainer>
    </div>
  )
}

const StyledEducationContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledListItem = styled.li`
  position: relative;
  padding: 0 20px 0 60px;
  margin: 0 0 15px;
`;

const StyledIconContainer = styled.div<{ $darkMode: boolean }>`
  margin-top: 2px;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  right: 0;
  line-height: 40px;
  text-align: center;
  z-index: 1;
  border-radius: 50%;
  background-color: ${props => (props.$darkMode ? "var(--primary-color-dark)" :"var(--primary-color-light)")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDateWrapper = styled.span<{ $darkMode: boolean }>`
  color: ${props => (props.$darkMode ? "#BDBDBD" : "#898989")};
  background-color: ${props => (props.$darkMode ? "#212121" : "#eee")};
  font-size: 12px;
  padding: 1px 10px;
  display: block;
  border-radius: 20px;
  font-weight: 600;
  opacity: 0.8;
  width: fit-content;
  user-select: none;
`;

const StyledEducationContent = styled.h5<{ $darkMode: boolean }>`
  color: ${props => (props.$darkMode ? "white" : "#666")};
  font-size: 18px;
  margin: 4px 0 10px 0;
  text-align: start;

  > span {
    opacity: 0.8;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    padding-left: 6px;
    color: ${props => (props.$darkMode ? "#C5C5C5" : "#666")};
  }

  > p {
    color: ${props => (props.$darkMode ? "#E1E1E1" : "#666")};
    margin-top: 0.5rem;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  }
`;

export const StyledDivider = styled.hr`
  border-top: 1px solid #333;
  margin: 70px auto 55px;
  width: 40%;
  opacity: 0.1;

`;

export default EducationInfo;
