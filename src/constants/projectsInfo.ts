// import newsProject from "../assets/photos/News_homepage.jpg"
// import toDoListProject from "../assets/photos/ToDo_list.jpg"
// import tournamentProject from "../assets/photos/Tournament.jpg"
// import tipCalculatorProject from "../assets/photos/tipCalc.jpg"
// import ratingProject from "../assets/photos/rate.jpg"
// import nftProject from "../assets/photos/nft.jpg"
// import componImg from "../assets/photos/compon.jpg"
import qrImg from "../assets/photos/works-QR.jpg"
import adviceImg from "../assets/photos/works-advice.jpg"
// import gridProject from "../assets/photos/grid.jpg"
import { ProjectInfo } from "../store"
import resultsSummaryImg from "../assets/photos/works-resultsSummary.png"
import minesweeperImg from "../assets/photos/works-minesweeper.png"
import guideImg from "../assets/photos/works-guide.png"
import ageCalculatorImg from "../assets/photos/works-ageCalculator.png"
import calculatorImg from "../assets/photos/works-calculator.png"
import portfolioImg from "../assets/photos/works-portfolio.png"
import messageBoardImg from "../assets/photos/works-messageBoard.png"


export const projectsInfo: Record<string, ProjectInfo> = {
  portfolio: {
    projName: "portfolio",
    name: "Previous Portfolio",
    image: portfolioImg,
    type: "Web Page",
    langs: "HTML, CSS, JS",
    repos: "https://github.com/mkab2000/portfolio",
    prev: "https://mkab2000.github.io/portfolio/",
    description: "Previous portfolio.",
  },
  messageBoard: {
    projName: "messageBoard",
    name: "Interactive Message Board",
    image: messageBoardImg,
    type: "React App",
    langs: "Typescript, CSS",
    repos: "https://github.com/mkab2000/realtime-messageboard/tree/master",
    prev: "https://realtime-messageboard.vercel.app",
    description: "Interactive messageboard, unfortunately works no more, due to unsupported API.",
  },
  calculator: {
    projName: "calculator",
    name: "Calculator",
    image: calculatorImg,
    type: "Web App",
    langs: "HTML, CSS, JS",
    repos: "https://github.com/mkab2000/calculator",
    prev: "https://mkab2000.github.io/calculator/",
    description: "A fully functional calculator, with 3 different theme choices.",
  },
  ageCalculator: {
    projName: "ageCalculator",
    name: "Age Calculator",
    image: ageCalculatorImg,
    type: "Web Component",
    langs: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/Age-Calculator",
    prev: "https://mkab2000.github.io/Age-Calculator/",
    description: "An app that calculates exact amount of time since one's birthday.",
  },
  guide: {
    projName: "guide",
    name: "Interactive Guide",
    image: guideImg,
    type: "Web Page",
    langs: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/kokomi",
    prev: "https://mkab2000.github.io/kokomi/",
    description: "An interactive web-page guide for a character from a videogame.",
  },
  resultsSummary: {
    projName: "resultsSummary",
    name: "Results Summary",
    image: resultsSummaryImg,
    type: "Web Component",
    langs: "HTML, CSS",
    repos:
      "https://github.com/mkab2000/Result-Summary",
    prev: "https://mkab2000.github.io/Result-Summary/",
    description: "A practice component for operations with flexbox.",
  },
  QR: {
    projName: "QR",
    name: "QR Code Component",
    image: qrImg,
    type: "Web Component",
    langs: "HTML, CSS",
    repos: "https://github.com/mkab2000/QR-Code",
    prev: "https://mkab2000.github.io/QR-Code/",
    description: "A practice component for operations with flexbox.",
  },
  advice: {
    projName: "advice",
    name: "Advice App",
    image: adviceImg,
    type: "Web Component",
    langs: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/Advice-Generator",
    prev: "https://mkab2000.github.io/Advice-Generator/",
    description: "An app that uses a 3rd party API to generate random advice.",
  },
  minesweeper: {
    projName: "minesweeper",
    name: "Minesweeper",
    image: minesweeperImg,
    type: "Web Page",
    langs: "HTML, CSS, JS",
    repos:
      "https://github.com/mkab2000/minesweeper",
    prev: "https://mkab2000.github.io/minesweeper/",
    description: "A fully functional rendition of a popular game with a minor coloring scheme twist.",
  },
};