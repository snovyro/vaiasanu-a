import { React } from "react";
import LandingHome from "./container/LandingHome";
import NavbarHeader from "./component/NavbarHeader";
import AboutProfile from "./container/AboutProfile";
import Projects from "./container/Projects";
import Copyright from "./component/Copyright";

import "./App.css";
import WorkExperience from "./container/WorkExperience";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-tl from-indigo-400 via-purple-300 to-pink-200">
        <NavbarHeader />
        <LandingHome />
        <AboutProfile />
        <WorkExperience />
        <Projects />
        <Copyright />
      </div>
    </>
  );
};

export default App;
