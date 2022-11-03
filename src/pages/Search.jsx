import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Load from "../components/Load";
import SearchCard from "../components/SearchCard";
import { useGetSearchGamesQuery } from "../redux/services/gamesCore";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [page, setPage] = useState(1);

  const { data, isFetching, error } = useGetSearchGamesQuery({ query, page });
  const [games, setGames] = useState("");

  useEffect(() => {
    setGames("");
    setPage(1);
  }, [query]);

  useEffect(() => {
    setGames([...games, data?.results]);
  }, [data]);

  useEffect(() => {
    const intersectionOberser = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPage((pageInsideState) => pageInsideState + 1);
      }
    });


    intersectionOberser.observe(document.querySelector("#vigia"));

    return () => intersectionOberser.disconnect();
  }, []);

  return (
    <div className="pt-44">
      <h1 className="text-white text-xl max-w-[90%] mb-8 text-center bg-black w-fit p-6 mx-auto rounded-lg bg-opacity-40">
        Exibindo Resultados para: {query}
      </h1>
      <ul className="flex flex-col">
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
        </li>
        {isFetching && (
          <div className="w-full flex justify-center items-center">
            <Load search={true} />
          </div>
        )}

        <li
          id="vigia"
          className={`"h-8 w-full bg-slate-400 ${isFetching && "hidden"}`}
        ></li>
      </ul>
    </div>
  );
};

export default Search;
