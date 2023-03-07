import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/textField/TextField";
import { auth, db } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, getDocs, doc, collection } from "firebase/firestore";
import swal from "sweetalert";

export const Register = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validate = Yup.object({
    username: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Please enter your username"),
    email: Yup.string()
      .email("This is not a valid email address")
      .required("Please enter your email address"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Please enter your password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const handleSubmit = async (values) => {
    const findByUsername = users.find(
      (item) => item.username === values.username
    );

    if (findByUsername) {
      swal(
        "Looks like this username is already in use",
        "Try another one",
        "warning"
      );
    } else {
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const newUser = {
          uid: result.user.uid,
          username: values.username,
          email: values.email,
          password: values.password,
          profilePicture: "",
          bio: "",
          isLoggedIn: false,
        };
        await setDoc(doc(db, "users", result.user.uid), newUser);
        navigate("/dashboard");
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          swal(
            "Looks like this email address is already in use",
            "Try another one",
            "warning"
          );
        }
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-11/12 md:w-1/3 my-16 mx-auto border-2 shadow-lg border-base-200 rounded-md p-6 bg-base-300">
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            profilePicture: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <TextField label="Username" name="username" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-primary w-full mt-2" type="submit">
              Register
            </button>

            <p className="mt-4 mb-2 flex justify-between font-light">
              Already have an account?
              <Link
                to="/login"
                className="font-bold text-primary opacity-90 transition-opacity hover:opacity-100"
              >
                Log in
              </Link>
            </p>
            <small>
              By creating an account you're agreeing with our{" "}
              <Link to="/termsandconditions" className="text-primary">
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacypolicy" className="text-primary">
                Privacy Policy
              </Link>{" "}
            </small>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};
