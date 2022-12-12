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
        <div className="mx-auto flex flex-row w-1/2 p-2">
          {/*
        <div className="pt-4 mx-auto w-1/2 flex flex-row items-center justify-between">
        */}
          <Field
            as="select"
            name="platform"
            className="select bg-neutral w-1/4 rounded-md"
          >
            <option value="" disabled>
              Platform
            </option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twiiter</option>
            <option value="tiktok">TikTok</option>
            <option value="linkedin">LinkedIn</option>
            <option value="github">GitHub</option>
            <option value="researchgate">ResearchGate</option>
            <option value="spotify">Spotify</option>
            <option value="applemusic">Apple Music</option>
            <option value="other">Other</option>
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
          <button type="submit" className="btn rounded-md">
            Add Link
          </button>
          {/*
        </div>
    */}
          <ErrorMessage name="link" />
        </div>
      </Form>
    </Formik>
  );
};
