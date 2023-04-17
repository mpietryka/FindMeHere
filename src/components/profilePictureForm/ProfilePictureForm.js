import React from "react";

export const ProfilePictureForm = ({
  currentUser,
  image,
  avatar,
  handleImageChange,
  handleSubmit,
}) => {
  return (
    <div className="mx-auto w-full px-4 pb-4 ">
      <figure className="py-5 ">
        {currentUser && !currentUser.profilePicture && !image ? (
          <img
            className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
            src={avatar}
            alt="avatar"
          />
        ) : !image ? (
          <img
            className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
            src={currentUser.profilePicture}
            alt="profilePic"
          />
        ) : (
          <img
            className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
            src={image}
            alt="profilePic"
          />
        )}
      </figure>
      <div>
        <input
          id="file"
          type="file"
          className="hidden"
          accept=".jpg,.jpeg,.png"
          onChange={handleImageChange}
        />
        <div className="mx-auto w-11/12 md:w-3/4">
          <div className="mb-3 text-white ">
            <label
              className="btn btn-primary mt-2 flex w-full cursor-pointer flex-row justify-center rounded-md px-4 py-3 text-center text-white"
              htmlFor="file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="ml-1">Choose a photo</span>
            </label>
          </div>
          <button
            className="btn btn-primary w-full rounded-md text-white"
            onClick={handleSubmit}
          >
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
