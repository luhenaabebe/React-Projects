import React from 'react'
import { FaStar } from 'react-icons/fa'
import { PiStudentBold } from 'react-icons/pi'

const CourseCard = ({imgUrl, title, category, price, rating, totalStudents}) => {
  return (
    <div className='w-full rounded-md border border-neutral-200 shadow-sm 
    hover:rounded-md ease-in-out duration-500 overflow-hidden cursor-pointer'>
    {/* image and category*/}
        <div className="w-full h-52 flex-items-center justify-center relative">
            <img src={imgUrl} alt="course img" className="w-full h-full object-cover object-center" />
            <div className="absolute top-0 left-0 bg-violet 600 px-2 py-1 text-xs text-neutral-50 font-normal">
                {category}
            </div>
        </div>
        <div className="px-3 py-4">
            {/*title*/}
            <h1 className="text-lg text-neutral-800 font-semibold mb-4 line-clamp-2 text-ellipsis">
                {title}
            </h1>
            {/*price,rating,students*/}
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl text-violet-600 font-semibold">
                    {price}
                </h1>
                <div className="flex items-center gap-x-3">
                    <div className="flex items-center gap-x-0.5">
                        <PiStudentBold className='text-violet-500'/>
                        <p className="text-xs text-neutral-600 font-medium">
                            {totalStudents}
                        </p>
                    </div>
                    <div className="flex items-center gap-x-0.5">
                        <FaStar className='text-violet-500'/>
                        <p className="text-xs text-neutral-600 font-medium">
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard