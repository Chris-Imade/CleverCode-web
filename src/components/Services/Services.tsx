import React from "react";
import globalStyles from "../../App.module.css";
import Dev from "../../assets/dev.png";
import UI from "../../assets/ui.png";
import Graphics from "../../assets/graphics.png";
import Motion from "../../assets/motion.png";
import Photography from "../../assets/photography.png";
import Videography from "../../assets/videography.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="relative">
      <div className={`mt-[250px] w-full`}>
        <h2
          className={`text-center text-white text-[40px] lg:text-[60px] ${globalStyles.poppinsBlack} mb-[50px]`}
        >
          The Service We <br />
          Provide For You
        </h2>

        <div className="flex flex-wrap justify-center lg:justify-between">
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px] mb-4`}
          >
            <img
              src={Dev}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              Development
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              We build softwares and interfaces using industry standards.
            </p>
          </div>
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px] mb-4`}
          >
            <img
              src={UI}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              UI/UX Designer
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              Create stunning yet highly researched user interfaces and
              experience with us now.
            </p>
          </div>
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px] mb-4`}
          >
            <img
              src={Graphics}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              Graphics Designer
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              We provide Graphic Design services, with the best designers
            </p>
          </div>
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px]`}
          >
            <img
              src={Motion}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              Motion Graphics
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              wedding photos, advert series? Let us make those pictures move the
              mind of your audience.
            </p>
          </div>
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px]`}
          >
            <img
              src={Photography}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              Photography
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              Let us document your events, and promote your identity via viral
              blogs.
            </p>
          </div>
          <div
            className={`w-[384px] h-[300px] flex flex-col items-center p-[40px]`}
          >
            <img
              src={Videography}
              alt="Development Icon"
              width={69}
              height={69}
              className="mb-[20px]"
            />
            <h4
              className={`${globalStyles.boldNunito} text-[28px] text-white mb-[20px]`}
            >
              Videography
            </h4>
            <p
              className={`${globalStyles.regularNunito} text-white text-[20px] opacity-70 text-center`}
            >
              Content is what drives audience, let us drive your contents to the
              right audience.
            </p>
          </div>
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
        className="absolute -top-32 right-28 animate-spin"
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
        width="86"
        height="101"
        viewBox="0 0 106 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-20 animate-bounce"
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
        width="30"
        height="30"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-36 right-0 animate-spin"
      >
        <path
          d="M25 8.33337C26.1506 8.33337 27.0833 9.26611 27.0833 10.4167V22.9167H39.5833C40.7339 22.9167 41.6666 23.8495 41.6666 25.0001C41.6666 26.1506 40.7339 27.0834 39.5833 27.0834H27.0833V39.5834C27.0833 40.734 26.1506 41.6667 25 41.6667C23.8494 41.6667 22.9166 40.734 22.9166 39.5834V27.0834H10.4166C9.26605 27.0834 8.33331 26.1506 8.33331 25.0001C8.33331 23.8495 9.26605 22.9167 10.4166 22.9167H22.9166V10.4167C22.9166 9.26611 23.8494 8.33337 25 8.33337Z"
          fill="#E7E7E7"
        />
      </motion.svg>
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
        className="absolute -bottom-20 -left-20 animate-spin"
      >
        <path
          d="M25 8.33337C26.1506 8.33337 27.0833 9.26611 27.0833 10.4167V22.9167H39.5833C40.7339 22.9167 41.6666 23.8495 41.6666 25.0001C41.6666 26.1506 40.7339 27.0834 39.5833 27.0834H27.0833V39.5834C27.0833 40.734 26.1506 41.6667 25 41.6667C23.8494 41.6667 22.9166 40.734 22.9166 39.5834V27.0834H10.4166C9.26605 27.0834 8.33331 26.1506 8.33331 25.0001C8.33331 23.8495 9.26605 22.9167 10.4166 22.9167H22.9166V10.4167C22.9166 9.26611 23.8494 8.33337 25 8.33337Z"
          fill="#E7E7E7"
        />
      </motion.svg>
    </div>
  );
};

export default Services;
