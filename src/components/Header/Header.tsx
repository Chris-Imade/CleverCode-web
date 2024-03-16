import React from "react";
import RightSide from "./RightSide";
import globalStyles from "../../App.module.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className={`header__left mt-10 lg:mt-0`}>
          <h1
            className={`${globalStyles.poppinsBlack} text-white text-[40px] lg:text-[80px] lg:w-[443px]`}
            style={{ lineHeight: 1 }}
          >
            Build Your Awesome Platform
          </h1>
          <p
            className={`text-white ${globalStyles.regularNunito} lg:w-[511.59px] mt-[20px] text-[21px] opacity-70`}
          >
            CleverCode-Technologies is an agency that offers several services
            such as Software developments and design Services. Our Legacy is
            customer’s satisfaction.
          </p>
          <button
            className={`group mt-[50px] rounded-[4px] bg-[#5ACBC9] w-[204px] h-[54px] text-[20px] text-white flex items-center justify-center ${globalStyles.boldNunito}`}
          >
            Our Services
            <div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-[8px] group-hover:animate-bounce"
              >
                <path
                  d="M8 7.5C8 6.94772 8.44772 6.5 9 6.5L17 6.5C17.5523 6.5 18 6.94772 18 7.5V15.5C18 16.0523 17.5523 16.5 17 16.5C16.4477 16.5 16 16.0523 16 15.5V9.91421L7.70711 18.2071C7.31658 18.5976 6.68342 18.5976 6.29289 18.2071C5.90237 17.8166 5.90237 17.1834 6.29289 16.7929L14.5858 8.5L9 8.5C8.44772 8.5 8 8.05228 8 7.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className={`header__right relative`}>
          <RightSide />
          {/* ZigZag */}
          <motion.svg
            initial={{ opacity: 0, scale: 0.5 }}
            // animate={{ opacity: 1, scale: 1 }}
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              opacity: 1,
            }}
            transition={{
              duration: 1,
              // type: "§",
              stiffness: 50,
              damping: 20,
            }}
            width="99"
            height="32"
            viewBox="0 0 99 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-36 animate-pulse"
          >
            <path
              d="M2 2L25.2781 26.2247L39.7483 8.60674L57.0497 26.2247L75.9238 8.60674L97 30"
              stroke="#E7E7E7"
              stroke-width="4"
            />
          </motion.svg>

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
            width="51"
            height="60"
            viewBox="0 0 51 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-28 right-28 animate-spin"
          >
            <circle cx="20" cy="20" r="18.5" stroke="white" stroke-width="3" />
            <circle cx="31" cy="40" r="19.5" stroke="white" />
          </motion.svg>

          {/* Triangles */}
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
            width="106"
            height="121"
            viewBox="0 0 106 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-32 animate-ping"
          >
            <path
              d="M32.5135 78.1455L33.8715 20.1376L83.4287 50.3176L32.5135 78.1455Z"
              stroke="#E7E7E7"
              stroke-width="3"
              stroke-linejoin="round"
            />
            <path
              d="M37.0689 100.854L38.508 39.3827L91.0239 71.3644L37.0689 100.854Z"
              stroke="#E7E7E7"
              stroke-linejoin="round"
            />
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
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-36 right-28 animate-pulse"
          >
            <path
              d="M25 8.33337C26.1506 8.33337 27.0833 9.26611 27.0833 10.4167V22.9167H39.5833C40.7339 22.9167 41.6666 23.8495 41.6666 25.0001C41.6666 26.1506 40.7339 27.0834 39.5833 27.0834H27.0833V39.5834C27.0833 40.734 26.1506 41.6667 25 41.6667C23.8494 41.6667 22.9166 40.734 22.9166 39.5834V27.0834H10.4166C9.26605 27.0834 8.33331 26.1506 8.33331 25.0001C8.33331 23.8495 9.26605 22.9167 10.4166 22.9167H22.9166V10.4167C22.9166 9.26611 23.8494 8.33337 25 8.33337Z"
              fill="#E7E7E7"
            />
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default Header;
