import React from 'react'
import img1 from '../../../assets/table.jpg'
const Reservation = () => {
  return (
    <div className='h-auto md:w-[86%] w-[92%] flex gap-x-7 lg:ml-24 md:ml-24 ml-4 sm:mr-3 
    bg-zinc-800 mb-16 md:rounded-none sm:rounded-md rounded-md'>
        <div className="w-[50%] h-auto relative md:flex sm:hidden hidden">
            <img src={"https://media.istockphoto.com/id/1161231986/photo/place-setting-at-a-reception.webp?a=1&b=1&s=612x612&w=0&k=20&c=6nU-F1-K99d5f7GXLjXRjZ9HtaXTRW3zmn0QFA6fAQA="} alt="" className="object-cover object center" />
        </div>
        <div className="md:w-[50%] w-full h-auto flex flex-col ml-1 mt-10 text-sm ">
            <h1 className="text-orange-300 line-clamp-1 font-normal md:ml-0 ml-2">
                Reservation
            </h1>
            <h1 className="md:text-2xl sm:text-3xl text-3xl font-bold text-white md:ml-0 ml-2">
                Book a Table Online
            </h1>
            <div className="w-full h-auto text-neutral-400 gap-x-5 flex flex-wrap mt-1 gap-y-1">
                <div className="md:w-[45%] w-[93%] h-[10ch] flex flex-col gap-y-1 md:ml-0 ml-2">
                    Fullname
                    <div className='rounded-md border-2 border-zinc-600 '>
                        <input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder='e.g luhena abebe'
                        className=' w-full h-[3.5ch] bg-transparent border-none'
                        />
                    </div>
                </div>
                <div className=" md:w-[45%] w-[93%] h-[10ch] flex flex-col gap-y-1 md:ml-0 ml-2">
                    Email Address
                    <div className='rounded-md border-2 border-zinc-600 '>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='e.g be086@gmail.com'
                        className=' w-full h-[3.5ch] bg-transparent border-none focus:outline-none'
                        />
                    </div>
                </div>
                <div className=" md:w-[45%] w-[93%] h-[10ch] flex flex-col gap-y-1 md:ml-0 ml-2">
                    Date and Time
                    <div className='rounded-md border-2 border-zinc-600 '>
                        <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder='mm/dd/yyyy'
                        className=' w-full h-[3.5ch] bg-transparent border-none focus:outline-none'
                        />
                    </div>
                </div>
                <div className=" md:w-[45%] w-[93%] h-[10ch] flex flex-col gap-y-1 md:ml-0 ml-2">
                    No. of People
                    <div className='rounded-md border-2 border-zinc-600 '>
                        
                        <select className=' w-full h-[3.5ch] bg-transparent border-none focus:outline-none'>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                </div>
                <div className=" w-full h-30 flex flex-col gap-y-1 mt-4 mr-8 md:ml-0 ml-2 ">
                    Any Special Request?
                    <div tabIndex={0} 
                    className='rounded-md border-2 border-zinc-600 '>
                        <textarea placeholder=" anything you want is here..."type="text" name="info" className='w-full h-[10ch] 
                        bg-transparent focus:outline-none'>
                        </textarea>
                    </div>
                </div>
               <div className='w-full h-auto mr-8 mt-2 md:mb-1 mb-3 md:ml-0 ml-2 '>
               <button className="w-full h-[4ch] bg-yellow-600 text-white rounded-md items-center
                ">
                      Book a Table Now
                  </button>
               </div>
            </div>
        </div>

    </div>
  )
}

export default Reservation