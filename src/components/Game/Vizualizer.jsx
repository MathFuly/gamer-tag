import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Vizualizer = ({ open, image }) => {
  const [openx, setOpenx] = useState("");

  useEffect(() => {
    setOpenx(open);
  }, [open, image]);

  return (
    <div
      className={`${
        openx === true ? "fixed" : "hidden"
      } w-full h-screen bg-[rgba(0,0,0,0.8)] top-0 left-0 flex justify-center items-center `}
      onClick={() => setOpenx(false)}
    >
      <div className="flex flex-col items-center w-[75%]">
        <TfiClose
          className="text-white mb-5 font-semibold cursor-pointer"
          size={30}
          onClick={() => setOpenx(false)}
        />
        <img src={image} alt="" className="w-full max-h-[800px] object-fill" />
      </div>
    </div>
  );
};

export default Vizualizer;
