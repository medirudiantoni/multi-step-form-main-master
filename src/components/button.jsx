import React from 'react'

const ButtonPrimary = ({name, onClick, inactive}) => {
  return (
    <button onClick={onClick} className={`py-2.5 px-5 text-white rounded-lg duration-100 text-sm ${inactive ? 'bg-slate-300' : 'bg-blue-marine hover:bg-hover-color active:scale-95'}`}>{name}</button>
  )
}

export default ButtonPrimary