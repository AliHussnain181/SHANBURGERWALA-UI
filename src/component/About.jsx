import React from "react";
import { RiFindReplaceLine } from "react-icons/ri"
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg"
import "../styles/about.css"


const About = () => {

    

    return <>
        <div className="bg-[#fce6ee]">
            <div className="about bg-[#201d1e]  text-white w-full md:w-[60%] md:mx-auto ">
                <div className="bg-[#201d1e] text-[#f7778c] p-5 text-5xl font-rob font-thin text-center">ABOUT US</div>
                <div className="mt-16 text-center w-[70%] mx-auto xs:w-[40%]">
                    <p className="text-3xl font-rob">SHAN BURGER WALA</p>
                    <p className="mt-12 text-lg font-rob">We are MBA Burger Wala. The place for most tasty burgers on the enitre earth.</p>
                    <p className="mt-12 text-lg font-open">Explore the various type of food and burgers. Click below to see the menu</p>
                    <Link to="/"><RiFindReplaceLine className="mx-auto text-[#e43c53] mt-3 text-3xl rounded-full" /></Link>
                </div>
                <div className="text-2xl text-center bg-[rgb(33,33,33)] text-white font-extrabold font-rob mt-8 pt-7">Founder</div>
                <div className="bg-[rgb(33,33,33)] text-[white] h-[70vh] xs:h-[50vh]  text-center xs:flex xs:justify-center ">
                    <div className="mx-auto w-[50%]">
                        <img className="w-[22vh] h-[22vh] rounded-full mx-auto mt-5  " src={profile} alt="" />
                        <p className="text-xl font-open font-bold mt-3">Ali Hussnain</p>
                    </div>
                    <p className="w-[35%] mx-auto mt-7 font-open xs:mt-20">I am Ali Hussnain the founder of SHAN BURGER WALA.Affiliated to Good Taste...</p>
                </div>
            </div>
        </div>

    </>
};

export default About;
