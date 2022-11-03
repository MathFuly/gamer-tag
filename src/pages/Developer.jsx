import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Load from "../components/Load";
import SearchCard from "../components/SearchCard";

const Developer = () => {
  const idPass = useParams();
  const query = idPass?.id;
  const [dev, setDev] = useState("");
  const [page, setPage] = useState(1);
  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(false);

  async function getDev() {
    setLoad(true);
    await axios
      .get(
        `https://api.rawg.io/api/developers/${query}?key=606d649d54f3487d82b8a57caf8b0a71`
      )
      .then((response) => {
        setDev(response?.data);
        setLoad(!load);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDev();
  }, []);

  async function getGames() {
    axios
      .get(
        `https://api.rawg.io/api/games?key=606d649d54f3487d82b8a57caf8b0a71&developers=${query}&page=${page}`
      )
      .then((response) => setGames([...games, response.data.results]));
  }

  useEffect(() => {
    getGames();
  }, [query, page]);

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
    background: `url(${dev?.image_background}) center top/cover`,
    backgroundColor: "rgba(0,0,0,0.4)",
    backgroundBlendMode: "color",
  };

  console.log(dev);

  return (
    <div className={`${dev == "" ? "hidden" : ""}`}>
      <div className="h-[500px] w-full mx-auto" style={style}>
        <div className="w-full min-h-full bg-gradient-to-t from-dark-gray to-transparent flex flex-col items-center justify-end">
          <p className="text-white text-6xl font-semibold pb-4">{dev?.name}</p>
          {dev?.description && (
            <p className="text-white w-1/2 h-14 scrollbar overflow-hidden overflow-y-scroll text-xs text-center">
              {dev?.description?.replace("<p>", "").replace("</p>", "")}
            </p>
          )}
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

export default Developer;
