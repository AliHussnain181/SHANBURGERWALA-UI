import React from "react";
import {FcGoogle} from "react-icons/fc"
import "../styles/login.css"


const Login = () => {

      

    return <>
        <div className="login h-[100vh] pt-80   ">
            <button className="w-[12rem] py-4 bg-[white] mx-auto pl-4 flex rounded-xl">
                Login With Google
                <FcGoogle className="mx-auto text-2xl" />
            </button>
        </div>
    </>
};

export default Login;
