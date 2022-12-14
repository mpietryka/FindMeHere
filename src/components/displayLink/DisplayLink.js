import React from "react";

export const DisplayLink = ({ link, deleteLink }) => {
 
const deleteThis = () =>{
    deleteLink(link.uid)
}

  return (
    <div className="mx-auto w-11/12 lg:w-1/2 flex flex-row p-2">
      <button className="btn btn-primary btn-active btn-circle mt-1 cursor-auto no-animation">
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
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
          />
        </svg>
      </button>
      
      <a
        href={link.link} target="_blank" rel="noopener noreferrer" data-tip={link.link}
        className="w-full bg-gray-300 text-black font-bold rounded-md mx-1 p-3 text-center tooltip tooltip-top "
      >
        {link.platform}
      </a>

<div className="tooltip tooltip-top" data-tip="Delete Link">
      <button className="btn btn-primary btn-circle mt-1 " onClick={deleteThis}>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      </div>
    </div>
  );
};
