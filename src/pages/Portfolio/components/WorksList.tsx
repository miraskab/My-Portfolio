import useWindowWidth from "../../../components/window-width-hook";
import { projectsInfo } from "../../../constants/projectsInfo";
import styled from "styled-components";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { darkModeState } from "../../../store";

const WorksList = () => {
  const windowWidth = useWindowWidth();
  const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({});
  const [darkMode] = useRecoilState(darkModeState);

  const toggleModal = (projName: string) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [projName]: !prevStates[projName],
    }));
  };

  return (
    <StyledContainer>
      <StyledWrapper $windowWidth={windowWidth}>
        {Object.values(projectsInfo).map((myProject) => (
          <div key={myProject.name}>
            <StyledProjectWrapper onClick={() => toggleModal(myProject.projName)}>
              <StyledProjectImage alt="project" src={myProject.image} />
              
              <StyledProjectInfo $darkMode={darkMode}>
                <StyledProjectName>{myProject.name}</StyledProjectName>
                <StyledProjectDescription>{myProject.description}</StyledProjectDescription>
              </StyledProjectInfo>

            </StyledProjectWrapper>
            <ProjectModal 
              showProject={!!modalStates[myProject.projName]} 
              myProject={myProject} 
              onClose={() => toggleModal(myProject.projName)} 
            />
          </div>
        ))}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  text-align: center;
`;

const StyledWrapper = styled.div<{ $windowWidth: number }>`
  display: grid;
  grid-template-columns: ${({ $windowWidth }) =>
    $windowWidth <= 550
      ? "1fr"
      : $windowWidth <= 1000
      ? "repeat(2, 1fr)"
      : "repeat(3, 1fr)"};
  grid-gap: 30px;
  gap: 30px;
  /* padding-bottom: 60px; */
  /* width: 100%; */
  height: 100%;
  border-radius: 1rem;
  /* padding: 1rem 10%; */
  padding: ${props => (props.$windowWidth <= 1000 ? "1rem 10% 70px" : "1rem 10%")};
`;

const StyledProjectInfo = styled.h3<{ $darkMode: boolean }>`
  position: absolute;
  /* top: 50%; */
  left: 0;
  bottom: 0;
  overflow: hidden;
  height: 0;
  width: 100%;
  /* transform: translate(-50%, -50%); */
  /* background-color: ${({ $darkMode }) => ($darkMode ? "var(--primary-color-dark)" : "var(--primary-color-light)")}; */
  background: ${({ $darkMode }) =>
    $darkMode
      ? "linear-gradient(rgba(0, 0, 0, 0.98), var(--primary-color-dark))"
      : "linear-gradient(rgba(198, 208, 218, 0.98), var(--primary-color-light))"};
      /* : "linear-gradient(rgba(220, 220, 220, 0.98) 0%, rgba(200, 200, 200, 0.98) 10%, var(--primary-color-light))"}; */
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  font-size: 18px;
  z-index: 0;
`;

const StyledProjectName = styled.span`
  position: relative;
  transition: 0.5s;
  margin-bottom: 4px;
`;

const StyledProjectDescription = styled.span`
  position: relative;
  transition: 0.5s;
  font-size: 14px;
  font-weight: 100;
  margin: 15px;
`;

const StyledProjectWrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1d0db;
  border-radius: 1rem;
  user-select: none;

  &:hover ${StyledProjectInfo} {
    visibility: visible;
    opacity: 1;
    height: 100%;

  }
`;

const StyledProjectImage = styled.img`
  border-radius: 1rem;
  height: 90%;
  width: auto;
  max-width: 95%;
`;

export default WorksList;
