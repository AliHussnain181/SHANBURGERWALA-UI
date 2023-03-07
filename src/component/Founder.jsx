import React from "react";
import profile from "../assets/profile.jpeg"
import "../styles/founder.css"


const Founder = () => {
    return <>
        <div className="founder h-[80vh]  text-[black]">
            <div className="">
                <img className="w-[27vh] h-[27vh] rounded-full mt-3 mx-auto sm:mt-16 " src={profile} alt="" />
                <p className="text-center mt-6 font-open font-bold text-2xl">Ali Hussnain</p>
            </div>
            <p className="w-[80vw] tracking-widest mx-auto font-cur font-bold h-[29vh] md:w-[60vw] text-lg mt-3 text-center">Hey, Everyone I am Ali Hussnain, the founder of Shan Burger Wala.Our aim is to create the most tasty burger on planet.</p>
        </div>
    </>
};

export default Founder;
