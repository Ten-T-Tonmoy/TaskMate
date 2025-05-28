import React, { useRef } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { FaArrowUp } from "react-icons/fa";

import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { RiChatVoiceLine } from "react-icons/ri";
import { RiVoiceprintFill } from "react-icons/ri";

import { GoPlus } from "react-icons/go";

import { FaPlus } from "react-icons/fa";

const Input = () => {
  const textAreaRef = useRef(null);

  const handleTyping = () => {
    const textAreaActive = textAreaRef.current;
    if (textAreaActive) {
      textAreaActive.style.height = "auto";
      textAreaActive.style.height = textAreaActive.scrollHeight + "px";
    }
  };
  return (
    <div className="fixed min-h-[20vh] bottom-0 left-0 p-4 pt-0 w-full flex  justify-center">
      <div className="flex flex-col ">
        <textarea
          ref={textAreaRef}
          onInput={handleTyping}
          className=" resize-none focus:outline-none h-[10vh]
      bg-stone-800 active:outline-amber-400 max-h-[30vh] scroll-auto md:w-[70vw] 
       shadow-md rounded-t-xl w-[85vw] p-4"
          placeholder="Ask anything . . ."
          name=""
          id=""
        ></textarea>
        <div
          className="shadow-md flex justify-between pb-2 px-4  pt-1
         bg-stone-800 rounded-b-xl md:w-[70vw] w-[85vw]"
        >
          <div className="flex gap-2 ">
            <GoPlus className="cursor-pointer text-[1.6rem] hover:bg-white rounded-full hover:text-black" />
            <RiVoiceprintFill
              className="cursor-pointer p-1 text-[1.7rem] hover:bg-white
             rounded-full hover:text-black"
            />
          </div>
          <FaArrowUp
            className="bg-white cursor-pointer rounded-full
           p-[6px] text-stone-800 text-[2rem] hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
