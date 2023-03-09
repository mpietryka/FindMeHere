import React from "react";
import { Footer, Navbar } from "../../components";

export const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold my-12 text-center">
        Privacy Policy
      </h1>
      <div className="text-justify w-3/4 md:w-1/2 mx-auto m-12 text-sm">
        <p className="my-4">
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you visit our website, use our services, or
          interact with us in any way. We take your privacy seriously and are
          committed to protecting your personal information.
        </p>
        <p className="my-4 font-bold text-xl">Information we collect</p>
        <p className="my-4">
          We may collect personal information from you when you visit our
          website, use our services, or interact with us in any way. This may
          include:
          <ul className="list-disc ml-4 my-4">
            <li className="my-2">
              Name, email address, and other contact information
            </li>
            <li className="my-2">Payment information</li>
            <li className="my-2">
              Usage data, such as the pages you visit on our website, the time
              and date of your visit, and other information about how you use
              our services
            </li>
          </ul>
        </p>
        <p className="my-4 font-bold text-xl">How we use your information</p>
        <p className="my-4">
          We may use your personal information to:
          <ul className="list-disc ml-4 my-4">
            <li className="my-2">Provide our services to you</li>
            <li className="my-2">Process payments and billing information</li>
            <li className="my-2">
              Communicate with you about our services, promotions, and other
              updates
            </li>
            <li className="my-2">Analyze and improve our services</li>
            <li className="my-2">
              Comply with legal and regulatory requirements
            </li>
          </ul>
        </p>
        <p className="my-4 font-bold text-xl">How we protect</p>
        <p className="my-4">
          your information We take appropriate technical and organizational
          measures to protect your personal information from unauthorized
          access, use, or disclosure. We use secure servers and encryption to
          protect your data and restrict access to your personal information to
          only those employees who need it to perform their jobs.
        </p>
        <p className="my-4 font-bold text-xl">Sharing your information</p>
        <p className="my-4 ">
          We may share your personal information with third-party service
          providers who help us provide our services, process payments, or
          analyze our website traffic. We may also share your information with
          legal and regulatory authorities if required by law.
        </p>
        <p className="my-4 font-bold text-xl">Your rights</p>
        <p className="my-4">
          You have the right to access, correct, or delete your personal
          information at any time. You can also request that we stop using your
          personal information for marketing purposes.
        </p>
        <p className="my-4 font-bold text-xl">Changes to this policy</p>
        <p className="my-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on our website.
        </p>
        <p className="my-4 font-bold text-xl">Contact us</p>
        <p className="my-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us.
        </p>
        <p className="text-gray-500 mt-8 mb-20 text-xs">
          <small>Please note that this privacy policy was generated using a free online
          tool as a placeholder only.
          </small>
        </p>
      </div>
      <Footer />
    </div>
  );
};
