import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../../consts";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import "../../styles/style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "../MainLayout/PreLoader/Pre";
import ScrollToTop from "../../utils/ScrollToTop";
import About from "../pages/About/About";
import ResumeNew from "../pages/Resume/Resume";

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <MainLayout>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTop />
          <Routes>
            <Route path={routes.ROOT} element={<Home />} />
            <Route path={routes.ABOUT} element={<About />} />
            <Route path={routes.RESUME} element={<ResumeNew />} />
            <Route
              path={routes.OTHER}
              element={<Navigate to={routes.ROOT} />}
            />
          </Routes>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
