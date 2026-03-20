import React from "react";

const HandlePaused = ({ handlePaused }) => {
  return (
    <button
      onClick={handlePaused}
      className="w-[10%] mt-4 p-3 bg-black/90 text-white outline-none border-none cursor-pointer hover:bg-black/80 rounded-sm active:scale-95 active:shadow-inner transition duration-150"
    >
      Pause
    </button>
  );
};

export default HandlePaused;
