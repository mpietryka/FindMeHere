import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landingpage } from "./pages/landingpage/Landingpage";
import { Privacypolicy } from "./pages/privacypolicy/Privacypolicy";
import { Pricing } from "./pages/pricing/Pricing";
import { TermsandConditions } from "./pages/termsandconditions/TermsandConditions";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import AuthProvider from "./context/auth";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/dashboard" />
            {/* Protected routes have to go here */}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};
