import React from "react";

const HandleReset = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="w-[10%] mt-4 p-3  bg-black/90 text-white outline-none border-none cursor-pointer hover:bg-black/80 rounded-sm active:scale-95 active:shadow-inner transition duration-150"
    >
      Reset
    </button>
  );
};

export default HandleReset;
