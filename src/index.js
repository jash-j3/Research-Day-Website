import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Cover from "./Cover";
import Navbar from "./Navbar";
import About from "./About";
import Events from "./Events";
import Footer from "./Footer";
import Sponsorship from "./Sponsorship";
import Registration from "./Registration";
import Aboutnav from "./Aboutnav";
import Schedule from "./Schedule";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<App />} />
      <Route path="Aboutnav" element={<Aboutnav />} />
      <Route path="Schedule" element={<Schedule />} />
      <Route path="Registration" element={<Registration />} />
      <Route path="Sponsorship" element={<Sponsorship />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
