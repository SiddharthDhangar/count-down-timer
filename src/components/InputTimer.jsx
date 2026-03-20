import React from "react";

const InputTimer = ({ handleStart, handleChange }) => {
  return (
    <div className=" flex flex-col items-center mt-20">
      <div className="flex gap-1">
        <input
          type="text"
          id="hours"
          onChange={handleChange}
          placeholder="HH"
          className="border border-black bg-white text-black p-3 w-16 text-center"
        />
        <input
          type="text"
          id="minutes"
          placeholder="MM"
          onChange={handleChange}
          className="border border-black bg-white text-black p-3 w-16 text-center"
        />
        <input
          type="text"
          id="seconds"
          placeholder="SS"
          onChange={handleChange}
          className="border border-black bg-white text-black p-3 w-16 text-center"
        />
      </div>
      <button
        onClick={handleStart}
        className="mt-4 p-3 w-[40%] bg-black/90 text-white outline-none border-none cursor-pointer hover:bg-black/80 rounded-sm active:scale-95 active:shadow-inner transition duration-150"
      >
        Start
      </button>
    </div>
  );
};

export default InputTimer;
