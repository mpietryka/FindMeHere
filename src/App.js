import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { PrivacyPolicy } from "./pages/privacyPolicy/PrivacyPolicy";
import { Pricing } from "./pages/pricing/Pricing";
import { TermsAndConditions } from "./pages/termsAndConditions/TermsAndConditions";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Statistics } from "./pages/statistics/Statistics";
import { UserDetail } from "./pages/userDetails/UserDetail";
import AuthProvider from "./context/auth";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:username" element={<UserDetail />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Statistics />} path="/statistics" />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
