import React from "react";


const PaymentSuccess = () => {
  return <div className="sm:w-[100%] mx-auto sm:bg-[pink]">
  <div className="h-[100vh] pt-32 mx-auto text-center w-[80%] sm:bg-white sm:mx-auto ">
    <p className="text-5xl h-[21vh] font-rob">ORDER CONFIRMED</p>
    <p className="w-[80%] mx-auto">Order Placed Successfully, You can check order status below</p>
    <button className="bg-[#881124] p-2 rounded-lg mt-5 text-white">Check Status</button>
  </div>
  </div>
};

export default PaymentSuccess;
