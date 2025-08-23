import React from 'react'
import ResourceCard from '../../components/resource/ResourceCard'
import { FaArrowRightLong } from 'react-icons/fa6'

const ResourcesTemplate = () => {
  return (
    <div className='w-full h-full lg:px-28 md:px-16 sm:px-7 px-4 pb-8'>
        <h1 className="text-center text-3xl font-bold text-violet-600 mb-8">
            Availabe Resources
        </h1>
        <div className="w-full grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
            <ResourceCard imgUrl={"https://media.istockphoto.com/id/1251687299/photo/training-related-words-written-wood-blocks-sitting-on-wood-surface-in-front-a-defocused.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEV_UfO8P0oPvpnpxtNCqHAXqb96JlNCLfSaXrXqh74="} title={"React notes"}/>
        </div>
        <div className="w-full mt-10 flex items-center justify-center">
            <button className="bg-violet-600 px-4 py-2 mb-10 rounded-md border-violet-600 text-sm
           text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300 flex items-center gap-x-2">
                View All<FaArrowRightLong className='text-sm'/>
            </button>
        </div>
    </div>
  )
}

export default ResourcesTemplate