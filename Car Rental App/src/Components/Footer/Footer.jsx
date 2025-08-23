import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
  
<footer className="bg-zinc-900 py-6">
    <div className="w-full max-w-screen-2xl mx-auto py-12 md:px-12 px-3 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo}className="h-20 " alt="G-CAR Logo" />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-zinc-400">
                <li>
                    <Link to="/" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6">Licencing</Link>
                </li>
                <li>
                    <Link to="/" className="hover:text-red-600 ease-in-out duration-300 me-4 md:me-6">Contact</Link>
                </li>
               
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-zinc-700 lg:my-8" />

        <span className="block text-sm  sm:text-center font-normal text-zinc-500">© 2024
          <a href="/" target="_blanck" className="hover:text-red-600 ease-in-out duration-300"> G-CAR</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer