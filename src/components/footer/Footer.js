import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer fixed bottom-0 items-center p-4 bg-neutral text-neutral-content flex flex-row justify-between">
      <div className="text-xs md:text-sm items-center grid-flow-col">
        <p>FindMeHere © 2022</p>
      </div>
      <div className="">
        <Link to="/privacypolicy">
          <span className="text-xs md:text-sm">Privacy Policy</span>
        </Link>
      </div>
    </footer>
  );
};
