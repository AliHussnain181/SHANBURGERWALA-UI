import React from "react";
import { motion } from "framer-motion"
import image from "../assets/burger3.png"


const Contact = () => {
  return <>
    <span className="flex justify-center text-4xl font-opensans font-bold mt-5 ">Contact Me</span>
    <div className=" w-[80%] mx-auto mt-9 sm:mx-auto md:flex md:flex-row md:justify-around md:mt-8 md:w-[90%] ">
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className=" flex justify-center md:w-[40%]">
        <img src={image} className="" alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="space-y-5 mt-7 md:w-[40%] md:mt-0 ">
        <input className="w-full bg-primary-500 p-3 rounded-lg" type="text" placeholder="NAME" />
        <input className="w-full bg-primary-500 p-3 rounded-lg" type="email" placeholder="EMAIL" />
        <textarea className="w-full bg-primary-500 p-3 rounded-lg" placeholder="MESSAGE" />
        <button className="bg-[#e9327e] w-44 h-14 mt-3 font-opensans font-bold rounded-sm">SEND ME A MESSAGE</button>
      </motion.div>
    </div>
  </>
};

export default Contact;
