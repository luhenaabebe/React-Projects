import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = ({img,title,desc}) => {
  return (
    <Link to="/" className='w-full h-auto rounded-xl overflow-hidden space-y-5'>
        <img src={img} alt="" className="w-full aspect-video object-center object-cover rounded-xl" />

        <div className="space-y-2 px-2">
            <h1 className="text-2xl text-zinc-100 font-medium line-clamp-2">
                {title}
            </h1>
            <p className="text-sm text-zinc-400 font-normal mt-4 line-climp-2">
                {desc}
            </p>
        </div>
    </Link>
  )
}

export default BlogCards