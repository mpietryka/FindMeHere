import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import moment from "moment";

export const DisplayLink2 = ({ currentUser, link }) => {
  const click = async () => {
    let date = moment(new Date()).format("DD/MM/YYYY");

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
        className="w-full bg-gray-200 text-black font-bold rounded-xl mx-1 p-3 text-center tooltip tooltip-top "
        onClick={click}
      >
        {link.platform}
      </a>
      <div className="tooltip tooltip-top" data-tip="Delete Link"></div>
    </div>
  );
};
