import React from 'react'
import Layout from '../../../Components/layout/Layout'
import BlogCards from '../../../Components/blog/BlogCards'
import CarImg from '../../../assets/image3.png'

const Blogs = () => {
  return (
    <Layout className="space-y-10">
        <div className="w-full flex items-center justify-center text-center space-y-3 flex-col pt-40">
                    <h6 className="text-lg text-zinc-300 uppercase font-medium">
                        what new our blog?
                    </h6>
                    <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
                        Latest <span className="text-red-600">Blogs</span>
                    </h1>
        </div>

        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-12 md:py-12 py-5">
             <BlogCards 
              img={CarImg}
              title={"New car is coming in our showroom"}
              desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis nisi adipisci qui."}
             />  
             <BlogCards 
              img={CarImg}
              title={"New car is coming in our showroom"}
              desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis nisi adipisci qui."}
             />  
             <BlogCards 
              img={CarImg}
              title={"New car is coming in our showroom"}
              desc={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis nisi adipisci qui."}
             />   
        </div>
    </Layout>
  )
}

export default Blogs