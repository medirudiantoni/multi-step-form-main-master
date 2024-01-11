import React, { useEffect, useContext } from "react";
import ButtonPrimary from "../components/button";
import { RootContext } from "../components/context";

import thankIcon from '../assets/img/icon-thank-you.svg'

const Step5 = () => {
  // const { handleSetCurrentStep } = useContext(RootContext);
  return (
    <div className="w-full h-full px-5 md:px-[100px] md:py-[46px] text-content-color flex flex-col">
      <div className="w-full h-fit md:h-full bg-white py-20 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] mb-8">
            <img src={thankIcon} alt="thank you" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">Thank you</h1>
          <p className="text-neutral-500">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Step5;
