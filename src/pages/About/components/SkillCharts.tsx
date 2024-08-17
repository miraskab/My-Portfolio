import { useRecoilState } from "recoil";
import useWindowWidth from "../../../components/window-width-hook";
import { skillsData } from "../../../constants/skillsData";
import Chart from "react-apexcharts";
import { darkModeState } from "../../../store";
import { StyledDivider } from "./EducationInfo";
import styled from 'styled-components';



const SkillCharts = () => {
  const [darkMode] = useRecoilState(darkModeState);
  const windowWidth = useWindowWidth();
  
  const chartOptions = {
    barSize: windowWidth <= 860 ? "140" : "185",
    labels: skillsData.map((data) => data.label),
    series: skillsData.map((data) => data.percentage),
    colors: Array(8).fill(darkMode ? "var(--primary-color-dark)" : "var(--primary-color-light)"),
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "60%",
          background: "transparent",
        },
        dataLabels: {
          name: {
            fontSize: "16px",
            color: "transparent",
            offsetY: 50,
          },
          value: {
            fontSize: "20px",
            color: darkMode ? "white" : "#666",
            offsetY: -10,
          },
        },
      },
    },
  };

  return (
    <>
      <StyledDivider/>
      
      <StyledWrapper windowWidth={windowWidth}>
        <TitleWrapper>
          <Title $darkMode={darkMode}>My Skills</Title>
        </TitleWrapper>
        <ChartWrapper $windowWidth={windowWidth} $darkMode={darkMode}>
          {skillsData.map((data, index) => (
            <div key={index}>
              <Chart
                options={chartOptions}
                series={[data.percentage]}
                type="radialBar"
                height={chartOptions.barSize}
              />
              <h3>{data.label}</h3>
            </div>
          ))}
        </ChartWrapper>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div<{ windowWidth: number }>`
  display: flex;
  flex-direction: column;
  margin: ${({ windowWidth }) =>
  windowWidth <= 550 ? "0 5% 20px 5%" : "0 10% 20px 10%"};
  margin-bottom: 60px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 10% 20px 10%;
`;

const Title = styled.h2<{ $darkMode: boolean }>`
  font-size: 26px;
  color: ${({ $darkMode }) => ($darkMode ? "white" : "#666")};
`;

const ChartWrapper = styled.div<{ $windowWidth: number; $darkMode: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${({ $windowWidth: windowWidth }) => (windowWidth <= 800 ? "150px" : "auto")};

    h3 {
      color: ${({ $darkMode }) => ($darkMode ? "white" : "#666")};
    }
  }
`;

export default SkillCharts;
