import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ title, cover, meta, id }) => {
  const style = {
    background: `url(${
      cover ||
      "https://w0.peakpx.com/wallpaper/286/14/HD-wallpaper-glitch-controller-play-thumbnail.jpg"
    }) center/cover`,
  };

    const navigate = useNavigate();

  const goTo = (idpass) => {
    navigate(`/game/${idpass}`);
  };

  return (
    <div
      style={style}
      className="animate-slowfade m-4 rounded-md overflow-hidden h-40 w-32 xl:h-80 xl:w-64 cursor-pointer"
    >
      <div
        className="hover:bg-[rgba(0,0,0,0.8)] bg-blend-color h-full w-full flex flex-col justify-center items-center group transition-all"
        onClick={() => goTo(id)}
      >
        <h1 className=" hidden group-hover:block text-white mx-4 text-center font-bold text-sm xl:text-lg  transition-all">
          {title}
        </h1>
        {meta && (
          <h2 className=" hidden group-hover:flex group-hover:items-center bg-opacity-20 w-16 group-hover:justify-center text-yellow-500 border-2 rounded-md mt-2 border-yellow-500 bg-yellow-900 mx-4 text-center font-bold text-sm xl:text-md  transition-all">
            <FaStar className="mr-1" />
            <span>{meta}</span>
          </h2>
        )}
      </div>
    </div>
  );
};

export default SearchCard;
