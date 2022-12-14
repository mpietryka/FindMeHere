import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getDocs,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { Footer, Navbar } from "../../components";
import { ProfilePicture } from "../../components/profilePicture/ProfilePicture";
import { Loading } from "../loading/Loading";
import avatar from "../dashboard/generic-avatar-1.png";
import { Error404 } from "../error404/Error404";
import { DisplayLink } from "../../components/displayLink/DisplayLink";

export const UserDetail = () => {
  const [users, setUsers] = useState([]);
  const param = useParams();
  const usersCollectionRef = collection(db, "users");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  let findByUserName = users.find(
    (item) => item.username.toLowerCase() === param.username.toLowerCase()
  );

  if (!findByUserName) {
    findByUserName = "404";
  }

  useEffect(() => {
    const getLinks = async () => {
      const linkRef = collection(db, "users", findByUserName?.uid, "links");
      const q = query(linkRef);

      onSnapshot(q, (querySnapshot) => {
        let links = [];
        querySnapshot.forEach((doc) => {
          links.push(doc.data());
        });
        setLinks(links);
      });
    };
    getLinks();
  }, [findByUserName]);

  return (
    <div>
      <Navbar />
      <div className="text-center mx-auto">
        {!findByUserName ? (
          <Loading />
        ) : findByUserName === "404" ? (
          <div>
            {console.log(findByUserName)}
            <Error404 />
          </div>
        ) : (
          <div>
            <h1 className="text-5xl my-6 font-bold">
              {findByUserName.username}
            </h1>
            <ProfilePicture currentUser={findByUserName} avatar={avatar} />
          </div>
        )}

        <div className="mb-16">
          {links
            ? links.map((link, i) => <DisplayLink key={i} link={link} />)
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};
