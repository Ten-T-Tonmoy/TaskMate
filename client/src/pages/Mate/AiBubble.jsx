import React, { useRef, useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RxSpeakerOff } from "react-icons/rx";

//logical imports here
import MarkDown from "./MarkDown";
import toast from "react-hot-toast";
import Typewriter from "typewriter-effect";

const AiBubble = ({ msg }) => {
  //ref is always there if u wanna tweak html element
  const responseBucket = useRef(null);
  const copyText = () => {
    if (responseBucket.current) {
      //navigator is the browser info /user info broh
      navigator.clipboard
        .writeText(responseBucket.current.innerText)
        .then(() => {
          toast.success("Text Copied ✅");
        });
    }
  };
  //for TTS text to speech
  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const soundText = new SpeechSynthesisUtterance(text);
      soundText.lang = "en-US";
      //clearing before begining bruh
      toast.success("Keep your ears open ....");
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(soundText);
    } else {
      toast.error("Sorry , Browser TTS error ⚠️");
    }
  };
  const shutUp = () => {
    window.speechSynthesis.cancel();
    toast.success("Speech off successfully .");
  };
  return (
    <div
      className="p-2 px-4 
     border-t border-0 border-gray-600/50   max-w-[85vw] right-0 "
      ref={responseBucket}
    >
      <MarkDown msg={msg} />
      <div className="flex gap-2 py-4 ">
        <MdContentCopy
          onClick={copyText}
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
        <RxSpeakerLoud
          onClick={() => speak(msg)}
          className="cursor-pointer hover:bg-stone-700 p-[6px]
        rounded-md text-[1.5rem]"
        />
        <RxSpeakerOff
          onClick={shutUp}
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
