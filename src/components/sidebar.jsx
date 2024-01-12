import React, { useContext } from "react";
import mainImg from '../assets/img/bg-sidebar-desktop.svg'
import mainImgMobile from '../assets/img/bg-sidebar-mobile.svg'
import { RootContext } from "./context";

const Sidebar = () => {
  const { currentStep } = useContext(RootContext);

  const steps = [
    { number: 1, name: "step 1", title: "your info"},
    { number: 2, name: "step 2", title: "select plan"},
    { number: 3, name: "step 3", title: "add-ons"},
    { number: 4, name: "step 4", title: "summary"},
  ];

  return (
    <div className="w-full h-fit md:w-[274px] md:h-[568px] relative text-white">
      <img src={mainImg} alt="bg-main" className="w-full h-full object-cover absolute md:z-50 hidden md:block rounded-lg" />
      <img src={mainImgMobile} alt="bg-main" className="w-full h-fit object-cover absolute block md:hidden" />
      <div className="w-full h-full py-10 px-8 relative z-10 md:z-50 flex items-center md:items-start justify-center md:justify-start md:flex-col gap-4 md:gap-8">
        {steps.map((step, i) => {
          return (
            <div key={i} className="flex items-center md:gap-4">
              <div className={`w-[33px] h-[33px] rounded-full border-2 flex items-center justify-center text-sm font-semibold ${step.number === currentStep && 'bg-blue-100 text-content-color'}`}>{step.number}</div>
              <div className="hidden md:block w-fit uppercase">
                <p className="font-extralight">{step.name}</p>
                <p className="font-bold">{step.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;
