import { useState } from "react";
import { useGetScreenshotsByIdQuery } from "../../redux/services/gamesCore";
import Vizualizer from "./Vizualizer";

const Screenshots = ({ id }) => {
  const { data, isFetching, error } = useGetScreenshotsByIdQuery(id);
    const [imagex, setImagex] = useState({ open: false, image: "" });
    
    console.log(imagex)

    return (
      <div>
        <div className="mt-6 bg-dark-gray-100 p-2 rounded-md w-[95%] md:w-[85%] bg-opacity-40">
          <p className="text-base text-dark-gray-300 font-semibold">
            Screenshots:{" "}
          </p>
          <div className="flex flex-wrap justify-center">
            {data?.results?.map((ss) => (
              <img
                src={ss.image}
                alt=""
                className="w-60 m-2 rounded-sm"
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
