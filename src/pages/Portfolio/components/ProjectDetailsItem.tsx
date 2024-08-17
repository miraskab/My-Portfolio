import styled from "styled-components";
import { darkModeState } from "../../../store";
import { useRecoilState } from "recoil";

interface DetailsItemProps {
  isLink: boolean;
  img: string;
  itemType: string;
  itemName: string;
  link?: string;
}

const ProjectDetailsItem: React.FC<DetailsItemProps> = ({ isLink, img, itemType, itemName, link }) => {
  const [darkMode] = useRecoilState(darkModeState);

  return (
    <StyledDetailItem>
      <StyledIcon
        alt="projectName"
        src={img}
        $darkMode={darkMode}
      />
      <StyledDetailText $darkMode={darkMode}>{itemType}:</StyledDetailText>
      {
        isLink ?
          <StyledDetailValue $darkMode={darkMode}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {itemName}
            </a>
          </StyledDetailValue>
        :
          <StyledDetailValue $darkMode={darkMode}>{itemName}</StyledDetailValue>
      }
    </StyledDetailItem>
  )
}

const StyledIcon = styled.img<{ $darkMode: boolean }>`
  width: 15px;
  height: 15px;
  margin-right: 0.5rem;
  filter: ${({ $darkMode }) => ($darkMode ? "brightness(2)" : "brightness(1)")};
`
const StyledDetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  flex: 0 0 50%;
  height: 35px;
`;

const StyledDetailText = styled.p<{ $darkMode: boolean }>`
  margin-right: 0.5rem;
  color: ${({ $darkMode }) => ($darkMode ? "white" : "#898989")};
`;

const StyledDetailValue = styled.span<{ $darkMode: boolean }>`
  color: ${({ $darkMode }) => ($darkMode ? "white" : "#666666")};
  font-weight: 600;
  width: max-content;

  a {
    color: ${({ $darkMode }) => ($darkMode ? "var(--primary-color-dark)" : "var(--primary-color-light)")};
    width: max-content;
    filter: brightness(0.92);
  }
`;

export default ProjectDetailsItem