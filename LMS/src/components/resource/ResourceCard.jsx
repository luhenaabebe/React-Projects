import React from 'react'
import { FaDownload } from 'react-icons/fa'

const ResourceCard = ({imgUrl, title}) => {
  return (
    <div className='w-full h-64 rounded-md overflow-hidden relative '>
        {/* img */}
        <img src={imgUrl} alt="resource img" className="w-full h-full object-cover object-center" />
           {/* title download btn */}
           <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-t from-neutral-900 
           to-transparent flex items-end justify-between px-3 py-4">
             <p className="text-neutral-50 font-medium text-base">{title}</p>
             <button className="text-violet-200 w-7 h-7 rounded-full bg-neutral-500/40 flex items-center justify-center">
                <FaDownload className='text-sm'/>
             </button>
           </div>

    </div>
  )
}

export default ResourceCard