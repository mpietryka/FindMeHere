import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase-config";
import { DisplayLink2 } from "../displayLink2/DisplayLink2";

export const ListOfLinks = ({ findByUserName }) => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const getLinks = async () => {
      const linkRef = collection(db, "users", findByUserName.uid, "links");
      const q = query(linkRef);

      onSnapshot(q, (querySnapshot) => {
        let links = [];
        querySnapshot.forEach((doc) => {
          links.push(doc.data());
        });
        setLinks(links);
      });
    };
    if (findByUserName) {
      getLinks();
    }
  }, [findByUserName]);

  return (
    <div>
      <div className="mb-16 border border-gray-50 shadow-lg w-11/12 lg:w-1/2 mx-auto">
        {!links && links.length < 0
          ? null
          : links.map((link, i) => (
              <DisplayLink2 currentUser={findByUserName} key={i} link={link} />
            ))}
      </div>
    </div>
  );
};
