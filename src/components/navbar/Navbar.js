import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../../context/auth";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleLogout = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isLoggedIn: false,
    });
    await signOut(auth);
    navigate("/");
  };
  return (
    <div className="navbar bg-base-200">
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
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      My Account
                    </span>
                  </Link>
                </li>
                <li>
                  <span
                    className="mx-4 opacity-80 transition-opacity hover:opacity-100"
                    onClick={handleLogout}
                  >
                    Log out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      Sign-in
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      Register
                    </span>
                  </Link>
                </li>
              </>
            )}
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
            {user ? (
              <>
                <li>
                  <Link to="/dashboard">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      My Account
                    </span>
                  </Link>
                </li>
                <li>
                  <span
                    className="mx-4 opacity-80 transition-opacity hover:opacity-100"
                    onClick={handleLogout}
                  >
                    Log out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      Sign-in
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      Register
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
