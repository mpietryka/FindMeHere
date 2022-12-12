import React, { useContext, useState, useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { AddLinkForm } from "../../components/addLinkForm/AddLinkForm";
import { DisplayLink } from "../../components/displayLink/DisplayLink";
import { Loading } from "../loading/Loading";
import { AuthContext } from "../../context/auth";
import {
  doc,
  getDoc,
  query,
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { db } from "../../firebase-config";
import avatar from "./generic-avatar-1.png";

const linkAdded = () => {
  toast.success("Link Added !", {
    position: toast.POSITION.TOP_RIGHT,
    draggable: true,
    theme : "dark",
    autoClose: 1500,
    hideProgressBar: true,
  });
}

const linkRemoved = () => {
  toast.success("Link Removed !", {
    position: toast.POSITION.TOP_RIGHT,
    draggable: true,
    theme : "dark",
    autoClose: 1500,
    hideProgressBar: true,
  });
}

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setCurrentUser(docSnap.data());
    };
    getUser();
  }, []);

  useEffect(() => {
    const getLinks = () => {
      const uid = user.uid;
      const linkRef = collection(db, "users", uid, "links");
      const q = query(linkRef);

      //retrieve chat messages in real time
      onSnapshot(q, (querySnapshot) => {
        let links = [];
        //populate the temporary msgs array with the data from the database
        querySnapshot.forEach((doc) => {
          links.push(doc.data());
        });
        //assign temporary array to the main msgs state
        setLinks(links);
      });
      console.log(links);
    };
    getLinks();
  }, []);

  const addLink = async (values) => {
    const newLink = await addDoc(
      collection(db, "users", currentUser.uid, "links"),
      {
        uid: "",
        platform: values.platform,
        link: "https://" + values.link,
      }
    );
    await updateDoc(newLink, {
      uid: newLink.id,
    });
    linkAdded()
    console.log(values);
  };

  const deleteLink = async (linkID) => {
    const linkRef = doc(db, "users", currentUser.uid, "links", linkID);

    await deleteDoc(linkRef);
    linkRemoved()
  };

  return (
    <div>
      <Navbar />
      <div className="text-center mx-auto">
        {currentUser ? (
          <h1 className="text-5xl mb-6 font-bold"> {currentUser.username}</h1>
        ) : (
          <Loading />
        )}
        <img
          className="mx-auto rounded-full object-cover h-64 w-64 lg:h-72 lg:w-72 mask mask-circle"
          src={avatar}
          alt="profilePic"
        />
      </div>
      <div className="mb-16">
        {links.length
          ? links.map((link, i) => (
              <DisplayLink key={i} link={link} deleteLink={deleteLink} />
            ))
          : null}
        <AddLinkForm addLink={addLink} />
      </div>
      <Footer />
      <ToastContainer
      pauseOnFocusLoss={false}
      />
    </div>
  );
};
