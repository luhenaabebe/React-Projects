import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer className='w-full h-auto bg-neutral-200 lg:px-28 md:px-16 sm:px-7 px-4 pb-8 '>
        <div className="w-full py-14 grid md:grid-cols-5 grid-cols-2 gap-5">
            <div className="w-full col-span-2">
                 {/* logo section */}
                <Link to={'/'} className='text-5xl text-neutral-800 font-bold mb-4 block'>
                    <span className="text-violet-600">G</span>-LMS
                </Link>
                <p className="text-bse text-neutral-500 font-normal mb-3 md:pr-16 sm:pr-10 pr-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, facere quisquam! Reiciendis excepturi molestias, perferendis quod aspernatur laborum quibusdam sed? Quidem, quis? Cumque, dolorem consequatur?
                </p>
            </div>
            <div className="w-full col-span-2">
                <h2 className="font-medium text-neutral-900 text-lg mb-3">
                    Popular Courses
                </h2>
                <nav className="list-none">
                    <li>
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         React trainning from beginner to expert
                        </Link>
                    </li>
                    <li>  
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         UX/UI course fro  sctratch
                        </Link>
                    </li>
                    <li>  
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                            Full-stack developer
                            </Link>
                    </li>
                    <li>  
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                            WEb 3.0 metaverse
                            </Link>
                    </li>
                </nav>
            </div>
            <div className="w-full col-span-1">
                <h2 className="font-medium text-neutral-900 text-lg mb-3">
                Quick Links
                </h2>
                <nav className="list-none">
                    <li>
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         About G-LMS
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         Our Team
                        </Link>
                    </li>
                    <li>
                    <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         Our Course
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         FAQs
                        </Link>
                    </li>
                    <li>
                         <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='text-neutral-600 hover:text-violet-600 ease-in-out duratio-300'>
                         Terms and Conditions
                        </Link>
                    </li>
                </nav>
            </div>
        </div>
            <div className="w-full flex items-center md:justify-between justify-center gap-y-5 border-t border-neutral-400/50 pt-5 flex-wrap">
                <p className="text-neutral-500 text-sm text-center">
                    &copy; 2024 G-LMS. All Rights Reserved!
                    <Link to={"/"} className='text-violet-600 ml-1' target="_blank">G-techofficial</Link>
                </p>
                <div className="flex items-center gap-x-3">
                    <Link to={"/"} className='text-violet-600'>
                        <FaFacebookF className='text-lg'/>
                    </Link>
                    <Link to={"/"} className='text-violet-600'>
                        <FaYoutube className='text-lg'/>                
                    </Link>
                    <Link to={"/"} className='text-violet-600'>
                        <FaInstagram className='text-lg'/>
                    </Link>
                    <Link to={"/"} className='text-violet-600'>
                        <FaTwitter className='text-lg'/>
                    </Link>
                </div>
            </div>
    </footer>
  )
}

export default footer