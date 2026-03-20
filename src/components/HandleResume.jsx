import React from "react";

const HandleResume = ({ handleResume }) => {
  return (
    <button
      onClick={handleResume}
      className="w-[10%] mt-4 p-3 bg-black/90 text-white outline-none border-none cursor-pointer hover:bg-black/80 rounded-sm active:scale-95 active:shadow-inner transition duration-150"
    >
      Resume
    </button>
  );
};

export default HandleResume;
