import React from "react";
import { RiLoader4Fill } from "react-icons/ri";

const Load = ({ search }) => {
  if (search) {
    return (
      <>
        <div className="h-40 w-32 md:h-80 md:w-64 bg-dark-gray-100 m-4 rounded-md animate-pulse flex justify-center items-center">
          <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
          <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
          <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
        </div>
      </>
    );
  }
  return (
    <div className="h-32 w-full flex justify-center items-center bg-dark-gray-100 rounded-md animate-pulse">
      <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
      <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
      <div className="h-4 w-4 rounded-full bg-sky-500 animate-bounce mx-2"></div>
    </div>
  );
};

export default Load;
