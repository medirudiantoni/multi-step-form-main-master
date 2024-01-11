import React, { useEffect, useContext, useState } from "react";
import ButtonPrimary from "../components/button";
import { RootContext } from "../components/context";
import AddOns from "../components/addOns";

const Step3 = () => {
  const [yearly, setYearly] = useState(false);
  const [checked, setChecked] = useState([]);

  const addOns = [
    {
      id: 1,
      name: "Online service",
      desc: "Access to multiplayer games",
      price: 1,
      type: "mo",
    },
    {
      id: 2,
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
      type: "mo",
    },
    {
      id: 3,
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 2,
      type: "mo",
    },
    {
      id: 4,
      name: "Online service",
      desc: "Access to multiplayer games",
      price: 10,
      type: "yr",
    },
    {
      id: 5,
      name: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 20,
      type: "yr",
    },
    {
      id: 6,
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: 20,
      type: "yr",
    },
  ];

  const handleAddCheck = (id) => {
    let dataChecked = addOns.find((item) => item.id == id);
    setChecked([...checked, dataChecked]);
  };

  const handleRemoveCheck = (id) => {
    let dataUnchecked = checked.filter((item) => item.id != id);
    setChecked(dataUnchecked);
  };

  const { handleSetCurrentStep, handleData3, data2, data3 } = useContext(RootContext);

  useEffect(() => {
    if (data2) {
      if (data2.type === "yearly") {
        setYearly(true);
      }
    }
  });

  useEffect(() => {
    if(data3){
      setChecked(data3)
    }
  }, [data3])

  useEffect(() => {
    const handleBackButtonPress = (e) => {
      if (e.key === "Backspace" || e.key === "Back") {
        e.preventDefault();
        handleSetCurrentStep(2);
      }
    };

    document.addEventListener("keydown", handleBackButtonPress);

    return () => {
      document.removeEventListener("keydown", handleBackButtonPress);
    };
  }, [handleSetCurrentStep]);

  const handleSubmit = () => {
    handleData3(checked);
    handleSetCurrentStep(4);
  }

  return (
    <div className="w-full h-full px-5 md:px-[100px] md:py-[46px] text-content-color flex flex-col">
      <div className="bg-white py-9 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20">
        <div className="text-content mb-4 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Pick add-ons
          </h1>
          <p className="text-neutral-400 text-sm">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="w-full">
          {yearly ? (
            <div className="w-full flex flex-col gap-2">
              {addOns.map(
                (item) =>
                  item.type === "yr" && (
                    <AddOns
                      key={item.id}
                      id={item.id}
                      title={item.name}
                      desc={item.desc}
                      price={item.price + "/yr"}
                      checked={ checked.find(check => check.id === item.id) ? true : false }
                      onChange={e => {
                        e.target.checked ? handleAddCheck(e.target.value) : handleRemoveCheck(e.target.value);
                      }}
                    />
                  )
              )}
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2">
              {addOns.map(
                (item) =>
                  item.type === "mo" && (
                    <AddOns
                      key={item.id}
                      id={item.id}
                      title={item.name}
                      desc={item.desc}
                      price={item.price + "/mo"}
                      checked={ checked.find(check => check.id === item.id) ? true : false }
                      onChange={e => {
                        e.target.checked ? handleAddCheck(e.target.value) : handleRemoveCheck(e.target.value);
                      }}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 flex items-end justify-end py-5 md:p-0">
        <div className="w-full flex items-center justify-between">
          <button
            onClick={() => {
              handleSetCurrentStep(2)
            }}
            className="text-neutral-600 font-medium hover:text-content-color active:text-slate-950"
          >
            Go Back
          </button>
          <ButtonPrimary
            name={"Next Step"}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
