import React from "react";
import { Link } from "react-router-dom";

export const PricingTables = () => {
  return (
    <div className="flex flex-col w-3/4 mx-auto lg:flex-row">
      <div className="grid flex-grow card bg-base-300 rounded-box ">
        <div className="text-3xl font-semibold p-4 text-center">Standard</div>
        <div className="text-center text-sm pb-3">Free</div>
        <div className="border-b-2 w-full border-white"></div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Up to 6 links</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Custom bio</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Custom avatar</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Shareable QR code</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-red-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>Widgets</span>
        </div>
        <div className="md:text-lg px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-red-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span>Statistics</span>
        </div>
        <div className="mx-auto my-5">
          <Link to="/register">
            <span className="btn btn-primary">Register</span>
          </Link>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow card bg-base-300 rounded-box ">
        <div className="text-3xl font-semibold p-4 text-center">Pro</div>
        <div className="text-center text-sm pb-3">??1.99 per month</div>
        <div className="border-b-2 w-full border-white"></div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Unlimited links</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Custom bio</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Custom avatars</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Shareable QR code</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Widgets</span>
        </div>
        <div className="px-4 md:px-12 py-4 text-justify flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="text-lime-600 block w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Statistics</span>
        </div>
        <div className="mx-auto my-5">
          <Link to="/register">
            <span className="btn btn-primary">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
