import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import Sponsorship from "./Sponsorship";
import Registration from "./Registration";
import Aboutnav from "./Aboutnav";
import Schedule from "./Schedule";
import Team from "./Team";
import Panel from "./Panel";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Seminars from "./Seminars";
import Expert from "./Expert";
import Visitor from "./Visitor";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<App />} />
      <Route path="Competitions" element={<Aboutnav />} />
      <Route path="Panel" element={<Panel />} />
      <Route path="Seminars" element={<Seminars />} />
      <Route path="Talks" element={<Expert />} />
      <Route path="Schedule" element={<Schedule />} />
      <Route path="Registration" element={<Registration />} />
      <Route path="Visitor" element={<Visitor />} />
      <Route path="Sponsorship" element={<Sponsorship />} />
      <Route path="Team" element={<Team />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
