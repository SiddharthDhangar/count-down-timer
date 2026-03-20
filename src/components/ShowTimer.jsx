import React from "react";

const ShowTimer = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex gap-1">
      <div className="font-bold text-3xl">
        {hours < 10 ? `0${hours}` : hours}
      </div>
      <span className="font-bold text-3xl"> :</span>
      <div className="font-bold text-3xl">
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <span className="font-bold text-3xl">:</span>
      <div className="font-bold text-3xl">
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

export default ShowTimer;
