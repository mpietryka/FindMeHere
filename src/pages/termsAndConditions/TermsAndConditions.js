import React from "react";
import { Footer, Navbar } from "../../components";

export const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold mt-12 text-center w-4/5 mx-auto">
        Terms and Conditions
      </h1>
      <div className="text-justify w-3/4 md:w-1/2 mx-auto m-12 text-sm">
        <p className="mb-4">
          These Terms and Conditions govern your use of our website and
          services. By using our website or services, you agree to these terms
          and conditions in full. If you disagree with any part of these terms
          and conditions, you must not use our website or services.
        </p>
        <p className="mb-4 font-bold text-xl">Use of our website</p>
        <p className="mb-4">
          You may use our website for lawful purposes only. You must not use our
          website in any way that causes damage to the website, impairs its
          availability or accessibility, or is in any way unlawful, harmful, or
          fraudulent.
        </p>
        <p className="mb-4 font-bold text-xl">Intellectual property</p>
        <p className="mb-4">
          All content on our website, including text, graphics, logos, and
          images, is the property of FindMeHere or its licensors and is
          protected by copyright laws.You may not use any content from our
          website without our express permission.
        </p>
        <p className="mb-4 font-bold text-xl">Disclaimer of warranties</p>
        <p className="my-4">
          We make no representations or warranties of any kind, express or
          implied, regarding the use or results of our website or services. We
          do not guarantee the accuracy, completeness, or reliability of any
          information provided on our website.
        </p>
        <p className="mb-4 font-bold text-xl">Limitation of liability</p>
        <p className="my-4">
          We shall not be liable for any damages arising from the use or
          inability to use our website or services, including but not limited to
          indirect, incidental, or consequential damages.
        </p>
        <p className="mb-4 font-bold text-xl">Indemnification</p>
        <p className="my-4">
          You agree to indemnify and hold harmless FindMeHere and its officers,
          directors, employees, and agents from any and all claims, liabilities,
          damages, costs, and expenses, including attorneys' fees, arising from
          your use of our website or services or your violation of these terms
          and conditions.
        </p>
        <p className="mb-4 font-bold text-xl">
          Modifications to terms and conditions
        </p>
        <p className="my-4">
          We reserve the right to modify these terms and conditions at any time
          without notice. Your continued use of our website or services after
          any changes to these terms and conditions constitutes your acceptance
          of the revised terms and conditions.
        </p>
        <p className="mb-4 font-bold text-xl">Termination</p>
        <p className="my-4">
          We reserve the right to terminate your access to our website or
          services at any time without notice and for any reason.
        </p>
        <p className="mb-4 font-bold text-xl">Entire agreement</p>
        <p className="my-4">
          These terms and conditions constitute the entire agreement between you
          and FindMeHere and supersede all prior agreements or understandings,
          whether written or oral, relating to the subject matter.
        </p>
        <p className="mb-4 font-bold text-xl">Contact us</p>
        <p className="my-4 mb-24">
          If you have any questions or concerns about these terms and
          conditions, please contact us
        </p>
        <small className="text-gray-500 my-4 mb-24">
          Please note that these terms and conditions were generated using a
          free online tool as a placeholder only.
        </small>
      </div>
      <Footer />
    </div>
  );
};
