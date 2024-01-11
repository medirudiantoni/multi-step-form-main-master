import React, { useEffect, useContext, useState } from "react";
import ButtonPrimary from "../components/button";
import { RootContext } from "../components/context";
import Step5 from "./step5";
import Loading from "../components/loading";

const Step4 = () => {
  const { handleSetCurrentStep, data1, data2, data3 } = useContext(RootContext);
  const [ success, setSuccess ] = useState(false)
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let totalPriceFromData3 = 0;
  
    if (data3.length >= 1) {
      totalPriceFromData3 = data3.reduce((accumulator, currentObj) => accumulator + currentObj.price, 0);
    }
  
    const totalPrice = data2.price + totalPriceFromData3;
  
    let dataOrder = {
      customer: data1,
      plan: data2,
      addOns: data3 || null,
      period: data2.type,
      price: totalPrice
    };
  
    setOrder(dataOrder);
  }, [data1, data2, data3]);

  useEffect(() => {
    const handleBackButtonPress = (e) => {
      if (e.key === 'Backspace' || e.key === 'Back') {
        e.preventDefault();
        handleSetCurrentStep(3);
      }
    };

    document.addEventListener('keydown', handleBackButtonPress);

    return () => {
      document.removeEventListener('keydown', handleBackButtonPress);
    };
  }, [handleSetCurrentStep]);

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setSuccess(true)
      console.log(order)
      setIsLoading(false)
    }, 2000);
  }

  if(success){
    return <Step5 />
  } else {
  return (
    <div className="w-full h-full px-5 md:px-[100px] md:py-[46px] text-content-color flex flex-col relative">

      {isLoading && <Loading />}

      <div className="bg-white py-9 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20">
        <div className="text-content mb-4 md:mb-6">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Finishing up
          </h1>
          <p className="text-neutral-400 text-sm">
            Double-check everything looks OK before confirming
          </p>
        </div>
        <div className="w-full">
          <div className="p-5 rounded-lg bg-slate-100">
            {data2 && <div className="flex items-center justify-between pb-4 border-b-2">
              <div>
                <h3 className="font-semibold">{data2.name} ({data2.type})</h3>
                <button className="text-sm leading-3 text-neutral-400 font-medium border-b-2 border-neutral-400" onClick={() => handleSetCurrentStep(2)}>Change</button>
              </div>
              <p className="font-semibold">${data2.price}/{data2.type === 'yearly' ? 'yr' : 'mo'}</p>
            </div>}
            {data3 && data3.map(item => {
              return (
                <div key={item.id} className="py-2 flex items-center justify-between">
                  <p className="text-neutral-400">{item.name}</p>
                  <p className="font-medium">${item.price}/{item.type}</p>
                </div>
              )
            })}
          </div>

          <div className="py-3 px-5 flex items-center justify-between">
            <p className="text-neutral-400">Total (per {data2.type === 'yearly' ? 'year' : 'mounth'})</p>
            <p className="font-semibold text-content-color-2 text-lg">+${order && order.price}/{data2.type === 'yearly' ? 'yr' : 'mo'}</p>
          </div>

        </div>
      </div>
      <div className="flex-1 flex items-end justify-end py-5 md:p-0">
        <div className="w-full flex items-center justify-between">
          <button
            onClick={() => handleSetCurrentStep(3)}
            className="text-neutral-600 font-medium hover:text-content-color active:text-slate-950"
          >
            Go Back
          </button>
          <button className='py-2.5 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-900 active:scale-95 duration-100 text-sm' onClick={handleSubmit}>Confirm</button>
        </div>
      </div>
    </div>
  );
  }
};

export default Step4;
