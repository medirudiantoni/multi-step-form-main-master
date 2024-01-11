import React, { createContext, useState } from "react";

export const RootContext = createContext();

const GlobalProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  const handleSetCurrentStep = (Step) => {
    setCurrentStep(Step)
  }

  const handleData1 = (payload) => {
    setData1(payload);
  }
  const handleData2 = (payload) => {
    setData2(payload);
  }
  const handleData3 = (payload) => {
    setData3(payload);
  }
  const handleData3null = () => {
    setData3(undefined);
  }

  const contextValue = {
    currentStep,
    data1,
    data2,
    data3,
    handleSetCurrentStep,
    handleData1,
    handleData2,
    handleData3,
    handleData3null,
  }

  return (
    <RootContext.Provider value={contextValue}>
      {children}
    </RootContext.Provider>
  );
};

export default GlobalProvider;
