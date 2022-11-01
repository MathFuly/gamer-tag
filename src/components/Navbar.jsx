import { useState } from "react";
import SerachBar from "./SerachBar";
import { BiSearch } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full bg-dark-gray bg-opacity-100 text-white py-4 z-5">
      <div className="flex justify-evenly items-center h-12 px-4">
        <NavLink to="/" className="text-bold text-2xl">
          <span>Gamer</span>
          <span>#</span>
          <span>Tag</span>
        </NavLink>
        <div className="flex items-center">
          <NavLink to="/" className="mr-4 text-xl">Home</NavLink>
          {/* <a className="mr-4 text-xl">About</a> */}
          <button onClick={() => setOpen(!open)} className=" text-center w-8">
            {open ? (
              <TfiClose size={18} className="text-white" />
            ) : (
              <BiSearch size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
      {open && <SerachBar open={open} />}
    </div>
  );
};

export default Navbar;
