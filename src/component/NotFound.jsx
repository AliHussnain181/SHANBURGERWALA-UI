import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex justify-center text-center  mt-20">
      <main>
        <div className="text-5xl flex justify-center mb-">
          <MdError />
          <h1 className="h-[13vh]">404</h1>
        </div>
        <div className="h-[33vh] mt-7">
          <p className="font-open  mb-7">Page not found, click below to go to home page.</p>
          <Link className="bg-[#a01a30] text-white p-3 rounded-lg " to="/">Go to Home</Link>
        </div>
      </main>
    </section>
  );
};

export default NotFound;
