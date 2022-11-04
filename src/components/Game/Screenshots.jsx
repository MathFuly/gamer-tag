import { useState } from "react";
import { useGetScreenshotsByIdQuery } from "../../redux/services/gamesCore";
import Vizualizer from "./Vizualizer";

const Screenshots = ({ id }) => {
  const { data, isFetching, error } = useGetScreenshotsByIdQuery(id);
    const [imagex, setImagex] = useState({ open: false, image: "" });

    return (
      <div>
        <div className="mt-8 bg-dark-gray-100 p-2 rounded-md w-[90%] xl:w-[85%] bg-opacity-40 mx-auto xl:mx-0">
          <p className="text-base text-dark-gray-300 font-semibold">
            Screenshots:{" "}
          </p>
          <div className="flex flex-wrap justify-center">
            {data?.results?.map((ss) => (
              <img
                key={ss.id}
                src={ss.image}
                alt=""
                className="w-60 m-2 rounded-sm cursor-pointer"
                onClick={() => setImagex({ open: true, image: ss.image })}
              />
            ))}
          </div>
            </div>
            <Vizualizer open={imagex.open} image={imagex.image} />
      </div>
    );
};

export default Screenshots;
