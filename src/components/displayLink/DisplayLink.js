import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import moment from "moment";

export const DisplayLink = ({ currentUser, link, deleteLink }) => {
  const deleteThis = () => {
    deleteLink(link.uid);
  };

  let date = moment(new Date()).format("DD/MM/YYYY");

  const click = async () => {
    await addDoc(collection(db, "users", currentUser.uid, "clicks"), {
      timeStamp: date,
      platform: link.platform,
      link: link.link,
    });
  };

  return (
    <div className="mx-auto mt-2 w-full flex flex-row p-2">
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        data-tip={link.link}
        className="w-full bg-gray-200 text-black font-bold rounded-xl mx-1 p-3 text-center tooltip tooltip-top"
        onClick={click}
      >
        {link.platform}
      </a>
      <div className="tooltip tooltip-top" data-tip="Delete Link">
        <button
          className="btn btn-primary transition ease-in-out hover:btn-error btn-circle btn-sm mt-2 "
          onClick={deleteThis}
        >
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
