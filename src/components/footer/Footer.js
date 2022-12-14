import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 p-4 bg-base-300 text-neutral-content flex flex-row justify-between w-full">
      <div className="text-xs md:text-sm">
        <p>FindMeHere © 2022</p>
      </div>
      <div className="flex flex-row text-xs md:text-sm">
        <Link to="/privacypolicy">
          <span className="mx-1 md:mx-2">Privacy Policy</span>
        </Link>
        <Link to="/termsandconditions">
          <span className="mx-1 md:mx-2">Terms and Conditions</span>
        </Link>
      </div>
    </footer>
  );
};
