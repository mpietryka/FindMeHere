import React from "react";

export const Error404 = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="">
          <h1 className="text-5xl mb-6 font-bold">
            {":( "}This user doesn't exist, check your url
          </h1>
        </div>
      </div>
    </div>
  );
};
