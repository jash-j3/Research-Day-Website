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
      <Route path="Registration" element={<Registration />} />
      <Route path="Sponsorship" element={<Sponsorship />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
