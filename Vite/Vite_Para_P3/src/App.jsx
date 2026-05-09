import {

  BrowserRouter,

  Routes,

  Route

} from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";

import Projects from "./pages/Projects";

import Logs from "./pages/Logs";

import Crawlers from "./pages/Crawlers";

import Settings from "./pages/Settings";

import "./styles/main.css";

function App() {

  return (

    <BrowserRouter>

      <DashboardLayout>

        <Routes>

          <Route

            path="/"

            element={<Dashboard />}

          />

          <Route

            path="/projects"

            element={<Projects />}

          />

          <Route

            path="/logs"

            element={<Logs />}

          />

          <Route

            path="/crawlers"

            element={<Crawlers />}

          />

          <Route

            path="/settings"

            element={<Settings />}

          />

        </Routes>

      </DashboardLayout>

    </BrowserRouter>

  );

}

export default App;