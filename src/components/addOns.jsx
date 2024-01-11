import React, { useEffect, useRef } from 'react'
import './style.css'

const AddOns = ({title, desc, price, id, onChange, checked}) => {
  const checkboxRef = useRef(null)
  useEffect(() => {
    if(checked){
        checkboxRef.current.checked = true
    }
  })
  return (
    <div className='w-full'>
        <label htmlFor={`input-checkbox-${id}`}>
            <div className={`w-full py-3 md:py-4 px-3 md:px-5 rounded-lg border-2 flex items-center gap-4 hover:bg-slate-100 cursor-pointer ${ checked && 'border-content-color' }`}>
                <div className="relative w-5 h-5">
                    <input ref={checkboxRef} type="checkbox" id={`input-checkbox-${id}`} value={id} onChange={onChange} className='hidden peer' />
                    <span className="checkmark block w-full h-full rounded relative border after:hidden peer-checked:bg-content-color-2 peer-checked:after:block
                    "></span>
                </div>
                <div className="flex-1 flex justify-between items-center text-xs md:text-[14px]">
                    <div className="">
                        <h1 className="font-bold text-[14px] md:text-[16px]">{title}</h1>
                        <p className="text-neutral-500">{desc}</p>
                    </div>
                    <p className="text-content-color-2">{`+$${price}`}</p>
                </div>
            </div>
        </label>
    </div>
  )
}

export default AddOns