import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
export const Bio = ({ currentUser }) => {
  const [bio, setBio] = useState(currentUser.bio);

  const handleSubmit = () => {
    const userRef = doc(db, "users", currentUser.uid);
    const updateBio = async () => {
      await updateDoc(userRef, { bio: bio });
    };
    updateBio();
  };

  return (
    <div className="w-11/12 lg:w-1/2 mx-auto mt-2 md:my-6 p-2 border border-gray-50 shadow-lg rounded-lg">
      <div className="w-full flex justify-between">
        <p className="font-bold text-lg">Bio:</p>
        <label
          htmlFor="my-modal-5"
          className="rounded-full btn btn-circle btn-sm btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>
        </label>

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-10/12 max-w-5xl">
            <h3 className="font-bold text-base md:text-lg">Edit Bio:</h3>
            <textarea
              className="textarea h-36 w-full mt-2 mx-1 rounded-md border border-gray-400 px-3 transition 
    ease-in-out hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Bio"
            ></textarea>
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                onClick={handleSubmit}
                className="btn btn-primary rounded-lg"
              >
                Done
              </label>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base my-4 text-justify">{bio}</p>
    </div>
  );
};
