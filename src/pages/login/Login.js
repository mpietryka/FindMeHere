import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/textField/TextField";
import { auth, db } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import swal from "sweetalert";

export const Login = () => {
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string()
      .email("This is not a valid email address")
      .required("Please enter your email address"),
    password: Yup.string().required("Please enter your password"),
  });

  const handleSubmit = async (values) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateDoc(doc(db, "users", result.user.uid), {
        isLoggedIn: true,
      });
      navigate("/dashboard");
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        swal(
          "Oops! You have entered an incorrect password",
          "Try again",
          "error"
        );
      } else if (err.code === "auth/user-not-found") {
        swal("Oops! This user doesn't exist", "Try again", "error");
      } else if (err.code === "auth/too-many-requests") {
        swal(
          "Oops! Too many wrong attempts",
          "You can reset your password or Try again later",
          "error"
        );
      }
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-11/12 md:w-1/3 my-16 mx-auto border-2 shadow-lg border-base-200 rounded-md p-6 bg-base-300">
        <Formik
          initialValues={{
            email: "",
            password: "",
            isAuthenticated: false,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-primary w-full mt-2">Log in</button>

            <p className=" mt-5 flex justify-between font-light">
              Don't have an account?
              <Link
                to="/register"
                className="font-bold text-blue-500 opacity-90 transition-opacity hover:opacity-100"
              >
                Register
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};
