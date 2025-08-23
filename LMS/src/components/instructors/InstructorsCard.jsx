import React from 'react'

const InstructorsCard = ({imgUrl, fullName, position}) => {
  return (
    <div className='w-full h-auto rounded-md hover:shadow ease-in-out duration-500
    overflow-hidden cursor-pointer'>
      <img src={imgUrl} alt="instructors image" className="w-full h-[28ch] object-cover object-center" />
      <div className="p-3 text-center">
        <h1 className="text-lg text-neutral-800 font-semibold mb-1">
          {fullName}
        </h1>
        <p className="text-base text-neutral-500 font-medium mb-3">
          {position}
        </p>
      </div>
    </div>
  )
}

export default InstructorsCard