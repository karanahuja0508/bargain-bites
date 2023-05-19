import React, { useState } from "react";
import { motion } from "framer-motion";
import paytm from "../img/paytm.png";
import phonpay from "../img/phonpay.jpg";
import gpay from "../img/g-pay.png";

const FinalCart = () => {
  const finalPrice = JSON.stringify(localStorage.getItem("totalPrice"));
  const finalScore = JSON.stringify(localStorage.getItem("discountPercent"));

  return (
    <div className="w-full mt-2">
      <div className="flex flex-col items-center justify-center mt-5 gap-8">
        <p className="text-orange-600 font-semibold text-5xl">
          Your price before discount is ${finalPrice}.
        </p>
        <p className="text-headingColor font-semibold text-5xl">
          You have Succesfully claimed {finalScore} % discount.
        </p>
      </div>
      <div className="flex flex-row items-center justify-evenly gap-2 mt-20">
        <img src={paytm} alt="paytm" className="w-[240px] h-20" />
        <img src={phonpay} alt="phonpay" className="w-[240px] h-20" />
        <img src={gpay} alt="gpay" className="w-[240px] h-20" />
      </div>
      <div className="flex items-center justify-center mt-20">
        <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-[240px] p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
        >
          Proceed to pay
        </motion.button>
              
      </div>
          
    </div>
  );
};

export default FinalCart;
