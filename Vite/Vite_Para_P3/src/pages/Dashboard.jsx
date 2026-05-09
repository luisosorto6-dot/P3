import Topbar from "../components/Topbar";

import SystemStats from "../components/SystemStats";

import Projectcard from "../components/Projectcard";

import LogsPanel from "../components/LogsPanel";

export default function Dashboard() {

  return (

    <>

      <Topbar />

      <SystemStats />

      <div className="dashboard-content">

        <div className="projects-section">

          <h2 className="section-title">

            Active Projects

          </h2>

          <div className="cards-grid">

            <Projectcard />
            <Projectcard />
            <Projectcard />
            <Projectcard />

          </div>

        </div>

        <div className="logs-section">

          <LogsPanel />

        </div>

      </div>

    </>

  );

}