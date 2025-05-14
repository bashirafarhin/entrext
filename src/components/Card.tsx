import React from 'react'

const Card = ({ title, description}) => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col text-center gap-4 bg-transparent p-2 shadow-[0_0_10px_rgba(255,85,19,0.7),0_0_20px_rgba(255,85,19,0.5)] rounded-md'>
        <div className='text-[2vw] '>{title}</div>
        <div className=''>{description}</div>
    </div>
  )
}

export default Card