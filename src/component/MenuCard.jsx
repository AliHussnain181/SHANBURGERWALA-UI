import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
    return (
        <motion.div
        className="w-[70vw] bg-[white] text-black mx-auto shadow-2xl rounded-3xl h-[65vh] mt-9 sm:mt-5"            initial={{
                x: "-100%",
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                delay,
            }}
        >
            <p className="bg-[#ad122c] text-white text-left p-5 h-[12%] overflow-y-hidden">Item {itemNum}</p>
            <img className="w-[48vw]  h-[20vh] mx-auto md:w-[20vw]" src={burgerSrc} alt={itemNum} />
            <p className="mt-9 text-2xl text-center font-bold">{price}</p>
            <p className="mt-3 text-lg text-center  font-open">{title}</p>
            <p className="bg-[#aa1e35] w-[70%] mx-auto text-center p-2 rounded-lg mt-3 cursor-pointer" onClick={() => handler(itemNum)}>Buy Now</p>
        </motion.div>
    );
};

export default MenuCard;
