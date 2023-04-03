import React, { useState, useEffect, useContext } from "react";
import { Footer, Navbar } from "../../components";
import { Loading } from "../loading/Loading";
import { AuthContext } from "../../context/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../firebase-config";
import avatar from "../dashboard/generic-avatar-1.png";
import swal from "sweetalert";
import { ProfilePictureForm } from "../../components/profilePictureForm/ProfilePictureForm";
import { Link } from "react-router-dom";

export const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();
  const [image, setImage] = useState("");

  const photoUpdated = () => {
    toast.success("Your profile picture was updated !", {
      position: toast.POSITION.TOP_RIGHT,
      draggable: true,
      autoClose: 1500,
      hideProgressBar: true,
    });
  };

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setCurrentUser(docSnap.data());
    };
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full bg-base-200">
        <ul className="flex flex-row w-full justify-around">
          <li className="btn btn-sm md:btn-md btn-ghost">
            <Link to="/updateProfile">
              <span className="underline">Update Profile Picture</span>
            </Link>
          </li>
          <li className="btn btn-sm md:btn-md btn-ghost">
            <span className="font-light">Manage Subscription</span>
          </li>
        </ul>
      </div>
      {currentUser ? (
        <ProfilePictureForm
          image={image}
          currentUser={currentUser}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          avatar={avatar}
        />
      ) : (
        <Loading />
      )}

      <Footer />
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};
