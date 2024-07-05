"use client";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaCartPlus } from "react-icons/fa";
import { useStateContext } from "@/utils/ContextProvider";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { showMenu, setShowMenu } = useStateContext();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <div className="flex w-full items-center justify-between bg-primary p-3 text-white">
        <div
          onClick={handleShowMenu}
          className="flex flex-1 items-center gap-3"
        >
          <HiMenuAlt2 className="cursor-pointer" size={30} />
          <h1 className="text-2xl font-bold italic">Mage</h1>
        </div>
        <div className="flex items-center gap-3">
          <FaCartPlus size={30} className="relative cursor-pointer" />
          <CiSettings
            className="cursor-pointer rounded-full bg-white p-1 text-primary"
            size={25}
          />
        </div>
      </div>

      <div onClick={handleShowMenu} className={`${showMenu ? 'bg__overlay' : ''}`}>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
