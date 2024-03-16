import React from "react";
import globalStyles from "../../App.module.css";
import Peter from "../../assets/person1.png";
import Jepthah from "../../assets/person2.png";
import Daniel from "../../assets/person3.png";

const Team = () => {
  return (
    <div className="mt-24">
      <h2
        className={`text-center font-semibold text-white text-4xl ${globalStyles.boldNunito}`}
      >
        Our Team
      </h2>
      <div className="mt-[47px] flex justify-around flex-wrap">
        <div className="bg-[#2E2E30] w-[281.49px] h-[241.42px] rounded-[10px] flex flex-col justify-center items-center mb-4 lg:mb-0">
          <img
            src={Peter}
            width={131}
            height={131}
            className="mb-2"
            alt="Peter Avatar"
          />
          <div>
            <h4
              className={`${globalStyles.poppinsSemibold} text-white text-[18px] text-center`}
            >
              Peter Esezobor
            </h4>
            <p
              className={`${globalStyles.poppinsLight} text-white text-[15px] text-center mt-2`}
            >
              CTO
            </p>
          </div>
        </div>
        <div className="bg-[#2E2E30] w-[281.49px] h-[241.42px] rounded-[10px] flex flex-col justify-center items-center mb-4 lg:mb-0">
          <img
            src={Jepthah}
            width={131}
            height={131}
            className="mb-2"
            alt="Peter Avatar"
          />
          <div>
            <h4
              className={`${globalStyles.poppinsSemibold} text-white text-[18px] text-center`}
            >
              Imade Jephthah
            </h4>
            <p
              className={`${globalStyles.poppinsLight} text-white text-[15px] text-center mt-2`}
            >
              CEO
            </p>
          </div>
        </div>
        <div className="bg-[#2E2E30] w-[281.49px] h-[241.42px] rounded-[10px] flex flex-col justify-center items-center mb-4 lg:mb-0">
          <img
            src={Daniel}
            width={131}
            height={131}
            className="mb-2"
            alt="Peter Avatar"
          />
          <div>
            <h4
              className={`${globalStyles.poppinsSemibold} text-white text-[18px] text-center`}
            >
              Daniel Ero
            </h4>
            <p
              className={`${globalStyles.poppinsLight} text-white text-[15px] text-center mt-2`}
            >
              CTO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
