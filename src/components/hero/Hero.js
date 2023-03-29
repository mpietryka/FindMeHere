import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="my-12">
      <div className="hero bg-base-100 ">
        <div className="hero-content text-center">
          <div className="w-11/12 md:w-1/2">
            <h1 className="text-5xl font-bold">Hello there!</h1>
            <p className="pt-6 pb-2">
              Looking for a tool that could keep links to all your social
              account in one place?
            </p>
            <p className="py-2">
              A single link you could share with your followers, a potential
              employer of a business opportunity?
            </p>
            <p className="py-2">
              While a traditional paper business card is a thing of the past, a
              digital one could do wonders for your online presence and help you
              build a larger audience.
            </p>

            <p className="py-2">
              <span className="font-semibold">FindMeHere</span> is just that, a
              digital business card, it provides users with a single link that
              can be placed in your social media bio, personal website or
              rendered into a QR code for even easier sharing.
            </p>
            <p className="py-2 pb-4">
              <span className="font-semibold">FindMeHere</span> gives users the
              power to make their page truly theirs, and to monitor their
              viewers engagement by placing the boring, meaningless statistics
              onto easy-to-read graphs and charts.
            </p>
            <button className="btn btn-primary">
              <Link to="/pricing">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Get Started
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
