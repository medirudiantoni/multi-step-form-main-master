import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonPrimary from './components/button';
import Sidebar from './components/sidebar';
import Step1 from './pages/step1';
import Step2 from './pages/step2';
import Step3 from './pages/step3';
import Step4 from './pages/step4';
import { RootContext } from './components/context';
import Step5 from './pages/step5';

const App = () => {
  const {currentStep} = useContext(RootContext)
  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />]
  return (
    <div className="w-screen h-screen min-h-screen flex md:items-center justify-center font-ubuntu relative">
      <div className="left-0 top-0 right-0 bottom-0 fixed -z-20 bg-bg-color"></div>
      <div className="w-full h-full md:w-[940px] md:h-[600px] md:bg-white md:rounded-2xl md:shadow-xl flex md:p-4 flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1 h-full">
          {currentStep && steps[currentStep - 1]}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full h-20 bg-white -z-10 md:hidden"></div>
    </div>
  )
}

export default App