import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai"


const Footer = () => {
    return <>
        <div className="bg-[rgb(33,33,33)] text-white mt- sm:grid sm:grid-cols-2 h-[69vh] sm:h-[47vh] ">
            <div className="w-[80%] mx-auto sm:w-[90%]  sm:text-left md:mt-11 ">
                <p className="text-[#d3304b] font-bold font-rob text-center mt-10 text-3xl sm:text-left">SHAN BURGER WALA</p>
                <p className="text-center mt-3 sm:text-left ">We are trying to give you the best taste possible.</p>
                <p className="text-center font-open sm:text-left sm:mt-7">We give attention to genuine feedback.<span className="font-bold font-rob text-[1.rem]">All right received @shanburgerwala</span></p>
            </div>
            <div className="" >
                <p className="text-center font-bold font-open text-lg sm:mt-10 ">Follow Us</p>
                <AiFillYoutube className="mx-auto text-3xl mt-2 cursor-pointer" />
                <a href="https://instagram.com/ali.hussnain69"><AiFillInstagram className="mx-auto text-3xl mt-4 cursor-pointer" /></a>
                <a href="https://github.com/AliHussnain181"><AiFillGithub className="mx-auto text-3xl mt-4 cursor-pointer"/></a>

            </div>
        </div>
    </>
};

export default Footer;
