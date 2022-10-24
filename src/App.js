import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Landingpage } from "./pages/landingpage/Landingpage";
import { Privacypolicy } from "./pages/privacypolicy/Privacypolicy";
import { Pricing } from "./pages/pricing/Pricing";
import { TermsandConditions } from "./pages/termsandconditions/TermsandConditions";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
        </Routes>
      </Router>
    </div>
  );
};
