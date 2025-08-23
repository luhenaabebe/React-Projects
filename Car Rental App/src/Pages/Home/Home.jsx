import React from 'react'
import Hero from "./hero/Hero"
import Category from './category/Category'
import Search from './search/Search'
import Services from './services/Services'
import Cars from './cars/Cars'
import Banner from './banner/Banner'
import Blogs from './blog/Blogs'
const Home = () => {
  return (
    <div className='w-full space-y-16 pb-6'>
        {/*Hero*/}
        <Hero />
        {/*Car category*/}
        <Category />
        {/*Car search*/}
        <Search />
        {/*Car services*/}
        
        {/*All Cars*/}
        <Cars />
        {/*Banner*/}
        <Banner />
       
    </div>
  )
}

export default Home