import React, {useEffect, useContext, useState } from 'react'
import ButtonPrimary from '../components/button'
import { RootContext } from '../components/context';
import PlanCard from '../components/planCard';

import arcadeIcon from '../assets/img/icon-arcade.svg';
import advancedIcon from '../assets/img/icon-advanced.svg';
import proIcon from '../assets/img/icon-pro.svg';
import { AnimatePresence, motion } from 'framer-motion';

const Step2 = () => {
  const { handleSetCurrentStep, handleData2, handleData3null, data2 } = useContext(RootContext)
  const [yearly, setYearly] = useState(false)
  const [chosenPlan, setChosenPlan] = useState(false);
  useEffect(() => {
    if(data2){
      setChosenPlan(data2)
      if(data2.type === 'yearly'){
        setYearly(true)
      } else {
        setYearly(false)
      }
    }
  }, [data2]);

  useEffect(() => {
    const handleBackButtonPress = (e) => {
      if (e.key === 'Backspace' || e.key === 'Back') {
        e.preventDefault();
        handleData2(chosenPlan)
        handleSetCurrentStep(1);
      }
    };

    document.addEventListener('keydown', handleBackButtonPress);

    return () => {
      document.removeEventListener('keydown', handleBackButtonPress);
    };
  }, [handleSetCurrentStep]);
  
  const plans = [
    { name: 'Arcade', icon: arcadeIcon, price: 9, type: 'monthly' },
    { name: 'Advanced', icon: advancedIcon, price: 12, type: 'monthly' },
    { name: 'Pro', icon: proIcon, price: 15, type: 'monthly' },
    { name: 'Arcade', icon: arcadeIcon, price: 90, type: 'yearly' },
    { name: 'Advanced', icon: advancedIcon, price: 120, type: 'yearly' },
    { name: 'Pro', icon: proIcon, price: 150, type: 'yearly' },
  ];

  const handlePlan = (val) => {
    setChosenPlan(val)
  }

  const handleSubmit = () => {
    if(chosenPlan){
      handleData2(chosenPlan);
      handleSetCurrentStep(3);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  
  return (
    <AnimatePresence mode='wait'>
      <div className="w-full h-full px-5 md:px-[100px] md:py-[46px] text-blue-marine flex flex-col">
        <div className="bg-white py-6 md:py-9 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20">
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="text-content mb-4 md:mb-6">
              <h1 className="text-2xl md:text-4xl font-semibold mb-2">Select your plan</h1>
              <p className="text-gray-cool text-sm">You have the option of monthly or yearly billing.</p>
          </motion.div>

          { yearly ? <div className="flex flex-col md:flex-row gap-2">
            {plans.map((plan, i) => plan.type === 'yearly' && <PlanCard key={i} id={i} icon={plan.icon} title={plan.name} priceYr={plan.price} onClick={() => handlePlan(plans[i])} isActive={chosenPlan && chosenPlan.price === plan.price ? true : false} isChosen={data2 && data2.price === plan.price ? true : false} onKeyPress={handleKeyPress} />)}
          </div> : <div className="flex flex-col md:flex-row gap-2">
          {plans.map((plan, i) => plan.type === 'monthly' && <PlanCard key={i} id={i} icon={plan.icon} title={plan.name} priceMo={plan.price} onClick={() => handlePlan(plans[i])} isActive={chosenPlan && chosenPlan.price === plan.price ? true : false} isChosen={data2 && data2.price === plan.price ? true : false} onKeyPress={handleKeyPress} />)}
          </div> }

          <div className="w-full pt-8 pb-4 md:py-10 flex items-center justify-center gap-4">
            <p>Monthly</p>
            <button onClick={() => {
              setYearly(!yearly)
              handlePlan(false)
              handleData3null()
            }} className="w-8 aspect-video rounded-full bg-blue-marine p-1">
              <span className={`block w-3 h-3 rounded-full bg-white duration-150 ${ yearly ? 'translate-x-full' : '' }`}></span>
            </button>
            <p>Yearly</p>
          </div>
        </div>
        <div className="flex-1 flex items-end py-5 md:p-0">
          <div className="w-full flex items-center justify-between">
            <button onClick={() => {
                handleData2(chosenPlan)
                handleSetCurrentStep(1)
              }} className='text-gray-cool font-medium hover:text-blue-marine active:text-slate-950'>Go Back</button>
            <ButtonPrimary name={'Next Step'} onClick={handleSubmit} inactive={chosenPlan ? false : true} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Step2