import React from "react";
import { Footer, Navbar, PricingTables } from "../../components";

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-12 mt-12 text-center">
        <h1 className="text-5xl mb-6 font-bold">Choose your plan</h1>
        <p>
          Choose a plan that suits you best, try it out for free and upgrade
          later for the most advanced features.
        </p>
      </div>
      <div className="mb-16 mt-4 md:my-8">
        <PricingTables />
      </div>
      <Footer />
    </div>
  );
};
