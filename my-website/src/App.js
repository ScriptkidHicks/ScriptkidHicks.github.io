import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";

import MissionStatement from "./Pages/MissionStatement";
import LandingPage from "./Pages/LandingPage";
import AneurysmVisItPage from "./Pages/AneurysmVisItPage";
import MyFitnessFiendPage from "./Pages/MyFitnessFiendPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectFreelancerPage from "./Pages/ProjectFreelancerPage";
import TravelerPage from "./Pages/TravelerPage";
import Elk from "./Pages/Elk";

function App() {
  return (
    <Mainbody id="checking-in">
      <HeaderBar />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/MissionStatement" element={<MissionStatement />} />
        <Route path="/AneurysmVisIt" element={<AneurysmVisItPage />} />
        <Route path="/MyFitnessFiend" element={<MyFitnessFiendPage />} />
        <Route path="/elk" element={<Elk />} />
        <Route path="/ProjectFreelancer" element={<ProjectFreelancerPage />} />
        <Route path="/Traveler" element={<TravelerPage />} />
      </Routes>
      <FooterBar />
    </Mainbody>
  );
}

export default App;

const Mainbody = styled.div``;
