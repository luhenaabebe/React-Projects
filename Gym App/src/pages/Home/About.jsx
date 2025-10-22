import { Dumbbell } from 'lucide-react'
import React from 'react'
import SecondaryBtn from'../../components/Button/SecondaryBtn'
export const About = () => {
  return (
    <>
     <div className="w-full h-auto flex items-center justify-between 
     gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 
     sm:px-6 px-4 flex-wrap-reverse ">
        <div className="lg:w-[38%] md:w-full sm:w-full w-full h-auto relative rounded-lg overflow-hidden">
            <img 
            src="https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" 
            alt="About" 
            className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh]  object-cover" />
        </div>
        <div className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start 
        md:text-start sm:text-start text-center">
            <h6 className="text-lg text-gray-200 font-medium items-center flex 
            lg:justify-start md:justify-start sm:justify-center gap-x-2 mb-3">
                <Dumbbell className='w-4 h-4 -rotate-45 text-indigo-600'/>
                About Us
            </h6>
            <h1 className="lg:text-3px md:text-3xl sm:text-2xl text-xl 
            font-semibold text-indigo-200 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">
                Effortless Strength,Timley Gains: Building Better Bodies, Faster
            </h1>
            <p className="lg:text-base md:text-base sm:text-sm font-medium text-gray-200 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                In eveniet fugiat officia fuga a similique commodi ea porro. 
                Earum distinctio, obcaecati ipsum explicabo ducimus eos dolorum 
                incidunt maxime corporis pariatur!
            </p>
            <p className="lg:text-base md:text-base sm:text-sm font-medium text-gray-200 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                In eveniet fugiat officia fuga a similique commodi ea porro. 
                Earum distinctio, obcaecati ipsum explicabo ducimus eos dolorum 
                incidunt maxime corporis pariatur!
            </p>
            <SecondaryBtn className="lg:w-auto md:w-auto sm:w-full w-full px-7 py-2
            text-base font-medium uppercase justify-center ">Become a Member</SecondaryBtn>
        </div>
    </div>

    </>
  )
}
