import React from "react";
import { Footer, Navbar, Hero } from "../../components";

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mb-16 md:my-24">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};
