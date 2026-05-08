import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProjectCard from "./components/ProjectCard";
import LogsPanel from "./components/LogsPanel";

import "./styles/main.css";

function App() {

  return (

    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <div className="cards">

          <ProjectCard />
          <ProjectCard />
          <ProjectCard />

        </div>

        <LogsPanel />

      </div>

    </div>

  );

}

export default App;