import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SerachBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="animate-slowfade bg-dark-gray-100 w-[80%] md:w-1/2 mx-auto mt-8 rounded-lg overflow-hidden">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="flex items-center p-4">
          <BiSearch size={25} className="text-dark-gray-300" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise um jogo"
            type="text"
            className="ml-2 bg-transparent border-none outline-none w-full font-semibold placeholder:text-dark-gray-300"
          />
        </label>
      </form>
    </div>
  );
};

export default SerachBar;
