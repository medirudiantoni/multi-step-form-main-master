import React from 'react'

const PlanCard = ({icon, title, priceYr, priceMo, onClick, isActive, isChosen}) => {
  return (
    <div onClick={onClick} className={`md:w-[138px] md:h-[183px] rounded-lg border-2 py-4 md:py-5 px-4 flex gap-4 md:flex-col md:justify-between cursor-pointer hover:bg-blue-50 ${isChosen && 'border-content-color'} ${isActive && 'border-content-color'}`}>
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img src={icon} alt={title} className='w-full h-full object-cover' />
        </div>
        <div className="">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-neutral-500 text-sm">
                {priceYr && `$${priceYr}/yr`}
                {priceMo && `$${priceMo}/mo`}
            </p>
            {priceYr && <p className='text-xs'>2 months free</p>}
        </div>
    </div>
  )
}

export default PlanCard