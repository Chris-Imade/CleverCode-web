import React from "react";
import globalStyles from "../../App.module.css";
import { motion } from "framer-motion";

const Closing = () => {
  return (
    <div className="relative">
      <div
        className={`bg-[#1E1E20] h-[506px] w-[100vw] flex items-center lg:p-[120px]`}
      >
        <div
          className={`flex lg:flex-row flex-col items-center lg:items-start justify-between w-full`}
        >
          <h2
            className={`text-white text-[40px] lg:text-[60px] ${globalStyles.poppinsBlack} mb-[50px] lg:text-left text-center`}
          >
            We have a Solution For <br />
            Every Problem.
          </h2>
          <button
            className={`bg-[#5ACBC9] rounded-[5px] w-[201px] h-[60px] ${globalStyles.boldNunito} text-white`}
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Rings */}
      <motion.svg
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.9,
          damping: 20,
          stiffness: 50,
        }}
        width="41"
        height="50"
        viewBox="0 0 51 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-28 left-36 animate-spin"
      >
        <circle cx="20" cy="20" r="18.5" stroke="white" stroke-width="3" />
        <circle cx="31" cy="40" r="19.5" stroke="white" />
      </motion.svg>

      {/* Add */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.5, x: 200 }}
        transition={{
          damping: 20,
          stiffness: 50,
          delay: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: [0.5, 0.5, 0.5, 0.5, 1],
        }}
        width="30"
        height="30"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-10 right-28 animate-spin"
      >
        <path
          d="M25 8.33337C26.1506 8.33337 27.0833 9.26611 27.0833 10.4167V22.9167H39.5833C40.7339 22.9167 41.6666 23.8495 41.6666 25.0001C41.6666 26.1506 40.7339 27.0834 39.5833 27.0834H27.0833V39.5834C27.0833 40.734 26.1506 41.6667 25 41.6667C23.8494 41.6667 22.9166 40.734 22.9166 39.5834V27.0834H10.4166C9.26605 27.0834 8.33331 26.1506 8.33331 25.0001C8.33331 23.8495 9.26605 22.9167 10.4166 22.9167H22.9166V10.4167C22.9166 9.26611 23.8494 8.33337 25 8.33337Z"
          fill="#E7E7E7"
        />
      </motion.svg>
    </div>
  );
};

export default Closing;
