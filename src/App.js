import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Landingpage } from "./pages/landingpage/Landingpage";
import { Privacypolicy } from "./pages/privacypolicy/Privacypolicy";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
        </Routes>
      </Router>
    </div>
  );
};
