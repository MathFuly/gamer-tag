import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Load from "../components/Load";
import SearchCard from "../components/SearchCard";

const Plataform = () => {
  const idPass = useParams();
  const query = idPass?.id;
  const [plat, setPlat] = useState("");
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [platc, setPlatc] = useState("");
  const [load, setLoad] = useState(false);

  async function getPlat() {
    setLoad(true);
    await axios
      .get(
        "https://api.rawg.io/api/platforms/lists/parents?key=606d649d54f3487d82b8a57caf8b0a71"
      )
      .then((response) => {
        setPlat(
          response?.data?.results?.filter((platform) => platform.id == query)
        );
        setLoad(!load);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPlat();
  }, []);

  async function getGames() {
    axios
      .get(
        `https://api.rawg.io/api/games?key=606d649d54f3487d82b8a57caf8b0a71&parent_platforms=${query}${
          platc != "" ? `&platforms=${platc}` : ""
        }&page=${page}`
      )
      .then((response) => setGames([...games, response.data.results]));
  }

  useEffect(() => {
    getGames();
  }, [query, page, platc]);

  useEffect(() => {
    const intersectionOberser = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage((pageInsideState) => pageInsideState + 1);
      }
    });

    intersectionOberser.observe(document.querySelector("#vigia"));

    return () => intersectionOberser.disconnect();
  }, []);

  const style = {
    background: `url(${plat[0]?.platforms[0]?.image_background})center center/cover`,
    backgroundColor: "rgba(0,0,0,0.4)",
    backgroundBlendMode: "color",
  };


  return (
    <div className={`${plat == "" ? "hidden" : ""}`}>
      <div className="h-[500px] w-full mx-auto" style={style}>
        <div className="w-full min-h-full bg-gradient-to-t from-dark-gray to-transparent flex flex-col items-center justify-end">
          <p className="text-white text-6xl font-semibold">{plat[0]?.name}</p>
          <div className="flex mt-10">
            {plat[0]?.platforms.length != 1 &&
              plat[0]?.platforms?.map((platin) => (
                <p
                  onClick={() => {
                    setPlatc(platin.id);
                    setGames([]);
                    setPage(1);
                    setActive(platin.id);
                  }}
                  className={` mx-2 transition-all ${
                    platc == platin.id
                      ? "text-rose-600 border-b-2 border-rose-600"
                      : "text-dark-gray-300 border-b-2 border-transparent"
                  }  font-semibold hover:text-gray-300 hover:border-gray-300 cursor-pointer`}
                >
                  {platin?.name}
                </p>
              ))}
          </div>
        </div>
      </div>
      <ul className="flex flex-col mt-20">
        <li className="flex flex-wrap items-center justify-center">
          {games.length != 0 &&
            games?.map((game) =>
              game?.map((g) => (
                <SearchCard
                  title={g.name}
                  cover={g.background_image}
                  meta={g.metacritic}
                  id={g.id}
                />
              ))
            )}

          {load == true && <Load search={true} />}
        </li>

        <li
          id="vigia"
          className={`"h-8 w-full bg-slate-400 ${games == 0 && "hidden"}`}
        ></li>
      </ul>
    </div>
  );
};

export default Plataform;
