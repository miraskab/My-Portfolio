import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { darkModeState, ProjectInfo } from "../../../store";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import ProjectDetailsItem from "./ProjectDetailsItem";
import projectIcon from "../../../assets/icons/project.png"
import languagesIcon from "../../../assets/icons/languages.png"
import gitIcon from "../../../assets/icons/git.png"
import browserIcon from "../../../assets/icons/browser.png"
import closeIcon from "../../../assets/icons/close.png"

interface ProjectModalProps {
  showProject: boolean;
  myProject: ProjectInfo;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ showProject, myProject, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (showProject) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showProject]);

  if (!showProject) {
    return null;
  }
  
  return (
    <Overlay show={showProject}>
      <StyledContainer ref={modalRef} $darkMode={darkMode}>
        <h2>{myProject.name}</h2>
        <StyledDetailsSection>
          <ProjectDetailsItem isLink={false} img={projectIcon} itemType="Project" itemName={myProject.type} />
          <ProjectDetailsItem isLink={false} img={languagesIcon} itemType="Languages" itemName={myProject.langs} />
          <ProjectDetailsItem isLink={true} img={gitIcon} itemType="Code" itemName="Repository" link={myProject.repos} />
          <ProjectDetailsItem isLink={true} img={browserIcon} itemType="Preview" itemName={myProject.name} link={myProject.prev} />

        </StyledDetailsSection>
        <StyledImageContainer>
          <img
            src={myProject.image}
            alt="projectIMG"
            style={{
              borderRadius: "1rem",
              height: "auto",
              maxHeight: "400px",
              maxWidth: "95%",
            }}
          />
        </StyledImageContainer>
        <StyledCloseButton windowWidth={windowWidth} onClick={onClose}>
          <img
            src={closeIcon}
            alt="closeIcon"
            style={{
              width: windowWidth <= 550 ? "35px" : "50px",
              height: windowWidth <= 550 ? "35px" : "50px",
            }}
          />
        </StyledCloseButton>
      </StyledContainer>
    </Overlay>
  );
};

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 99;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div<{ $darkMode: boolean }>`
  max-width: 700px;
  width: 85%;
  border-radius: 1rem;
  padding: 2rem;
  z-index: 100;
  background-color: ${({ $darkMode }) => ($darkMode ? "#252525" : "#F5F5F5")};
  position: relative;
  text-align: center;
  color: ${({$darkMode}) => ($darkMode ? "var(--primary-color-dark)" : "var(--primary-color-light)")};
`;

const StyledDetailsSection = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C1D0DB;
  border-radius: 1rem;
  padding: 1rem;
`;

const StyledCloseButton = styled.button<{ windowWidth: number }>`
  position: absolute;
  top: ${({ windowWidth }) => (windowWidth <= 550 ? "0px" : "8px")};
  right: ${({ windowWidth }) => (windowWidth <= 550 ? "0px" : "8px")};
  background-color: transparent;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default ProjectModal;
