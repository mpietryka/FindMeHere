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
  deleteDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase-config";
import avatar from "./generic-avatar-1.png";
import { ProfilePicture } from "../../components/profilePicture/ProfilePicture";
import { Share } from "../../components/share/Share";
import { Bio } from "../../components/bio/Bio";

const linkAdded = () => {
  toast.success("Link Added !", {
    position: toast.POSITION.TOP_RIGHT,
    draggable: true,
    autoClose: 1500,
    hideProgressBar: true,
  });
};

const copied = () => {
  toast.success("Copied !", {
    position: toast.POSITION.TOP_RIGHT,
    draggable: true,
    autoClose: 1500,
    hideProgressBar: true,
  });
};

const linkRemoved = () => {
  toast.success("Link Removed !", {
    position: toast.POSITION.TOP_RIGHT,
    draggable: true,
    autoClose: 1500,
    hideProgressBar: true,
  });
};

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getLinks = () => {
      const uid = user.uid;
      const linkRef = collection(db, "users", uid, "links");
      const q = query(linkRef);

      onSnapshot(q, (querySnapshot) => {
        let links = [];
        querySnapshot.forEach((doc) => {
          links.push(doc.data());
        });
        setLinks(links);
      });
      console.log(links);
    };
    getLinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLink = async (values) => {
    let link = values.link;
    let newLink;
    if (link.slice(0, 8) === "https://") {
      newLink = await addDoc(
        collection(db, "users", currentUser.uid, "links"),
        {
          uid: "",
          platform: values.platform,
          link: values.link,
        }
      );
    } else {
      newLink = await addDoc(
        collection(db, "users", currentUser.uid, "links"),
        {
          uid: "",
          platform: values.platform,
          link: "https://" + values.link,
        }
      );
    }

    await updateDoc(newLink, {
      uid: newLink.id,
    });
    linkAdded();

    console.log(values);
  };

  const deleteLink = async (linkID) => {
    const linkRef = doc(db, "users", currentUser.uid, "links", linkID);

    await deleteDoc(linkRef);
    linkRemoved();
  };

  return (
    <div>
      <Navbar />
      <div className="text-center mx-auto border border-gray-50 shadow-lg w-11/12 lg:w-1/2 mt-4 rounded-lg">
        {currentUser ? (
          <h1 className="text-5xl my-6 font-bold"> {currentUser.username}</h1>
        ) : (
          <Loading />
        )}
        {currentUser ? (
          <ProfilePicture currentUser={currentUser} avatar={avatar} />
        ) : (
          <Loading />
        )}
        {currentUser ? (
          <Share currentUser={currentUser} copied={copied} />
        ) : (
          <Loading />
        )}
      </div>

      {currentUser ? <Bio currentUser={currentUser} /> : <Loading />}

      <div className="mb-16 border border-gray-50 shadow-lg w-11/12 lg:w-1/2 mx-auto rounded-lg">
        {links.length
          ? links.map((link, i) => (
              <DisplayLink
                currentUser={currentUser}
                key={i}
                link={link}
                deleteLink={deleteLink}
              />
            ))
          : null}
        <div className="w-full flex justify-evenly">
          <button className="btn btn-secondary m-2 w-5/12">
            <span>Add New Widget</span>
            <span className="ml-3">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
          <label htmlFor="my-modal-6" className="btn btn-primary m-2 w-5/12">
            <span>Add New Link</span>
            <span className="ml-3">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </label>
        </div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4 text-center w-4/5 mx-auto">
              Add New Link
            </h1>
            <AddLinkForm addLink={addLink} />
            <div className="modal-action w-full">
              <label
                htmlFor="my-modal-6"
                className="btn w-3/4 mx-auto btn-primary"
              >
                Done
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};
