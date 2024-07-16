import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`max-w-[300px] w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer hover:shadow-xl hover:border-brown-50 hover:scale-[1.07] transition-all ease-in-out`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px] hover:font-extrabold`}
        >
          {cardData?.heading}
        </div>

        <div
          className={`text-richblack-400  transition-all ease-linear ${
            currentCard === cardData?.heading
              ? "hover:text-black"
              : "hover:text-white"
          }`}
        >
          {cardData?.description}
        </div>
      </div>

      <div
        className={`flex justify-between  transition-all ease-linear ${
          currentCard === cardData?.heading
            ? "text-blue-300 hover:text-blue-500"
            : "text-richblack-300 hover:text-white"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessonNumber}Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;