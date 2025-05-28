import React from "react";
import TopBar from "./TopBar";
import Input from "./Input";

const Mate = () => {
  const code = `import React from "react";
import TopBar from "./TopBar";
import Input from "./Input";

const Mate = () => {
  return (
    <div className="h-screen bg-stone-900 relative">
      {/* TopBar */}
      <TopBar />

      {/* Scrollable message area */}
      <div className="absolute top-[64px] bottom-[64px] overflow-y-auto w-full px-4 py-2 space-y-2">
        {Array(30).fill().map((_, i) => (
          <div key={i} className="text-white">hiiiiii {i + 1}</div>
        ))}
      </div>

      {/* Input fixed at bottom */}
      <div className="fixed bottom-0 w-full bg-stone-800 px-4 py-2">
        <Input />
      </div>
    </div>
  );
};

export default Mate;
`;
  return (
    <div className="h-[100vh] overflow-hidden bg-stone-900">
      <TopBar />
      <div className="absolute w-[full] top-[50px] px-[7.5vw] bottom-[25vh]  overflow-y-scroll">
        {Array(30)
          .fill()
          .map((_, i) => (
            <div key={i} className="text-white text-center">
              hiiiiii {i + 1}
            </div>
          ))}

        {code}
      </div>
      <Input />
    </div>
  );
};

export default Mate;
