import React from 'react'
import { FaFacebook, FaFacebookSquare, FaGolfBall, FaInstagram, FaInstagramSquare, FaLandmark, FaMapPin, FaSearch, FaSearchengin, FaSearchLocation, FaTwitter, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'
import { FaGolfBallTee, FaLocationPin, FaMagnifyingGlass, FaMagnifyingGlassArrowRight, FaMagnifyingGlassChart, FaMagnifyingGlassLocation, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-auto bg-zinc-800 flex md:flex-row flex-col '>
        <div className="md:w-[30%] w-[93%] h-auto flex flex-col lg:ml-24 md:ml-24 ml-4 mb-4 mt-12">
            <Link to="/" className='text-3xl font-bold flex mr-14 text-white mb-2'>
                    <span className="text-orange-400 ">G</span>-Food
            </Link>
            <p className="font-normal text-zinc-600 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem repellat quo optio repellendus, amet enim dolores eum ipsum quibusdam qui placeat!
            </p>
            <div className="w-full h-auto flex gap-x-4 text-3xl text-neutral-400 mt-4">
                
                <Link to="/">
                    <FaInstagramSquare className='hover:text-orange-200'/>
                </Link>

                <Link to="/">
                    <FaFacebookSquare className='hover:text-orange-200'/>
                </Link>

                <Link to="/">
                    <FaYoutubeSquare className='hover:text-orange-200'/>
                </Link>

                <Link to="/">
                    <FaXTwitter className='hover:text-orange-200'/>
                </Link>
          </div>
        </div>
        <div className="md:w-[65%] w-[93%] h-auto flex md:flex flex-wrap md:mt-12 mt-6
         text-zinc-600 md:ml-14 ml-4 gap-y-4">
            <div className="md:w-[25%] w-[50%] h-auto">
                <h1 className="text-xl font-bold text-white mb-3">
                    Quick Links
                </h1>
                <ul className="list-none">
                    <li className='hover:text-orange-300'>
                        About Us 
                    </li>
                    <li className='hover:text-orange-300'>
                        Popular Menus 
                    </li>
                    <li className='hover:text-orange-300'>
                        Our Gallery 
                    </li>
                    <li className='hover:text-orange-300'>
                        Contact Us 
                    </li>
                </ul>
            </div>
            <div className="md:w-[25%] w-[50%] h-auto">
                <h1 className="text-xl font-bold text-white mb-3">
                    Top Food Menus
                </h1>
                <ul className="list-none">
                    <li className='hover:text-orange-300'>
                        Crispy Chicken
                    </li>
                    <li className='hover:text-orange-300'>
                        Fresh Burger 
                    </li>
                    <li className='hover:text-orange-300'>
                        Breakfast Platter 
                    </li>
                    <li className='hover:text-orange-300'>
                        Local Dishes
                    </li>
                </ul>
            </div>
            <div className="md:w-[50%] w-[93%] h-auto flex flex-col gap-y-6 mb-6">
                <h1 className="text-xl font-bold text-white">
                    Top Food Menus
                </h1>
                <div className="w-full h-auto flex flex-col gap-y-1">
                    <h1 className=" font-normal text-white">
                        Our Address
                    </h1>
                    <div className="flex gap-x-2">
                        <div className="w-8 h-8 bg-yellow-600/80 rounded-md items-center px-2 py-2">
                            <FaMapPin />
                        </div>
                        <p className="font-normal text-neutral-400">
                            123, Main Street, Anytown, New York, USA
                        </p>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-y-1">
                    <h1 className=" font-normal text-white">
                        Our Phone Number
                    </h1>
                    <div className="flex gap-x-2">
                        <div className="w-8 h-8 bg-yellow-600/80 rounded-md items-center px-2 py-2">
                            <FaMapPin />
                        </div>
                        <p className="font-normal text-neutral-400">
                            +251-944357340  
                        </p>
                    </div>
                </div>
                <div className="w-full h-auto flex flex-col gap-y-1">
                    <h1 className=" font-normal text-white">
                        Our Email
                    </h1>
                    <div className="flex gap-x-2">
                        <div className="w-8 h-8 bg-yellow-600/80 rounded-md items-center px-2 py-2">
                            <FaMapPin />
                        </div>
                        <p className="font-normal text-neutral-400">
                            Luhenaabebe086@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer