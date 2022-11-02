import React from "react";
import {
  SiAndroid,
  SiIos,
  SiNintendo,
  SiPcgamingwiki,
  SiPlaystation,
  SiXbox,
} from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import { styles } from "../assets/constants";

const GameCard = ({ id,title, cover, platforms, genres, metacritic }) => {
      const navigate = useNavigate();

      const goTo = (idpass) => {
        navigate(`/game/${idpass}`);
  };

  
  return (
    <div className="flex my-2 bg-dark-gray-100 hover:bg-gray-900  cursor-pointer rounded-md overflow-hidden transition-transform">
      {cover && (
        <img src={cover} alt="" className="h-36 md:h-28 w-40 object-cover" />
      )}
      {!cover && (
        <img
          className="h-36 md:h-28 w-40 object-cover"
          src="https://w0.peakpx.com/wallpaper/286/14/HD-wallpaper-glitch-controller-play-thumbnail.jpg"
        />
      )}
      <div className="flex flex-col ml-4 pt-1 w-[55%] md:w-[70%]">
        <div className="flex flex-col md:flex-row md:items-center mb-2">
          <h1
            onClick={() => goTo(id)}
            className="text-white font-semibold md:w-fit truncate text-xl"
          >
            {title}
          </h1>
          <h2 className="md:ml-2 w-fit font-semibold bg-green-500 bg-opacity-10 text-green-500 p-1 mt-1 rounded-md text-xs">
            Metacritic: {metacritic}
          </h2>
        </div>

        <div className="flex flex-row p-2">
          {platforms?.map((plat) => (
            <NavLink
              key={plat?.platform?.id}
              to={`platform/${plat?.platform?.id}`}
            >
              {plat?.platform?.slug == "nintendo" && (
                <SiNintendo
                  size={22}
                  className={`${styles.icons} hover:text-rose-600`}
                />
              )}

              {plat?.platform?.slug == "pc" && (
                <SiPcgamingwiki
                  size={22}
                  className={`${styles.icons} hover:text-violet-500`}
                />
              )}

              {plat?.platform?.slug == "playstation" && (
                <SiPlaystation
                  size={22}
                  className={`${styles.icons} hover:text-sky-600`}
                />
              )}

              {plat?.platform?.slug == "xbox" && (
                <SiXbox
                  size={22}
                  className={`${styles.icons} hover:text-green-600`}
                />
              )}

              {plat?.platform?.slug == "ios" && (
                <SiIos
                  size={22}
                  className={`${styles.icons} hover:text-dark-gray`}
                />
              )}

              {plat?.platform?.slug == "android" && (
                <SiAndroid
                  size={22}
                  className={`${styles.icons} hover:text-green-500`}
                />
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex text-white">
          {genres?.map((genre) => (
            <p
              key={genre.id}
              className="mr-2 text-xs cursor-pointer hover:text-rose-500 transition-colors"
            >
              #{genre.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
