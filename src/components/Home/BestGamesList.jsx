import { useGetListBestGamesQuery } from "../../redux/services/gamesCore";
import { BiJoystick } from "react-icons/bi";
import GameCard from "../GameCard";
import Load from "../Load";

const BestGamesList = () => {
  const { data, isFetching, error } = useGetListBestGamesQuery();

  if (isFetching) {
    return <Load />;
  }

  return (
    <div className="w-full md:w-1/2 py-2 px-2 md:px-10 animate-slideup">
      <div className="flex text-white text-3xl mb-4 font-semibold uppercase bg-sky-900 rounded-md py-2 px-4">
        <BiJoystick size={40} className="mr-2"/>
        <p>Best Scores</p>
      </div>
      {data?.results.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.name}
          cover={game?.short_screenshots[0]?.image}
          platforms={game?.parent_platforms}
          genres={game?.genres}
          metacritic={game?.metacritic}
        />
      ))}
    </div>
  );
};

export default BestGamesList;
