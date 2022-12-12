import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

export const AddLinkForm = ({ addLink }) => {
  const validate = Yup.object({
    link: Yup.string().required("Please enter your URL"),
  });

  return (
    <Formik
      initialValues={{
        platform: "",
        link: "",
      }}

      validationSchema={validate}
      onSubmit={(values) => {
        if (values.platform === "") {
          console.log("invalid");
        } else {
          addLink(values);
        }
      }}
    >
      <Form>
        <div className="mx-auto flex flex-row w-11/12 lg:w-1/2 p-2">
          <Field
            as="select"
            name="platform"
            className="select bg-neutral w-1/4 rounded-md"
          >
            <option value="" disabled>
              Platform
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twiiter</option>
            <option value="TikTok">TikTok</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="GitHub">GitHub</option>
            <option value="ResearchGate">ResearchGate</option>
            <option value="Spotify">Spotify</option>
            <option value="Apple Music">Apple Music</option>
            <option value="Other">Other</option>
          </Field>
          <Field
            className="m-1 h-5 w-full rounded-md border border-gray-400 px-3 py-5 transition 
          ease-in-out text-black bg-gray-300 hover:outline-none focus:outline-none focus:ring-2 focus:ring-sky-700"
            id="link"
            name="link"
            placeholder="Your URL"
            type="text"
            autoComplete="off"
          />
          <button type="submit" className="hidden md:block btn rounded-md">
            Add Link
          </button>
          <button type="submit" className=" md:hidden btn rounded-md">
            Add
          </button>

        </div>
        <div className="text-center text-error">
          <ErrorMessage name="link" />
        </div>
      </Form>
    </Formik>
  );
};
