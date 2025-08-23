import React from 'react'
import Hero from './../hero/Hero'
import Banner1 from './../banner1/Banner1'
import Category from './../category/Category'
import Reservation from './../reservation/Reservation'
import Blogs from './../blogs/Blogs'
const Home = () => {
  return (
    <div>
      <Hero />
      <Banner1 />
      <Category />
      <Reservation />
      <Blogs />
    </div>
  )
}

export default Home