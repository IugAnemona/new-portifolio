import { Header } from "./components/Header";
import MainContent from "./components/MainContent";
import ProjectsContainer from "./components/ProjectsContainer";
import Siderbar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {
  return (
    <div className="all-content">
      <Header />
      <div id="portfolio">
        <Siderbar></Siderbar>
        <MainContent></MainContent>
      </div>
      <div id="projects">
        <ProjectsContainer />
      </div>
    </div>
  );
}

export default App;
