import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Footer, Navbar } from "../../components";
import { ProfilePicture } from "../../components/profilePicture/ProfilePicture";
import { Loading } from "../loading/Loading";
import avatar from "../dashboard/generic-avatar-1.png";
import { Error404 } from "../error404/Error404";
import { ListOfLinks } from "../../components/listOfLinks/ListOfLinks";

export const UserDetail = () => {
  const [thatUser, setThatUser] = useState(null);

  const param = useParams();

  useEffect(() => {
    const getOneUser = () => {
      const q = query(
        collection(db, "users"),
        where("usernameLowerCase", "==", param.username.toLowerCase())
      );
      onSnapshot(q, (snap) => {
        if (!snap.empty) {
          const data = snap.docs[0].data();
          setThatUser(data);
          console.log(data);
        } else {
          setThatUser("");
          console.log("No documents found");
        }
      });
    };
    getOneUser();
  }, [param.username]);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="text-center mx-auto ">
        {thatUser === null ? (
          <Loading />
        ) : thatUser && thatUser.username !== "" ? (
          <div>
            <div className="mx-auto mt-4 w-11/12 lg:w-1/2 border border-gray-50 shadow-lg">
              <h1 className="text-5xl my-6 font-bold">{thatUser.username}</h1>
              <div className="mb-6">
                <ProfilePicture currentUser={thatUser} avatar={avatar} />
              </div>
            </div>
            <div className="w-11/12 lg:w-1/2 mx-auto mt-2 md:my-6 p-2 border border-gray-50 shadow-lg rounded-lg">
              <p className="font-bold text-lg text-left">Bio:</p>
              <p className="text-sm md:text-base my-4 text-justify">
                {thatUser.bio}
              </p>
            </div>
            <ListOfLinks findByUserName={thatUser} />
          </div>
        ) : (
          <div>
            <Error404 />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
