import React from 'react'
import { CheckSquare, Dumbbell } from 'lucide-react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'
export const PricingPlan = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col 
      lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg text-gray-200 items-center flex gap-x-2 mb-6">
        <Dumbbell className='w-4 h-4 text-indigo-600 -rotate-45' />
        Our Pricing Plan
     </h6>
     <div className="w-full h-auto flex justify-center gap-x-5 gap-y-7 flex-wrap">
        {/*Basic Plan*/}
     <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 
     sm:py-10 py-10 bg-black/10 rounded-lg border-[6px]
     border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10
     ease-out duration-700 cursor-pointer">
        <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-semibold text-white mb-5">
            Basic Plan
        </h2>
        <h1 className="lg:text-5x1 md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
            $165.00<span className="lg:text-xl md:text-xl sm:text-lg text-base
             text-gray-300 font-medium tracking-normal">
                / Month
             </span>
        </h1>
        <hr className="border-gray-600/40 my-7" />
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Get Access to Gym Classes
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Unlimited Yoga Class
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Use of Lockers
                </p>
            </div>
            <PrimaryBtn className="w-full h-full justify-center font-semibold uppercase tracking-wider mb-3">
                Select Plan
            </PrimaryBtn>
        </div>
      </div>
      {/*Premium Plan */}
      <div className="lg:w-[36%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 
      sm:py-10 py-10 bg-indigo-600/10 rounded-lg border-[6px]
      border-indigo-600 ease-out duration-700 cursor-pointer relative">
        <div className="absolute -top-6 left-[50%] translate-x-[-50%] bg-indigo-600 py-2 px-5 
        rounded-full text-base font-medium text-white">
            Recommended
        </div>
        <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-semibold text-white mb-5">
            Premium Plan
        </h2>
        <h1 className="lg:text-5x1 md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
            $200.00<span className="lg:text-xl md:text-xl sm:text-lg text-bse
             text-gray-300 font-medium tracking-normal">
                / Month
             </span>
        </h1>
        <hr className="border-gray-600/40 my-7" />
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Get Access to Gym Classes
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Unlimited Yoga Class
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Use of Lockers
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Weekday pool Access
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Free gym T-shirt
                </p>
            </div>  
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    20% discount on all gym product
                </p>
            </div>
            <PrimaryBtn className="w-full h-full justify-center font-semibold uppercase tracking-wider mb-3">
                Select Plan
            </PrimaryBtn>
        </div>
      </div>
      {/* VIP Plan*/}
      <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 
     sm:py-10 py-10 bg-black/10 rounded-lg border-[6px]
     border-gray-600 hover:border-indigo-600/40 hover:bg-gray-600/10
     ease-out duration-700 cursor-pointer">
        <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-semibold text-white mb-5">
            VIP Plan
        </h2>
        <h1 className="lg:text-5x1 md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide">
            $300.00<span className="lg:text-xl md:text-xl sm:text-lg text-bse
             text-gray-300 font-medium tracking-normal">
                / Month
             </span>
        </h1>
        <hr className="border-gray-600/40 my-7" />
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Get Access to Gym Classes
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Unlimited Yoga Class
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Use of lockers
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Access to pool 6 day a week
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                    Free gym T-shirt
                </p>
            </div>
        </div>
        <div className="w-full h-auto space-y-2 mb-8">
            <div className="w-full h-auto flex items-start gap-x-2">
                <CheckSquare className='w-5 h-5 text-indigo-600'/>
                <p className="text-gray-400 lg:text-base md:text-base sm:text-base text-sm">
                30% discount on all gym product
                </p>
            </div>
            <PrimaryBtn className="w-full h-full justify-center font-semibold uppercase tracking-wider mb-3">
                Select Plan
            </PrimaryBtn>
        </div>
      </div>
    </div>
  </div>
</>
  )
}
