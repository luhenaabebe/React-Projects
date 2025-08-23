import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { FaArrowRightLong, FaCircle } from 'react-icons/fa6'

const Hero = () => {
  return (
    <>
     <div className="w-full md:h-[calc(100vh-8ch)]  bg-white lg:px-28 md:px-16 sm:px-7 px-4 mt-[8ch] flex items-center justify-center">
            <div className="w-full h-auto bg-violet-950 rounded-md md:p-14 sm:p-10 p-8 flex 
            items-center justify-between relative overflow-hidden flex-wrap ">
                {/*top left cirlce*/}
                  <FaCircle className='absolute -top-28 -left-28 text-[200px] text-violet-500'/>
                 {/*hero content*/}   
                <div className="md:w-[45%]  w-full flex flex-col gap-4  text-neutral-400 z-30 md:mb-0 mb-10 ">
                  <h1 className="md:text-4xl sm:text-4xl text-3xl font-bold leading-tight text-neutral-50 capitalize">
                          explore, discover, & learn
                  </h1>
                  <p className="md:text-base text-sm md:mb-6 mb-4 ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, 
                        iste velit explicabo tenetur modi eaque aut veritatis quas 
                        saepe voluptatibus? Reprehenderit.
                  </p>

                    <div className="flex items-center md:gap-7 gap-5 md:mb-5 mb-4 flex-wrap ">
                        <button className="bg-violet-700 text-neutral-50 px-4 py-2 rounded-md ease-in-out duration-300">
                            Explore Courses
                        </button>
                        <button className="bg-transparent border-2 border-violet-600 text-neutral-50 px-4 py-2 rounded-md flex items-center gap-x-2">
                            Apply Now<FaArrowRightLong className='text-sm'/>
                        </button>
                    </div>
                    <div className="flex items-center gap-x-16 gap-y-6 flex-wrap">
                      <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-neutral-50">
                          1K+
                        </h3>
                        <p className="text-neutral-400">
                          Students
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-neutral-50">
                          100+
                        </h3>
                        <p className="text-neutral-400">
                          Courses
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-bold text-neutral-50">
                          100+
                        </h3>
                        <p className="text-neutral-400">
                         Instructors
                        </p>
                      </div>
                    </div>
                </div>
                    
                 {/*hero img section*/}
                <div className="md:w-1/2 w-full z-30 relative flex items-end">
                  <img src="https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FydG9vbiUyMGltYWdlJTIwaW4lMjBwY3xlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full aspect-[5/4] object-cover object-center rounded-md" />
                  <div className="absolute top-20 right-20 whitespace-nowrap w-fit h-auto rounded-md px-3 py-1 bg-violet-950/70 
                  text-base text-neutral-100 font-medium md:block hidden ">
                      Congratulions on reaching this milestone!
                  </div>
                  {/*congratulstion cap*/}  
                  <FaGraduationCap className='absolute -top-12 left-34 text-[100px] text-violet-600'/>
                </div>
                 {/*bottom right cirlce*/}
                 <FaCircle className='absolute -bottom-28 -right-20 text-[200px] text-red-500'/>
            </div>
      </div>
    </>
  )
}

export default Hero