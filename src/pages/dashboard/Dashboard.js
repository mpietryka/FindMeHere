import React, { useContext, useState, useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { AddLinkForm } from "../../components/addLinkForm/AddLinkForm";
import { DisplayLink } from "../../components/displayLink/DisplayLink";
import { ProfilePictureForm } from "../../components/profilePictureForm/ProfilePictureForm";
import { Loading } from "../loading/Loading";
import { AuthContext } from "../../context/auth";
import swal from "sweetalert";
import {
  doc,
  //getDoc,
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

const photoUpdated = () => {
  toast.success("Your profile picture was updated !", {
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
  const [showAddLinkModal, setShowAddLinkModal] = useState(false);
  const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "users", user.uid), (doc) => {
      setCurrentUser(doc.data());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setCurrentUser(docSnap.data());
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picChanged]);
  */

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
    setShowAddLinkModal(false);
    console.log(values);
  };

  const deleteLink = async (linkID) => {
    const linkRef = doc(db, "users", currentUser.uid, "links", linkID);

    await deleteDoc(linkRef);
    linkRemoved();
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const userRef = doc(db, "users", user.uid);
    if (!image) {
      swal(
        "You have not uploaded anything",
        "Select a file and try again",
        "warning"
      );
    } else {
      const updatePic = async () => {
        await updateDoc(userRef, { profilePicture: image });
      };
      updatePic();
      photoUpdated();
      setShowProfilePictureModal(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="text-center mx-auto border border-gray-50 shadow-lg w-11/12 lg:w-1/2 mt-4 rounded-lg ">
        {currentUser ? (
          <h1 className="text-5xl my-6 font-bold"> {currentUser.username}</h1>
        ) : (
          <Loading />
        )}
        {currentUser ? (
          <>
            <div className="flex items-center justify-center my-6">
              <a className="relative group rounded-full" href="##">
                <div className="absolute h-64 w-64 lg:h-72 lg:w-72 group-hover:opacity-60 rounded-full overflow-hidden">
                  <ProfilePicture currentUser={currentUser} avatar={avatar} />
                </div>
                <div className="relative rounded-full overflow-hidden">
                  <div className="overflow-hidden h-64 w-64 lg:h-72 lg:w-72 rounded-full">
                    <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 rounded-full overflow-hidden">
                      <button
                        className="hover:opacity-90 ease-in-out transition-opacity h-64 w-64 lg:h-72 lg:w-72"
                        type="button"
                        onClick={() => setShowProfilePictureModal(true)}
                      >
                        <p className="flex justify-center text-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                            />
                          </svg>
                        </p>
                        <p className="text-white">Change Profile Picture</p>
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </>
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
        <div className="w-full flex justify-end">
          <button
            className="btn btn-accent transition ease-in-out rounded-full my-3 mx-2 "
            type="button"
            onClick={() => setShowAddLinkModal(true)}
          > 
          <div className="flex flex-row">
            <p className="mt-1 mx-1">Add</p>
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
            </div>
          </button>
        </div>
        {showAddLinkModal ? (
          <>
            <div className="justify-center m-0 md:mx-auto w-11/12 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
              <div className="w-11/12 md:w-3/4 max-w-md">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                    <h3 className="text-3xl font-semibold">Add New Link</h3>
                    <button
                      className="p-1 ml-auto float-right text-3xl font-semibold text-black"
                      onClick={() => setShowAddLinkModal(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <AddLinkForm
                      addLink={addLink}
                      setShowAddLinkModal={setShowAddLinkModal}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {showProfilePictureModal ? (
          <>
            <div className="justify-center m-0 md:mx-auto w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black">
              <div className="w-full md:w-3/4 max-w-md">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Change Profile Picture
                    </h3>
                    <button
                      className="p-1 ml-auto float-right text-3xl font-semibold text-black"
                      onClick={() => setShowProfilePictureModal(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <ProfilePictureForm
                      image={image}
                      currentUser={currentUser}
                      handleImageChange={handleImageChange}
                      handleSubmit={handleSubmit}
                      avatar={avatar}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <Footer />
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};
