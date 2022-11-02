import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Load from "../components/Load";
import { useGetGameByIdQuery } from "../redux/services/gamesCore";

import { BsStarFill } from "react-icons/bs";
import {
  SiAndroid,
  SiIos,
  SiNintendo,
  SiPcgamingwiki,
  SiPlaystation,
  SiXbox,
} from "react-icons/si";
import { styles } from "../assets/constants";
import Screenshots from "../components/Game/Screenshots";

const Game = () => {
  const idPass = useParams();
  const query = idPass?.id;
  const { data, isFetching, error } = useGetGameByIdQuery(query);

  if (isFetching) {
    return (
      <div className="py-96 w-[90%] md:w-1/2 mx-auto">
        <Load />
      </div>
    );
  }

  console.log(data);

  const style = {
    background: `url(${data?.background_image}) center/cover`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0,0,0,.7)",
    backgroundBlendMode: "color",
  };

  return (
    <div style={style} className="pt-28 md:pt-72 min-h-screen w-full mx-auto">
      <div className="min-h-screen bg-gradient-to-t from-dark-gray to-transparent">
        <div className="bg-dark-gray text-white rounded-md p-4 md:w-[80%] mx-auto w-[98%]">
          <div className="flex justify-center items-center md:flex-row flex-col w-full">
            <img
              src={data?.background_image}
              alt=""
              className="w-[250px] h-[320px] object-cover rounded-md"
            />
            <div className="ml-5 flex flex-col w-[92%] md:w-full">
              <div className="flex md:items-center md:flex-row flex-col">
                <h1 className="md:text-5xl text-4xl font-semibold mr-4 mt-4 md:mt-0">
                  {data?.name}
                </h1>
                {data?.metacritic && (
                  <p className="flex items-center w-fit text-xl border-2 border-yellow-500 bg-yellow-900 bg-opacity-20 px-2 mt-2 rounded-md">
                    <BsStarFill className="mr-1" />
                    <span> {data?.metacritic}</span>
                  </p>
                )}
              </div>

              <p className="text-dark-gray-300 italic text-lg my-2">
                {data?.alternative_names}
              </p>
              <p>
                <span className="text-sm text-dark-gray-300">Release:</span>{" "}
                <span className="text-sm">
                  {data?.released?.replace("-", "/").replace("-", "/")}
                </span>
              </p>
              <div className="flex flex-row my-2">
                {data?.parent_platforms?.map((plat) => (
                  <NavLink
                    to={`/platform/${plat?.platform?.id}`}
                    key={plat?.platform?.id}
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

              {data?.genres?.length !== 0 && (
                <div className="flex text-white my-2 md:w-1/2 lg:w-1/2">
                  <p className="text-sm mr-2 text-dark-gray-300">Genres:</p>
                  {data?.genres?.map((genre) => (
                    <NavLink
                      to={`/genre/${genre.id}`}
                      key={genre.id}
                      className="mr-2 text-xs cursor-pointer hover:text-rose-500 transition-colors"
                    >
                      #{genre.name}
                    </NavLink>
                  ))}
                </div>
              )}
              {data?.tags?.length !== 0 && (
                <div className="flex text-white flex-wrap items-center md:w-1/2 lg:w-1/2">
                  <p className="text-sm mr-2 text-dark-gray-300 mt-1">Tags:</p>
                  {data?.tags?.map((genre) => (
                    <p
                      key={genre.id}
                      className="mr-2 mt-1 text-xs cursor-pointer hover:text-rose-500 transition-colors"
                    >
                      #{genre.name}
                    </p>
                  ))}
                </div>
              )}
              {data?.developers?.length !== 0 && (
                <div className="flex text-white flex-wrap items-center md:w-1/2 lg:w-1/2 mt-1">
                  <p className="text-sm mr-2 text-dark-gray-300 mt-1">
                    Developers:
                  </p>
                  {data?.developers?.map((developer) => (
                    <p
                      key={developer.id}
                      className="mr-2 mt-1 text-xs cursor-pointer hover:text-rose-500 transition-colors"
                    >
                      {developer.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            {/*   <hr className="border-1 border-dark-gray-300 mb-2 w-[90%]" /> */}
            {data?.description_raw && (
              <div className="md:w-[85%] w-[90%] md:mx-0 mx-auto h-28 md:h-fit overflow-y-scroll md:overflow-visible scrollbar">
                <p className="">
                  <span className="text-base text-dark-gray-300">Sinopse:</span>
                  <span>{data?.description_raw}</span>
                </p>
              </div>
            )}
          </div>
          <Screenshots id={query} />
        </div>
      </div>
    </div>
  );
};

export default Game;
