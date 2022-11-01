import React from "react";
import BestGamesList from "../components/Home/BestGamesList";
import Upcoming from "../components/Home/Upcoming";
import { bgHomeImages } from "../assets/constants";

const Home = () => {
  const bg = Math.floor(Math.random() * 4);

  return (
    <div className="min-h-screen pt-20">
      <div className="h-[200px] md:h-[700px] w-full mb-4 animate-slowfade">
        <img src={bgHomeImages[bg].image} alt="" className="w-full" />
      </div>

      <div className="flex justify-center w-full flex-col md:flex-row lg:flex-row">
        <BestGamesList />
        <Upcoming />
      </div>
    </div>
  );
};

export default Home;
