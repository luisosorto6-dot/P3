export default function SystemStats() {

  return (

    <div className="system-stats">

      <div className="stat-card">
        <h3>Backend</h3>
        <p className="online">Online</p>
      </div>

      <div className="stat-card">
        <h3>Crawler</h3>
        <p className="running">Running</p>
      </div>

      <div className="stat-card">
        <h3>Projects</h3>
        <p>12</p>
      </div>

      <div className="stat-card">
        <h3>Logs</h3>
        <p>248</p>
      </div>

      <div className="stat-card">
        <h3>CPU</h3>
        <p>32%</p>
      </div>

      <div className="stat-card">
        <h3>RAM</h3>
        <p>4.2GB</p>
      </div>

    </div>

  );

}