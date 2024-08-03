import React from 'react'
import Daksha from "../assets/Daksha.png"

const Card = ({src,title,description,border,shadow,bgcolor}) => {
  return (
    <div className={`border-[4px] ${border} ${shadow} p-4 rounded-lg w-[30%] my-4 ${bgcolor} shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl ${shadow} hover:scale-105`}>
      <img className='rounded-lg border-[3px] border-black h-[200px] w-[100%]' src={src} alt="" />
      <div className='mt-9 font-bold text-3xl font-serif'>{title}</div>
      <div className='mt-5 font-semibold '>{description}</div>
    </div>
  )
}

export default Card
