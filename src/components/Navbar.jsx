import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { activeBar } from "../redux/services/searchSlice";
import SerachBar from "./SerachBar";
import { BiSearch } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Navbar = () => {

  const { openBar } = useSelector((state) => {
    return state.search;
  });


  const dispatch = useDispatch();

  return (
    <div className="fixed w-full bg-dark-gray bg-opacity-100 text-white py-4 z-5">
      <div className="flex justify-evenly items-center h-12 px-4">
        <NavLink to="/" className="text-bold text-2xl">
          <img src={logo} alt="" className="w-44" />
        </NavLink>
        <div className="flex items-center">
          <button
            onClick={() => dispatch(activeBar(!openBar))}
            className=" text-center w-8"
          >
            {openBar ? (
              <TfiClose size={18} className="text-white" />
            ) : (
              <BiSearch size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
      {openBar && <SerachBar />}
    </div>
  );
};

export default Navbar;
