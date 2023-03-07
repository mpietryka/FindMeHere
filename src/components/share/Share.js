import React from "react";
import { QRCodeSVG } from "qrcode.react";

export const Share = ({ copied, currentUser }) => {
  let username = currentUser.username;

  const copyURL = () => {
    navigator.clipboard.writeText("localhost:3000/" + username);
    copied();
  };

  return (
    <div className="my-4 w-full mx-auto text-center">
      <label
        htmlFor="my-modal1"
        className="btn btn-primary btn-sm text-white rounded-lg"
      >
        Share Profile
      </label>
      <input type="checkbox" id="my-modal1" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box w-3/4 ">
          <h3 className="font-bold text-2xl">
            Share your profile with others!
          </h3>
          <div className="mt-4">
            <input
              type="text"
              className="mt-2 mx-1 h-4 w-3/5 rounded-md border border-gray-400 px-3 py-6 transition 
    ease-in-out text-black bg-gray-300 hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary"
              value={"localhost:3000/" + username}
              readOnly
            />
            <button onClick={copyURL} className="btn btn-primary rounded-lg">
              Copy
            </button>

            <div className="flex justify-center my-4 w-full mx-auto">
              <QRCodeSVG
                value={"localhost:3000/" + username}
                size={256}
                fgColor={"#ffffff"}
                bgColor={"#000000"}
                level={"L"}
                includeMargin={false}
              />
            </div>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal1"
              className="btn btn-primary mx-auto rounded-lg"
            >
              Done
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
