import React from "react";
import { HiFire } from "react-icons/hi";
import UpcomingCard from "./UpcomingCard";

const Upcoming = () => {
  return (
    <div className="w-full md:w-1/3 flex flex-col bg-dark-gray-100 p-4 h-fit rounded-md bg-opacity-70 animate-slideup">
      <div className="flex text-white text-3xl mb-4 font-semibold uppercase bg-sky-900 rounded-md py-2 px-4">
        <HiFire size={40} className="mr-2" />
        <p>Upcoming Games</p>
      </div>
      <UpcomingCard id={795632} />
      <UpcomingCard id={494384} />
      <UpcomingCard id={638654} />
      <UpcomingCard id={868086} />
      <UpcomingCard id={490430} />
    </div>
  );
};

export default Upcoming;
