import React from 'react'
import Layout from '../../../Components/layout/Layout'
import CategoryCar from '../../../Components/category/CategoryCar'
import categoryImg from "../../../assets/caroutline.png"
const Category = () => {
  return (
    <Layout className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 md:gap-12 sm:gap-5 gap-4 ">
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
        <CategoryCar img={categoryImg}/>
    </Layout>
  )
}

export default Category