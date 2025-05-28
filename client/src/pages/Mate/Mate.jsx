import React, { useState, useEffect } from "react";

import { chats } from "../../utils/DummyDB";
import TopBar from "./TopBar";
import Input from "./Input";
import AiBubble from "./AiBubble";

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

  return (
    <div className="h-[100vh] overflow-hidden bg-stone-900">
      <TopBar />
      <div
        className="absolute w-[full] top-[50px] px-[7.5vw]
       md:px-[15vw] bottom-[25vh]  overflow-y-scroll"
      >
        {texts.map((el, key) =>
          el.messages.map((ob, ke) => (
            <div className="" key={ke}>
              <UserBubble msg={ob.user} />

              <AiBubble msg={ob.response} />
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
      className="p-2 px-4 my-8 max-w-[80%]  ml-auto
  rounded-xl bg-stone-800 w-fit right-0"
    >
      {msg}
    </div>
  );
};
