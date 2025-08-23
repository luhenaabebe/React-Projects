import React from 'react'
import Layout from '../../../Components/layout/Layout'
import { GoArrowUpRight } from 'react-icons/go'
import CarCards from '../../../Components/car/CarCards'
import CarImg from '../../../assets/hero2.png'
import CarImg2 from "../../../assets/image3.png"
const Cars = () => {
  return (
    <Layout className="space-y-10">

        <div className="w-full flex items-center justify-center text-center space-y-3">
            <div className="space-y-2">
                    <h6 className="text-lg text-zinc-300 uppercase font-medium">
                        What brand we offer?
                    </h6>
                    <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
                        Featured <span className="text-red-600">Cars</span>
                    </h1>
            </div>
        </div>
        {/* Tabs Section*/}
        <div className="py-5">
            {/* Tabs button*/}
            <div className="w-full flex items-center justify-center">
                <div className="w-fit mb-8 flex items-center justify-center bg-zinc-800 p-2 rounded-full">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="bg-zinc-900 text-red-600 hover:text-red-600" data-tabs-inactive-classes="bg-transparent text-zinc-400" role="tablist">
                        
                        <li className="me-2" role="presentation">
                            <button class="inline-block md:px-5 px-4 py-3  rounded-full" id="All-Cars-styled-tab" data-tabs-target="#styled-All-Cars" type="button" role="tab" aria-controls="All-Cars" aria-selected="false">
                                All Cars
                            </button>
                        </li>
                        
                        <li className="me-2" role="presentation">
                            <button className="inline-block md:px-5 px-4 py-3  rounded-full" id="Luxury-styled-tab" data-tabs-target="#styled-Luxury" type="button" role="tab" aria-controls="Luxury" aria-selected="false">
                                Luxury
                            </button>
                        </li>

                        <li className="me-2" role="presentation">
                            <button className="inline-block md:px-5 px-4 py-3  rounded-full" id="Sports-styled-tab" data-tabs-target="#styled-Sports" type="button" role="tab" aria-controls="Sports" aria-selected="false">
                                Sports
                            </button>
                        </li>

                        <li role="presentation">
                            <button className="inline-block md:px-5 px-4 py-3  rounded-full" id="Used-Cars-styled-tab" data-tabs-target="#styled-Used-Cars" type="button" role="tab" aria-controls="Used-Cars" aria-selected="false">
                                Used Cars
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            {/* Tabs content*/}
                <div id="default-styled-tab-content">
                    {/* All cars*/}
                    <div className="hidden p-4 rounded-lg" id="styled-All-Cars" role="tabpanel" aria-labelledby="All-Cars-tab">
                        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
                            <CarCards 
                                img={CarImg}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg2}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg2}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                        </div>
                    </div>
                    
                    <div className="hidden p-4 rounded-lg" id="styled-Luxury" role="tabpanel" aria-labelledby="Luxury-tab">
                        <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
                            <CarCards 
                                img={CarImg2}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg2}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                        </div>
                    </div>
                     {/* Sports cars*/}
                    <div className="hidden p-4 rounded-lg" id="styled-Sports" role="tabpanel" aria-labelledby="Sports-tab">
                    <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
                            <CarCards 
                                img={CarImg}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                            <CarCards 
                                img={CarImg2}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                        </div>
                    </div>
                     {/* used cars cars*/}
                    <div className="hidden p-4 rounded-lg" id="styled-Used-Cars" role="tabpanel" aria-labelledby="Used-Cars-tab">
                    <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 sm:gap-4 gap-8">
                            <CarCards 
                                img={CarImg}
                                title={"BMW Car"}
                                price={"$50,000"}
                                desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                            />
                        
                        </div>
                    </div>
                </div>
        </div>
        {/*button section*/}
        <button className="w-full flex items-center justify-center">
        <button className="border text-center border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 
                    py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center
                     justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                       view all cars
                        <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-300'/>
                     </button>
        </button>

    </Layout>
  )
}

export default Cars