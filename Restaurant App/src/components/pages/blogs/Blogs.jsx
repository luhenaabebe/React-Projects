import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../../../assets/table.jpg"
import { FaCalendarCheck, FaUserCircle } from 'react-icons/fa'

const Blogs = () => {
  return (
    <div className='h-auto md:w-[86%] w-[92%] flex flex-col gap-x-7 lg:ml-24 md:ml-24 ml-4 sm:mr-3 
     mb-16 md:rounded-none sm:rounded-md rounded-md'>
        <div className="md:w-full w-[90%]  mb-3 flex justify-between">
            <h1 className="text-black font-bold text-xl">
                Explore Our Blog
            </h1>
            <Link to="/" className='hover:text-orange-400'>
                View All
            </Link>
        </div>
        <div className="md:flex gap-x-6">
        <div className="md:w-[32%] w-[93%] md:h-[30ch] h-auto  flex flex-col">
            <img src="https://plus.unsplash.com/premium_photo-1674498271296-5144c596b43c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" className="object-center object-cover rounded-md w-full h-[22ch]" />
            <div className="w-full h-auto text-zinc-600 flex flex-col gap-x-5 mt-2">
                <div className="w-full h-auto flex gap-x-5">
                    <div className="w-full h-auto flex gap-x-2">
                        <FaUserCircle />
                        <h1 className="text-sm">
                            G-Tech Official
                        </h1>
                    </div>
                    <div className="w-full h-auto flex gap-x-2">
                        <FaCalendarCheck />
                        <h1 className="text-sm">
                            11th, nov, 2024
                        </h1>
                    </div>
                </div>
                <div className="w-full h-auto mt-1">
                    <h1 className="text-lg font-bold text-black lime-clamp-1">
                        How to make a delicious fish at home? 
                    </h1>
                    <p className="font-normal text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto quisquam iste accusantium labore, quis quo fugit rerum, odio ut tenetur!
                    </p>
                </div>
            </div>
        </div>
        <div className="md:w-[32%] w-[93%] md:h-[30ch] h-auto flex flex-col md:mt-0 mt-2">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D" alt="" className="object-center object-cover rounded-md w-full h-[22ch]" />
            <div className="w-full h-auto text-zinc-600 flex flex-col gap-x-5 mt-2">
                <div className="w-full h-auto flex gap-x-5">
                    <div className="w-full h-auto flex gap-x-2">
                        <FaUserCircle />
                        <h1 className="text-sm">
                            G-Tech Official
                        </h1>
                    </div>
                    <div className="w-full h-auto flex gap-x-2">
                        <FaCalendarCheck />
                        <h1 className="text-sm">
                            11th, nov, 2024
                        </h1>
                    </div>
                </div>
                <div className="w-full h-auto mt-1">
                    <h1 className="text-lg font-bold text-black lime-clamp-1">
                        Want some salad for lunch? 
                    </h1>
                    <p className="font-normal text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto quisquam iste accusantium labore, quis quo fugit rerum, odio ut tenetur!
                    </p>
                </div>
            </div>
        </div>
        <div className="md:w-[32%] w-[93%] md:h-[30ch] h-auto flex flex-col md:mt-0 mt-2">
            <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D" alt="" className="object-center object-cover rounded-md w-full h-[22ch]" />
            <div className="w-full h-auto text-zinc-600 flex flex-col gap-x-5 mt-2">
                <div className="w-full h-auto flex gap-x-5">
                    <div className="w-full h-auto flex gap-x-2">
                        <FaUserCircle />
                        <h1 className="text-sm">
                            G-Tech Official
                        </h1>
                    </div>
                    <div className="w-full h-auto flex gap-x-2">
                        <FaCalendarCheck />
                        <h1 className="text-sm">
                            11th, nov, 2024
                        </h1>
                    </div>
                </div>
                <div className="w-full h-auto mt-1">
                    <h1 className="text-lg font-bold text-black lime-clamp-1">
                        Enjoy your healthy Breakfast
                    </h1>
                    <p className="font-normal text-sm line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias commodi architecto quisquam iste accusantium labore, quis quo fugit rerum, odio ut tenetur!
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Blogs