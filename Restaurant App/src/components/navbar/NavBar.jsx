import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => (
        setOpen(!open)
    )
    const navLinks = [
        {link:"/home",label:"Home"},
        {link:"/menus",label:"Menus"},
        {link:"/home",label:"Category"},
        {link:"/home",label:"Location"},
        {link:"/home",label:"Contact"},
    ]
  return (
    <nav className='w-full h-[8ch] bg-white flex items-center md:flex-row 
    lg:px-28 md:px-16 sm:px-7 px-4 fixed z-50 '>
        {/*logo section*/}
            <Link to="/" className='text-xl font-bold flex mr-14'>
                <span className="text-orange-400 ">G</span>-Food
            </Link>
            <button onClick={handleOpen} className="flex-1 md:hidden text-neutral-600 hover:text-violet-600 
            ease-in-out duration-300 flex items-center justify-end">
                {
                    open?
                    <LiaTimesSolid className="text-xl"/>
                    :
                    <FaBars className="text-xl"/>
                }
            </button>
            <div className={`${open? "flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative":"hidden" }
             flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2.5 md:items-center md:p-0 p-4 justify-between 
             md:bg-transparent bg-neutral-100 md:shadow-none rounded-md`}>
                <ul className="list-none flex md:items-center items-start text-neutral-500 flex-col 
                gap-x-5 gap-y-2 font-medium md:flex-row mr-10">
                   {navLinks.map((index) => (
                     <li key={index}>
                        <Link to={index.link} smooth className='hover:text-orange-400 ease-in-out duration-300'>
                            {index.label}
                        </Link>
                     </li>
                   ))}
                </ul>
                <div className="flex gap-x-2 md:w-[28%] w-[80%] items-center pl-2 border-2 h-7 border-neutral-200
                rounded-full">
                    <FaSearch/>
                    <input className='bg-transparent border-none focus:outline-none'
                    placeholder="search foods..."
                    name='search'
                    id="search"
                    type="text"
                    />
                </div>
                <div className='md:w-[15%] w-[30%] h-7'>
                    <button className="h-7 rounded-full w-full border-2 border-orange-400 bg-orange-500
                text-neutral-100 items-center font-normal hover:text-orange-400 hover:bg-white ease-in-out duration-300 ">
                        Order Now
                    </button>
                </div>
        </div>
            
    </nav>
    
  )
}

export default NavBar