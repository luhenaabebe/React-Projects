import React from 'react'
import { Dumbbell,MoveRight} from 'lucide-react';
import SecondaryLink from "../../components/LinkBtn/SecondaryLink"
export const Trainers = () => {
    const trainerData = [
        {
          id: 1,
          trainerImg: "https://tinyurl.com/5n6wekta",
          name: "Dr. John Smith",
          role: "Body Building Coach",
        },
        {
          id: 2,
          trainerImg: "https://tinyurl.com/yzznswkf",
          name: "Dr. John Doe",
          role: "Gym Trainer",
        },
        {
          id: 3,
          trainerImg: "https://tinyurl.com/2baufwyw",
          name: "Mrs. Lilly Doe",
          role: "Prof. fitness coach",
        },
        {
          id: 4,
          trainerImg: "https://tinyurl.com/2s3uypvj",
          name: "Roman Reigns",
          role: "Prof. wrestling coach",
        },
];
  return (
    <>
<div className="w-auto h-auto flex items-center justify-center flex-col 
  lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
    <h6 className="text-lg text-gray-200 items-center flex gap-x-2 mb-6">
        <Dumbbell className='w-4 h-4 text-indigo-600 -rotate-45' />
        Our Expert Trainers
    </h6>
    <div className="w-full h-auto flex items-center justify-center 
    lg:gap-x-7.5 md:gap-x-4 sm:gap-2 gap-x-2 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
        {/*lets display it through loop*/}
    {trainerData.map((data) => (
         <div 
         key={data.id}
         className="lg:w-[23%] md:w-[48%] sm:w-[48%] w-full 
         lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl overflow-hidden relative">
             <img 
             src={data.trainerImg} 
             alt="trainer image" 
             className="w-full-h-full object-cover" />
             <div className="w-full h-auto bg-gray-900/70 absolute bottom-0 left-0 py-4 px-2 
             flex items-center justify-center flex-col">
                 <h1 className="text-xl text-white font-semibold">
                     {data.name}
                 </h1>
                 <p className="text-sm text-gray-300">{data.role}</p>
             </div>
         </div>
    ))}
       
    </div>
    <SecondaryLink link="/trainers" className="lg:w-[18%] md:w-[50%] sm:w-[75%]
    w-[85%] justify-center ">
    View All Trainers
    <MoveRight className="w-4 h-4" />
    </SecondaryLink>
</div>
    </>
  )
}

