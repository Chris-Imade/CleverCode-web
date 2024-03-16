import { motion } from "framer-motion";
import React, { useState } from "react";
import globalStyles from "../../App.module.css";
import styles from "./Video.module.css";

const VideoSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const handleCloseModal = () => {
    setTimeout(() => {
      setShowModal(false);
    }, 50);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col items-start justify-center mt-32 lg:mt-0">
        <h1
          className={`${globalStyles.poppinsBlack} text-white text-[40px] lg:text-[60px] lg:w-[640px]`}
          style={{ lineHeight: 1.2 }}
        >
          Why CleverCode Is The Best Choice?
        </h1>

        <p
          className={`text-white ${globalStyles.regularNunito} lg:w-[511.59px] mt-[20px] text-[21px] opacity-70`}
        >
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          className={`lg:w-[1200px] lg:h-[670px] w-[95%] h-[300px] bg-purple-500 mt-[50px] flex justify-center items-center ${styles.videoBackground}`}
        >
          {/* Plat svg */}
          <svg
            onClick={() => {
              setShowModal(true);
              setHideAnimation(false);
            }}
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer group w-[70px] h-[70px] lg:w-[124px] lg:h-[124px] transition-all duration-500 ease-in-out"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M62 124C96.2417 124 124 96.2417 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z"
              className="group-hover:fill-white fill-[#5ACBC9] transition-all duration-500 ease-in-out"
            />
            <path
              d="M71.74 61.565L52.7661 51.0653C52.6074 50.9773 52.4126 50.9783 52.2548 51.0679C52.0969 51.1575 51.9999 51.3222 52 51.5003V72.4997C51.9999 72.6778 52.0969 72.8425 52.2548 72.9321C52.4126 73.0217 52.6074 73.0227 52.7661 72.9347L71.74 62.435C71.9007 62.3462 72 62.1801 72 62C72 61.8199 71.9007 61.6538 71.74 61.565Z"
              className="group-hover:fill-[#5ACBC9] fill-white transition-all duration-500 ease-in-out"
            />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.5, damping: 20, stiffness: 50 }}
          className={`fixed w-[100%] h-[100%] flex justify-center items-center top-0 left-0 right-0 ${
            styles.modal
          } ${hideAnimation && styles.hideModal}`}
          onClick={(e) => {
            console.log(e.target);
            if (e.target) {
              handleCloseModal();
              setHideAnimation(true);
            }
          }}
        >
          <div className={`relative`}>
            <iframe className="w-[1100px] h-[700px]" src="https://www.youtube.com/embed/YUcj5KKVZh0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

          </div>
        </motion.div>
      )}
    </>
  );
};

export default VideoSection;
