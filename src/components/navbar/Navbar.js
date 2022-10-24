import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/">
          <span className="btn btn-ghost normal-case text-xl">FindMeHere</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/pricing">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Sign in
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Register
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/pricing">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Sign in
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                  Register
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
