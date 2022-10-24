import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer absolute bottom-0 items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>FindMeHere © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link to="/privacypolicy">
          <span>Privacy Policy</span>
        </Link>
      </div>
    </footer>
  );
};
