import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

const Load = () => {
  return (
    <div className="w-full flex items-center justify-center pt-28">
      <RiLoader4Fill size={60} className="animate-spin text-sky-600"/>
    </div>
  );
};

export default Load;
