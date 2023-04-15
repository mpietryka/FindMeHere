/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <div className="navbar bg-base-300">
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
                <li className="dropdown dropdown-end">
                  <div>
                    <div>
                      <span
                        tabIndex={0}
                        className="mx-4 opacity-80 transition-opacity hover:opacity-100"
                      >
                        My Account
                      </span>
                      <ul
                        tabIndex={0}
                        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                      >
                        <li>
                          <Link className="w-full rounded-md" to="/dashboard">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>

                            <span>My Account</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="w-full rounded-md" to="/Statistics">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                              />
                            </svg>

                            <span>Statistics</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                  <Link to="/statistics">
                    <span className="mx-4 opacity-80 transition-opacity hover:opacity-100">
                      Statistics
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
