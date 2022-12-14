import React from "react";
import { ErrorMessage, useField } from "formik";
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-5">
      <label htmlFor={field.name} className="font-semibold">
        {label}
      </label>
      <input
        className={`mt-2 h-5 w-full rounded-md border border-gray-400 px-3 py-5 transition 
        ease-in-out text-black bg-gray-300 hover:outline-none focus:outline-none focus:ring-2 focus:ring-primary ${
          meta.touched && meta.error && "border border-error focus:ring-error"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <div className="font-bold text-error">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};
