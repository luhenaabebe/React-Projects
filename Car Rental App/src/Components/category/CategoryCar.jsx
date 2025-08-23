import React from 'react'
import { SiBmw } from 'react-icons/si'
import { Link } from 'react-router-dom'

const CategoryCar = ({img}) => {
  return (
    <Link to="/" className="w-full h-auto px-4 py-6 bg-zinc-900
     hover:bg-zinc-950 border-2 border-zinc-900 rounded-2xl flex items-center
     justify-center flex-col gap-4 ease-in-out duration-300"> 
        <SiBmw className='text-4xl text-zinc-400 ml-0'/>
        <img src={img} alt="" className="h-12" />
    </Link>
  )
}

export default CategoryCar