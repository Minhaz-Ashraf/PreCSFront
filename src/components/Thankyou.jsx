import React from "react";
import { check, curve, logo } from "../assets/index";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <span>
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            className="md:w-[8%] sm:w-[14%] w-20 md:mx-12 mx-6 mt-3 cursor-pointer"
          />
        </Link>
      </span>

      <div className="bg-[#FCFCFC]  md:mx-80 mx-6 mt-9 md:mt-0 my-2 rounded-xl shadow  flex flex-col justify-center items-center font-DMsans">
        <img src={curve} alt="img" className="sm:w-full xl:w-full" />
        <img src={check} alt="img" className="w-[14%] xl:w-28 sm:w-[14%] md:w-[14%] mt-12" />
        <p className="text-center md:px-36 mx-3 pt-5 sm:px-20">
          ‘Thank You for signing up, We usually take 3-5 business days for
          verification. Once verified you will be able to access the profiles
        </p>
        <Link
          to="/"
          className="bg-primary text-white font-medium px-6 py-2 rounded-lg mt-10 mb-9"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default Thankyou;
