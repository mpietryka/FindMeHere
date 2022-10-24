import React from "react";
import { Footer, Navbar, Pricingtables } from "../../components";

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-16 md:my-24">
        <Pricingtables />
      </div>
      <Footer />
    </div>
  );
};
