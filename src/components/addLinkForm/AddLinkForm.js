import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

export const AddLinkForm = ({ addLink, setShowAddLinkModal }) => {
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
      onSubmit={(values, { resetForm }) => {
        if (values.platform === "") {
          console.log("invalid");
        } else {
          addLink(values);
          resetForm({ values: "" });
        }
      }}
    >
      <Form>
        <div className="mx-auto flex flex-row w-full">
          <Field
            as="select"
            name="platform"
            className="select bg-primary w-1/3 md:w-1/4 rounded-md text-white mr-2"
          >
            <option value="" disabled>
              Platform
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
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
            className="mx-1 h-6 w-full rounded-md border-gray-400 px-3 py-6 transition 
          ease-in-out text-black bg-gray-300 hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary"
            id="link"
            name="link"
            placeholder="Your URL"
            type="text"
            autoComplete="off"
          />
        </div>
        <div className="flex justify-end p-2">
          <button
            type="submit"
            className="btn-primary text-white hidden md:block btn rounded-md"
          >
            Add Link
          </button>
          <button
            type="submit"
            className=" md:hidden btn btn-primary text-white rounded-md"
          >
            Add
          </button>
          <button
            className="btn bg-red-500 border-none text-white rounded-md ml-4"
            type="button"
            onClick={() => setShowAddLinkModal(false)}
          >
            Cancel
          </button>
        </div>
        <div className="text-center text-error font-bold mb-3">
          <ErrorMessage name="link" />
        </div>
      </Form>
    </Formik>
  );
};
