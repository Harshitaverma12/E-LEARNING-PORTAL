import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login-Signup/Login";
import Header from "./Components/Common/Header";
import Landing from "./Components/Common/Landing";
import SidebarDashboard from "./Components/Sidebar/SidebarDashboard";
import SidebarVideoDashboard from "./Components/SidebarVideo/SidebarVideoDashboard";
import SidebarHtmlDashboard from "./Components/SidebarHtml/SidebarHtmlDashboard";
import SignUp from "./Components/Login-Signup/SignUp";
import FirstPageContent from "./Components/ContentProvider/FirstPageContent";
function App() {
  return (
    <>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/signUp" ? (
        <Header />
      ) : null}{" "}
      <Router>
        <Routes>
          <Route exact path="/home" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<SidebarDashboard />} />
          <Route
            exact
            path="/dashboardvideo"
            element={<SidebarVideoDashboard />}
          />
          <Route
            exact
            path="/dashboardhtml"
            element={<SidebarHtmlDashboard />}
          />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/first" element={<FirstPageContent />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
