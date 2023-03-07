import React from "react";
import {Link} from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { FiLogIn } from "react-icons/fi"
import { IoFastFoodOutline } from "react-icons/io5"

const Navbar = () => {
  return <>
    <div className="flex justify-between shadow-lg h-[12vh]  ">
      <IoFastFoodOutline className="text-5xl text-[#f13a59] mt-3 ml-5" />
      <div className="flex gap-x-4 mt-6 mr-6 cursor-pointer texl-xl font-open xs:gap-x-16 xs:mr-16">
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/contact">Contact</Link></p>
        <Link to="/cart"><FiShoppingCart className="text-[#fc3b5b] text-2xl" /></Link>
        <Link to="/login"><FiLogIn className="text-[#fc3b5b] text-2xl" /></Link>
      </div>
    </div>
  </>
};

export default Navbar;
