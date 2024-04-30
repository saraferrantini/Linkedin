import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import "../src/assets/css/style.css";
import Login from "./components/Login";
import ExperiencesPage from "./components/ExperiencesPage";
import HomeAndFooterDx from "./components/HomeAndFooterDx";
import OtherUserProf from "./components/OtherUserProf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/experiences/:userId" element={<ExperiencesPage />} />
        <Route path="/home" element={<HomeAndFooterDx />} />
        <Route path="/profile/:userId" element={<OtherUserProf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
