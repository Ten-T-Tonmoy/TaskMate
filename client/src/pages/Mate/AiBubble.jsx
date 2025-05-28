import React from "react";
import { TfiReload } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const AiBubble = ({ msg }) => {
  return (
    <div
      className="p-2 px-4 
     border-t border-0 border-gray-600/50  w-fit right-0 "
    >
      <p>{msg}</p>
      <div className="flex gap-2 py-4 ">
        <MdContentCopy
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
        <RxSpeakerLoud
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
        <AiOutlineLike
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem] "
        />
        <AiOutlineDislike
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
        <TfiReload
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
      </div>
    </div>
  );
};

export default AiBubble;
