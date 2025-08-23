import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/hero2.png'
import img2 from '../../../assets/hero4.png'
import img3 from '../../../assets/hero3.png'
import img4 from '../../../assets/hero5.png'
import img5 from '../../../assets/rice.png'
import img6 from '../../../assets/burger.png'
import img7 from '../../../assets/pizza.png'
import img8 from '../../../assets/sandwich.png'
const Menus = () => {
    const menuItems = [
        {img:img1,name:"Full Grilled Chicken",price:"1200"},
        {img:img2,name:"Steam Chicken MoMo",price:"220"},
        {img:img3,name:"Chicken Biryani",price:"350"},
        {img:img4,name:"Fried Fish",price:"350"},
        {img:img5,name:"Chicken Fried Rice",price:"200"},
        {img:img6,name:"Md. Chicken Burger",price:"1200"},
        {img:img7,name:"Chicken Pizza",price:"550"},
        {img:img8,name:"Chicken Sandwich",price:"280"},
    ]
  return (
    <div className='h-auto md:w-[86%] w-full flex gap-x-7 lg:ml-24 md:ml-24 ml-4 sm:mr-3  mb-16 flex-wrap'>
        <div className="md:w-full w-[90%]  mb-3 flex justify-between mt-24">
            <h1 className="text-black font-bold text-xl">
                Our Best Foods Menus
            </h1>
            <Link to="/" className='hover:text-orange-400'>
                View All
            </Link>
        </div>
        {menuItems.map((index)=> (
            <div key={index}className="md:w-[23%] w-[93%] h-[35ch] border-1 items-center border-zinc-300
            bg-gray-200 rounded-md flex-col hover:bg-zinc-300 mt-4">
                  <div className="md:w-full w-[60%] h-[15ch] mt-4 ">
                      <img src={index.img} alt="" className="object-cover object-center" />
                  </div>
                  <div className="w-full h-auto md:mt-14 mt-8 ml-4">
                      <h1 className="font-bold text-black mb-1.5">
                           {index.name}
                      </h1>
                      <p className="font-normal text-zinc-400 text-xs line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda dolore. Quam quos laudantium autem, excepturi sequi corporis quisquam corrupti ut repudiandae!
                      </p>
                  </div>
                  <div className="md:w-full w-[90%]  mt-4 mb-3 gap-x-12 flex  ml-4">
                  <h1 className="text-black font-bold text-xl">
                      Rs. {index.price}
                  </h1>
                  <button className="w-[35%] h-[2.5ch] bg-yellow-600 text-black rounded-md items-center">
                      Order Now
                  </button>
              </div>
              </div>
        ))}
        
    </div>
  )
}

export default Menus