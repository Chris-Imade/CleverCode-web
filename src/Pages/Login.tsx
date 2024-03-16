import React, { useState } from "react";
import styles from "./Login.module.css";
import globalStyles from "../App.module.css";
import Loader from "../assets/loader.png";
import { AuthInputs } from "../components";
import Google from "../assets/google.png";

const Login = () => {
  return (
    <div
      className={`${styles.backgroundGradient} w-[100vw] h-[100vh] overflow-x-hidden p-[20px] flex justify-between`}
    >
      <div className={`h-[100%] ${styles.width1} bg-yellow-700`}></div>
      <div className={`h-[100%] ${styles.width2} p-[20px] overflow-hidden`}>
        <div className="flex flex-col items-center overflow-y-auto no-scrollbar max-h-[100%]">
          <img src={Loader} alt="Loader" width={59.17} height={59.3} />
          <p
            className={`${globalStyles.poppinsBold} text-[36px] text-white mt-[45px]`}
          >
            Welcome Back
          </p>
          <p
            className={`mt-[15px] text-white text-[12px] ${globalStyles.poppinsRegular}`}
          >
            Enter your email and password to access your account.
          </p>

          <div>
            {/* Inputs Section */}
            <div>
              <p
                className={`${globalStyles.poppinsMedium} text-white text-[19px] mb-[20px]`}
              >
                Email
              </p>
              <AuthInputs type="email" />
            </div>
            <div>
              <p
                className={`${globalStyles.poppinsMedium} text-white text-[19px] mb-[20px]`}
              >
                Password
              </p>
              <AuthInputs type="password" />
            </div>
          </div>

          <div className={`flex justify-between lg:w-[585.64px]`}>
            <div>
              <input type="checkbox" className={`mr-[13px]`} />
              <a
                href="#"
                className={`text-[#5ACBC9] text-[19px] ${globalStyles.poppinsMedium} underline`}
              >
                Remember me
              </a>
            </div>

            <a
              href="#"
              className={`text-[#FFA32D] text-[19px] ${globalStyles.poppinsMedium}`}
            >
              Forgot Password
            </a>
          </div>

          <button
            className={`rounded-[6px] bg-[#5ACBC9] lg:w-[585.64px] min-h-[53.12px] mt-[63px] text-white ${globalStyles.poppinsBold} text-[13px]`}
          >
            Login
          </button>
          <button
            className={`rounded-[6px] bg-[#ffffff] lg:w-[585.64px] min-h-[53.12px] mt-[24px] text-[#231F29] ${globalStyles.poppinsBold} text-[13px] flex justify-center items-center`}
          >
            <div className="flex items-center">
              <img
                src={Google}
                width={17.98}
                height={17.98}
                alt="Google"
                className="mr-[7px]"
              />
              Sign In With Google
            </div>
          </button>

          <p
            className={`${globalStyles.poppinsMedium} text-white text-[19px] mt-[118px]`}
          >
            Don't have an account?{" "}
            <a href="#" className={`text-[#5ACBC9]`}>
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
