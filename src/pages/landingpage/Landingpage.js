import React from "react";
import { Footer, Navbar, Hero, Pricingtables } from "../../components";

export const Landingpage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className=" mb-16 md:my-24">
        <Hero />
        <Pricingtables />
      </div>
      <Footer />
    </div>
  );
};
