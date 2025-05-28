import React, { useEffect, useState, useRef } from "react";
import MarkDown from "./MarkDown";

import { TfiReload } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RxSpeakerOff } from "react-icons/rx";

//logical imports here
import toast from "react-hot-toast";

const TypeResponse = ({ msg, containerRef }) => {
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
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!msg.trim()) return;

    setTyped("");
    let idx = 0;

    const interval = setInterval(() => {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
      setTyped((prev) => (prev += msg.charAt(idx++)));
      if (idx > msg.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [msg]);

  return (
    <>
      <div
        className="p-2 px-4 
     border-t border-0 border-gray-600/50   max-w-[85vw] right-0 "
        ref={responseBucket}
      >
        <MarkDown msg={typed}></MarkDown>
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
    </>
  );
};

export default TypeResponse;
