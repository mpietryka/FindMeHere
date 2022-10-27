import React, { useContext, useState, useEffect } from "react";
import { Footer, Navbar } from "../../components";
import { Loading } from "../loading/Loading";
import { AuthContext } from "../../context/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      setCurrentUser(docSnap.data());
    };
    getUser();
  },);

  return (
    <div>
      <Navbar />
      <div className="text-center mx auto">
        {currentUser ? (
          <h1 className="text-5xl mb-6 font-bold"> {currentUser.username}</h1>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
};
