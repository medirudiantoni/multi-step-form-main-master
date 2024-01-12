import React, { useContext, useEffect, useState } from 'react'
import ButtonPrimary from '../components/button'
import { RootContext } from '../components/context'
import { motion, AnimatePresence } from 'framer-motion'

const Step1 = () => {
  const { handleSetCurrentStep, handleData1, data1 } = useContext(RootContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  useEffect(() => {
    if(data1){
      setName(data1.name || '')
      setEmail(data1.email || '')
      setPhone(data1.phone || '')
    }
  }, [data1])

  const validateFields = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(\+\d{1,4}|0)\d{10,}$/;

    const isEmailValid = emailPattern.test(email);
    const isPhoneValid = phonePattern.test(phone);

    setEmailError(!isEmailValid);
    setPhoneError(!isPhoneValid);

    return isEmailValid && isPhoneValid;
  };

  const handleSubmit = () => {
    if(name.length === 0){
      setNameError(true)
    }
    if(validateFields() && name.length > 0){
      let data = {name, email, phone}
      handleData1(data);
      handleSetCurrentStep(2)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <div 
      className="w-full h-full px-5 sm:px-20 md:px-[100px] md:py-[46px] text-blue-marine flex flex-col">
        <div className="bg-white py-9 px-6 md:p-0 rounded-lg shadow-xl md:shadow-none relative z-20">
          <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="text-content mb-4 md:mb-6">
              <h1 className="text-2xl md:text-4xl font-semibold mb-2">Personal info</h1>
              <p className="text-gray-cool text-sm">Please provide your name, email address, and phone number.</p>
          </motion.div>
          <form className='text-sm'>
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.15 }}
              className="flex items-center justify-between">
                <label htmlFor="name" className='block font-medium'>Name</label>
                {nameError && <p className='font-semibold text-red-600'>This field is required</p>}
              </motion.div>
              <motion.input 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.2 }}
                value={name} onChange={(e) => {
                setName(e.target.value)
                setNameError(false)
              }} type="text" id='name' placeholder='e.g. Stephen King' className={`p-2.5 rounded-lg border-2 w-full mt-1 mb-3 md:mb-6 bg-inherit ${nameError && 'border-red-600 bg-red-100 animate-bergetar'}`} />
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.25 }}
              className="flex items-center justify-between">
                <label htmlFor="email" className='block font-medium'>Email address</label>
                {emailError && <p className='font-semibold text-red-600'>This field is required</p>}
              </motion.div>
              <motion.input 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.3 }}
              value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='e.g.stephenking@lorem.com' className={`p-2.5 rounded-lg border-2 w-full mt-1 mb-3 md:mb-6 bg-inherit ${ emailError && 'border-red-600 bg-red-100 animate-bergetar' }`} />
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.35 }}
                className="flex items-center justify-between">
                <label htmlFor="phone" className='block font-medium'>Phone number</label>
                {phoneError && <p className='font-semibold text-red-600'>This field is required</p>}
              </motion.div>
              <motion.input 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.4 }}
                onKeyPress={handleKeyPress}
                value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id='phone' placeholder='e.g. +1 234 567 890' className={`p-2.5 rounded-lg border-2 w-full mt-1 md:mb-6 bg-inherit ${ phoneError && 'border-red-600 bg-red-100 animate-bergetar' }`} />
          </form>
        </div>
        <div className="flex-1 flex items-end justify-end py-5 md:p-0">
            <ButtonPrimary name={'Next Step'} onClick={handleSubmit} />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Step1

