import React, { useState, useEffect, useRef } from "react";

import { chats } from "../../utils/DummyDB";
import TopBar from "./TopBar";
import Input from "./Input";
import AiBubble from "./AiBubble";
import "../../index.css";
import TypeResponse from "./TypeResponse";

/**
 * const chats = [
  {
    chatTitle: "",
    date: "",
    messages: [
      { user: "", response: "" },
      { user: "", response: "" },
    ],
  },
]
 */

const Mate = () => {
  const [texts, setTexts] = useState(chats);
  const containerRef = useRef(null);

  return (
    <div className="h-[100vh] w-[100vw]   overflow-hidden bg-stone-900">
      <TopBar />
      {/**attach ref to scrollable shit broh */}
      <div
        ref={containerRef}
        className="absolute w-full top-[50px] px-[7.5vw]
       md:px-[15vw] bottom-[20vh]   overflow-y-scroll overflow-x-hidden"
      >
        {texts.map((el, key) =>
          el.messages.map((ob, idx) => (
            <div className="w-[100%]" key={idx}>
              <UserBubble msg={ob.user} />
              {key === texts.length - 1 && idx === el.messages.length - 1 ? (
                <TypeResponse msg={ob.response} containerRef={containerRef} />
              ) : (
                <AiBubble msg={ob.response} />
              )}
            </div>
          ))
        )}
      </div>
      <Input />
    </div>
  );
};

export default Mate;

const UserBubble = ({ msg }) => {
  return (
    <div
      className="p-2 px-4 my-6 max-w-[80%]  ml-auto
  rounded-xl bg-stone-800 w-fit right-0"
    >
      {msg}
    </div>
  );
};
