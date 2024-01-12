import React, { useEffect, useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonPrimary from "../components/button";
import { RootContext } from "../components/context";

import thankIcon from "../assets/img/icon-thank-you.svg";

const Step5 = () => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, 2000);
  });
  return (
    <div className="w-full h-full px-5 md:px-[100px] md:py-[46px] text-blue-marine flex flex-col relative">
      <div className="w-full h-fit md:h-full bg-white py-20 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isDone && (
            <motion.div
              initial={{ scale: 0, y: 2 }}
              animate={{ scale: 10, y: 2 }}
              exit={{ opacity: 0, y: 2 }}
              transition={{ duration: 1.2, ease: [0.65, 1.67, 0.69, 0.44] }}
              className="absolute z-40 md:top-0 md:left-0 w-96 h-96 md:w-[430px] md:h-[430px] rounded-full bg-pink-theme flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.15,
                  ease: [0.65, 1.67, 0.69, 0.44],
                }}
                className="absolute z-[41] w-full h-full rounded-full bg-skin-theme flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.65, 1.67, 0.69, 0.44],
                  }}
                  className="absolute z-[41] w-full h-full rounded-full bg-blue-theme flex items-center justify-center"
                >
                  <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.45,
                    ease: [0.65, 1.67, 0.69, 0.44],
                  }}
                  className="absolute z-[41] w-full h-full rounded-full bg-white flex items-center justify-center"
                ></motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.65, 1.67, 0.69, 0.44],
          }}
          className="w-full h-full flex flex-col items-center justify-center text-center relative z-[46]"
        >
          <div className={`w-[80px] h-[80px] mb-8 duration-200 ease-[cubic-bezier(0.18,0.46,0.36,1)] md:absolute ${ isDone ? 'md:-translate-y-[80%]' : '' }`}>
            <img
              src={thankIcon}
              alt="thank you"
              className="w-full h-full object-cover"
            />
          </div>
          {isDone && (
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center w-full md:absolute md:pt-28">
              <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                Thank you
              </h1>
              <p className="text-gray-cool">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Step5;
