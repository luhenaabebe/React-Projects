import React from 'react'

const ServiceCard = ({icon: Icon,desc,title}) => {
  return (
    <div className='w-full flex items-start gap-x-4 p-5 border-2 border-zinc-900
    bg-zinc-900/15 rounded-xl hover:bg-zinc-900/25 hover:scale-110 ease-in-out duration-300 '>
        <Icon className="text-zinc-50 text-3xl"/>
          <div className="space-y-2 flex-1">
            <h3 className="text-2xl text-zinc-50 font-bold">
                {title}
            </h3>
            <p className="text-sm text-zinc-400 font-medium">
                {desc}
            </p>
          </div>
    </div>

  )
}

export default ServiceCard