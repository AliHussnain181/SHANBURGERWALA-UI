import React from "react";
import Founder from "./Founder";
import "../styles/home.css"
import Menu from "./Menu";
import { motion } from "framer-motion";





const Home = () => {

  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return <>
    <div className="home h-[100vh] overflow-x-hidden w-[100%] ">
      <div className="">
        <motion.p className="text-white text-[4rem] font-bold font-open mt-32 xs:mt-44  text-center md:text-left md:ml-28 md:mt-56 "  {...options}>SHAN BURGER WALA</motion.p>
      </div>
      <div className="text-center md:text-left md:ml-28 ">
        <motion.p className="text-white text-lg"{...options}
          transition={{
            delay: 0.2,
          }} >Give Yourself a tasty burger</motion.p>
        <button className="bg-[#fa1e43] w-40 p-3 font-rob font-medium rounded-lg mt-5 text-white "><a href="#menu">Explore Menu</a></button>
      </div>
    </div>
    <Founder />
    <Menu />
  </>
};

export default Home;
