import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="sidebar">

      <h2 className="logo">

        Tracker

      </h2>

      <ul>

        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>

        <li>
          <Link to="/crawlers">Crawlers</Link>
        </li>

        <li>
          <Link to="/logs">Logs</Link>
        </li>

        <li>
          <Link to="/settings">Settings</Link>
        </li>

      </ul>

    </div>

  );

}